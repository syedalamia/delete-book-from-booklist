import React from 'react'

export default function SingleBook(props) {

    console.log("the passing props of",props)
    return (
        <>
        <p>the name of the mobile is {props.singleOne.name}</p>
        <p>the number of that book is {props.singleOne.phone}</p>
        <button onClick={()=>props.deleteBookValue(props.singleOne.id)}>delete one book from here</button>
            
        </>
    )
}
