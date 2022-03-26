


function Button(props){
        return(
                <>
                        <button onClick={props.callBack} > {props.text} </button>
                </>
        )
}

export {Button}