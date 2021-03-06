import React from 'react';
import './App.css';

import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent, TopCar} from "./NewComponent";
import {Button} from "./components/Button";
import {Sort} from "./components/Sort";
import {HookTest} from "./components/HookTest";

const students = [
    {id: 1, name: "James", age: 8},
    {id: 2, name: "Robert", age: 18},
    {id: 3, name: "John", age: 28},
    {id: 4, name: "Michael", age: 38},
    {id: 5, name: "William", age: 48},
    {id: 6, name: "David", age: 58},
    {id: 7, name: "Richard", age: 68},
    {id: 8, name: "Joseph", age: 78},
    {id: 9, name: "Thomas", age: 88},
    {id: 10, name: "Charles", age: 98},
    {id: 11, name: "Christopher", age: 100},
]

const topCars = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'},
]


function App() {
const button1Foo=(subscribe:string,age:number)=>{
console.log(subscribe,age)
}
const button2Foo=(subscribe:string,age:number)=>{
console.log(subscribe,age)
}
const button3Foo=()=>{
    console.log(`test button`)
}
    return (<div>
            <HookTest/>
            <Header titleForHeader={`new bod`}/>
            <Body titleForBody={`new body`}/>
            <Footer titleForFooter={`new Footer`} />
            <NewComponent students={students}/>
            <TopCar topCars={topCars}/>
            {/*<ButtonTest/>*/}
            <Button name={`MyYoutubeChanel-1`} callback={()=>button1Foo(`ivan`,12)}/>
            <Button name={`MyYoutubeChanel-2`} callback={()=>button2Foo(`vasan`,22)}/>
            <Button name={`test button`} callback={button3Foo}/>
            <Sort/>
        </div>

    )
}

export default App;

// function ButtonTest(){
//     // const myFirstSubsctibe=(event:React.MouseEvent<HTMLButtonElement>)=>{
//     //     console.log('hello vasa')
//     // }
//     // const mySecondSubsctibe=(event:React.MouseEvent<HTMLButtonElement>)=>{
//     //     console.log('hello qwe')
//     // }
//     const onClickHandler=(name:string)=>{
//         console.log(name)
//     }
//
// //     const foo1=()=>{
// //         console.log(100200)
// //     }
// //     const foo2=(number:number)=>{
// // console.log(number)
// //     }
//
//     return(
//         <div className="Button">
//             {/*<button onClick={(event)=>{console.log('hello')}}>*/}
//             {/*    MyYoutubeChanel-1*/}
//             {/*</button>*/}
//             <button onClick={(event)=>onClickHandler(`vasa`) }>
//                 MyYoutubeChanel-1
//             </button><button onClick={(event)=>onClickHandler(`peta`)}>
//                 MyYoutubeChanel-2
//             </button>
//             {/*<button onClick={foo1}>1</button>*/}
//             {/*<button onClick={()=>foo2(321321321)}>2</button>*/}
//         </div>
//     )
// }

