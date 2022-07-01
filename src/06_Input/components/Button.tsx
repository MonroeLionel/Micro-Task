import React from "react";

type ButtonPropsType = {
   name: string
   callBack: (el: string) => void
   title: string
}

export function Button(props: ButtonPropsType) {

   const Onclickhandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      props.callBack(props.title)

   }
   return (
     <div>
        <button onClick={Onclickhandler}>{props.name}</button>

     </div>
   )
}