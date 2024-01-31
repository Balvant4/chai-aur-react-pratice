import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [number, setCount] = useState(10)

  let addnumber = function(){
    if(number < 20){
      setCount(number + 1)
      // for the interview parpection
      // setCount(prevnumber => prevnumber + 1)
      // setCount(prevnumber => prevnumber + 1)
      // setCount(prevnumber => prevnumber + 1)

    }else{
      alert("number is not greater then 20 !")
    }
  }

  let removenumber = function(){
    if(number > 0){
      setCount(number-1)
    }else{
      alert("number is not less then 0!")
    }
  }

//   let [name, setName] = useState("balvant")
//   let addlastname = function(kumar){
//     setName = name + ' ' + kumar
//   }
// addlastname("kumar")
  

  return (
    <>
    <h1>balvant kumar {number}</h1>
    <p>kumar ajay with now npm {number}</p>
    <button onClick={addnumber}>Add {number}</button><br></br>
    <button onClick={removenumber}>Decrease{number}</button><br></br>
    <p>The number of hook is and we want this number here also {number}</p>


    {/* <p>My name is this {setName}</p>
    <h1>my name is this {setName}</h1>
    <h6>my name is this {name}</h6> */}
    </>

    
  )
}

export default App
