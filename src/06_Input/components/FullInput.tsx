import React, {ChangeEvent, useState} from 'react';

type add={
   add:(el:string)=>void
}

export function FullInput (props:add){
   let [title,setTitle]=useState(``)
   const onChangeInputHandler=(event:ChangeEvent<HTMLInputElement>)=>{
      setTitle(event.currentTarget.value)
      // console.log(title)

   }
const Onclickhandler=(event:React.MouseEvent<HTMLButtonElement>)=>{
   props.add(title)
   setTitle(``)

   }
   return(
     <div>
        <input value={title} onChange={onChangeInputHandler}/>
        <button onClick={Onclickhandler}>+</button>
     </div>
   )
}