import React from "react";

type ButtonPropsType = {
   name: string
   callBack: () => void

}

export function Button(props: ButtonPropsType) {

   const Onclickhandler = (event: React.MouseEvent<HTMLButtonElement>) => {
      props.callBack()

   }
   return (
     <div>
        <button onClick={Onclickhandler}>{props.name}</button>

     </div>
   )
}