package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"index/suffixarray"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strings"
)

func main() {
	searcher := Searcher{}
	err := searcher.Load("completeworks.txt")
	if err != nil {
		log.Fatal(err)
	}

	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/", fs)

	http.HandleFunc("/api/search", handleSearch(searcher))

	port := os.Getenv("PORT")
	if port == "" {
		port = "3001"
	}

	fmt.Printf("Listening on port %s...", port)
	err = http.ListenAndServe(fmt.Sprintf(":%s", port), nil)
	if err != nil {
		log.Fatal(err)
	}
}

type Searcher struct {
	CompleteWorks string
	SuffixArray   *suffixarray.Index
}

func handleSearch(searcher Searcher) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		query, ok := r.URL.Query()["q"]
		if !ok || len(query[0]) < 1 {
			w.WriteHeader(http.StatusBadRequest)
			w.Write([]byte("missing search query in URL params"))
			return
		}
		results := searcher.Search(query[0])
		buf := &bytes.Buffer{}
		enc := json.NewEncoder(buf)
		err := enc.Encode(results)
		if err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			w.Write([]byte("encoding failure"))
			return
		}
		w.Header().Set("Content-Type", "application/json")
		w.Write(buf.Bytes())
	}
}

func (s *Searcher) Load(filename string) error {
	dat, err := ioutil.ReadFile(filename)
	if err != nil {
		return fmt.Errorf("Load: %w", err)
	}
	s.CompleteWorks = string(dat)
	s.SuffixArray = suffixarray.New([]byte(strings.ToLower(s.CompleteWorks)))
	return nil
}

func (s *Searcher) Search(query string) []string {
	queryLower := strings.ToLower(query)
	idxs := s.SuffixArray.Lookup([]byte(queryLower), -1)
	results := []string{}

	for _, idx := range idxs {
		// ignore matches where query is a substring of a larger word
		//TODO: add condition where character after the query is not a letter
		if idx > 0 && s.CompleteWorks[idx-1] != ' ' {
			continue
		}
		startIdx := idx - 250
		if startIdx < 0 {
			startIdx = 0
		}
		endIdx := idx + 250
		if endIdx > len(s.CompleteWorks) {
			endIdx = len(s.CompleteWorks)
		}
		result := s.CompleteWorks[startIdx:endIdx]
		if resultLower := strings.ToLower(result); strings.Contains(resultLower, queryLower) {
			// replace the original casing of the query in the result
			result = strings.ReplaceAll(result, queryLower, query)
			results = append(results, result)
		}
	}
	return results
}
