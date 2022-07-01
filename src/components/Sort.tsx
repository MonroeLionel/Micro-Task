import React, {useState} from 'react';
import {SortCurenci} from "./SortCurenci";



export function Sort(){
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: ' a1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' z1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' w1234567890'},
        {banknote: 'dollar', nominal: 100, number: ' e1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' c1234567890'},
        {banknote: 'ruble', nominal: 100, number: ' r1234567890'},
        {banknote: 'dollar', nominal: 50, number: ' x1234567890'},
        {banknote: 'ruble', nominal: 50, number: ' v1234567890'},
    ])

    type FilterValueType= `all`| `dollar` |`ruble`
let [filter,setFilter]=useState<FilterValueType>(`all`)

//let currentMoney=money.filter((filteredMone)=>filteredMone.banknote===`ruble`)
    let currentMoney=money
    if(filter===`dollar`){
        console.log(`dollar`)
        currentMoney=money.filter((filteredMone)=>filteredMone.banknote===`dollar`)
    }
    if(filter===`ruble`){
        console.log(`ruble`)
        currentMoney=money.filter((filteredMone)=>filteredMone.banknote===`ruble`)
    }
    if(filter===`all`){
        console.log(`all`)
        currentMoney=money
    }


    const onClickFilterHandler=(name:FilterValueType)=>{
setFilter(name)
    }
    return(
        <>
            <SortCurenci
                onClickFilterHandler={onClickFilterHandler}
                currentMoney={currentMoney}
            />
       {/*<ul>*/}
       {/*    {currentMoney.map((objFromMoneyArr,index)=>{*/}

       {/*        return(*/}
       {/*            <li key={index}>*/}
       {/*            <span>{objFromMoneyArr.banknote}</span>*/}
       {/*            <span>{objFromMoneyArr.nominal}</span>*/}
       {/*            <span>{objFromMoneyArr.number}</span>*/}
       {/*            </li>*/}
       {/*        )*/}
       {/*        }*/}
       {/*    )}*/}
       {/*</ul>*/}
       {/*     <div style={{marginLeft:`35px`}}>*/}
       {/*         <button onClick={()=>onClickFilterHandler(`all`)}>all</button>*/}
       {/*         <button onClick={()=>onClickFilterHandler(`ruble`)}>ruble</button>*/}
       {/*         <button onClick={()=>onClickFilterHandler(`dollar`)}>dollar</button>*/}
       {/*     </div>*/}
        </>

    )
}