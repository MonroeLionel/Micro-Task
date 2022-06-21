import React from 'react';

type NewComponentType = {
    students: Array<StudenType>
}
type StudenType = {
    id: number
    name: string
    age: number
}
type topCarsType = {
    topCars: Array<{
        manufacturer: string
        model: string
    }>
}

export function NewComponent(props: NewComponentType) {
    return (
        <div>
            <ul>
                {props.students.map((k, index) => {
                    return (
                        <li key={k.id}>
                            {k.name} {k.age}
                        </li>
                    )

                })

                }
            </ul>
        </div>
    )
}

export function TopCar(props:topCarsType) {
    return (
        <table>
            {props.topCars.map((j,index,array,)=>{

             return(
                 <tr key={index}>
                     <td>{index+1}</td>
                     <td>{j.manufacturer}</td>
                     <td>{j.model}</td>
                 </tr>
             )
            })}


        </table>
    )
}

