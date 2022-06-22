import React from "react";

type ButtonType={
    name:string
    callback:()=>void
}

export function Button(props:ButtonType){
    const onClickHandler=()=>{
        props.callback()
    }
    return(
        <div className={`Button`}>
            <button onClick={onClickHandler}>{props.name}</button>


        </div>
    )
}