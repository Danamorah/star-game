const PlayNumber = props => {
    return(
        <button className="number" onClick={() => console.log("number", props.numberId)}>
          {props.numberId}
        </button>
    )
    
}

export default PlayNumber;