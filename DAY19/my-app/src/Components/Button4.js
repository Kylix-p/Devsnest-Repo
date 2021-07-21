import React, {useState} from 'react'

const Button4 = () =>{

  let [count, setCount] = useState(0);

  let countHandler = () =>{
    setCount((prevState) =>{
      return prevState + 1;
    })
  }


  return (
    <button onClick = {countHandler}>{count} </button>
  )
}


export default Button4;