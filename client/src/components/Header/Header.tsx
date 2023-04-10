import williamShakespeare from "../../assets/williamShakespeare.svg"


const Header = () => {
    return (
        <img src={williamShakespeare} width="100px" height="100px" />
        // <div className="header">
        //     <h1>ShakeSearch</h1>
        //     <FontAwesomeIcon style={{color: "rgb(101, 62, 187)", fontSize: "0.75em"}} icon={faFeatherPointed}/>
        // </div>
    )
}

export { Header };