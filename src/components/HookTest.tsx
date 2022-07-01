import React, {useState} from 'react';

export function HookTest (){
   // let a=1
    let [k,setA]=useState(1)
    const onClickHandler=()=>{
        k++
        setA(k);

       console.log(k)
    }
    const onClickHandler2=()=>{

        setA(0);

        console.log(k)
    }

    return(
        <div>
            <h1>{k}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}