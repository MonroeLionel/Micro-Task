import React, {useState} from 'react';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";


export function MikroTaskInput() {
   const [title, setTitle] = useState(``)

   const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
     ]
   )
   const battonKlik = (el: string) => {
      let newMessage = {message: el}
      console.log(newMessage)
      setMessage([newMessage, ...message])
      console.log(el)
      setTitle(``)
   }
   const add = (el: string) => {
      let newMessage = {message: el}
      console.log(newMessage)
      setMessage([newMessage, ...message])
   }
   const onChangeInput = (el: string) => {
      setTitle(el)
   }
   return (
     <div>
        <Input title={title} callBack={onChangeInput}/>
        <Button title={title} name={`+`} callBack={battonKlik}/>
        {/*<FullInput add={add}/>*/}
        {message.map((el, index) => {
           return (
             <div key={index}>{el.message}</div>
           )
        })}
     </div>

   )


}

