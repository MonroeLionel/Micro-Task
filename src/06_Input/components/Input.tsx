import React, {ChangeEvent, useState} from 'react';

type ImputPropsType = {
   title: string
   callBack: (el: string) => void
}


export function Input(props: ImputPropsType) {
   // const [title, setTitle] = useState(``)

   const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
      props.callBack(event.currentTarget.value)
      // console.log(props.title)

   }
   return (
     <div>
        <input value={props.title} onChange={onChangeInputHandler}/>
     </div>
   )
}