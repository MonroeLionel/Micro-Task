import React from "react";

type SortCurenciType={

    onClickFilterHandler:(value:FilterValueType)=>void
    currentMoney:Array<currentMoneyType>
}
type  currentMoneyType={
    banknote:string
    nominal: number
    number: string}
type FilterValueType= `all`| `dollar` |`ruble`
export const SortCurenci=(props:SortCurenciType)=>{
    return(
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr,index)=>{

                        return(
                            <li key={index}>
                                <span>{objFromMoneyArr.banknote}</span>
                                <span>{objFromMoneyArr.nominal}</span>
                                <span>{objFromMoneyArr.number}</span>
                            </li>
                        )
                    }
                )}
            </ul>
            <div style={{marginLeft:`35px`}}>
                <button onClick={()=>props.onClickFilterHandler(`all`)}>all</button>
                <button onClick={()=>props.onClickFilterHandler(`ruble`)}>ruble</button>
                <button onClick={()=>props.onClickFilterHandler(`dollar`)}>dollar</button>
            </div>
        </>
    )
}