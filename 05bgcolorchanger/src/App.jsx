import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [colors, setColor] = useState("olive")

  return (
    <>
      <div className='h-screen' style={{background:colors}}>
      <h1 className='flex justify-center' >This is Website for change background color with the help of given butoon in the bottom</h1>
      <div className=' fixed flex justify-center flex-wrap bottom-12 inset-x-0 px-2  gap-10'>
        <button onClick={() => setColor("green")} className=' bg-green-600 p-3 rounded-xl' style={{background:"green"}}>Green</button>
        <button onClick={() => setColor("red")} className=' bg-green-600 p-3 rounded-xl' style={{background:"red"}}>red</button>
        <button onClick={() => setColor("yellow")} className=' bg-green-600 p-3 rounded-xl' style={{background:"yellow"}}>yellow</button>
        <button onClick={() => setColor("orange")} className=' bg-green-600 p-3 rounded-xl' style={{background:"orange"}}>orange</button>
        <button onClick={() => setColor("gray")} className=' bg-green-600 p-3 rounded-xl' style={{background:"gray"}}>gray</button>
        <button onClick={() => setColor("white")} className=' bg-green-600 p-3 rounded-xl' style={{background:"white"}}>white</button>
        <button onClick={() => setColor("pink")} className=' bg-green-600 p-3 rounded-xl' style={{background:"pink"}}>pink</button>
        <button onClick={() => setColor("teal")} className=' bg-green-600 p-3 rounded-xl' style={{background:"teal"}}>tela</button>
        <button onClick={() => setColor("gold")} className=' bg-green-600 p-3 rounded-xl' style={{background:"gold"}}>gold</button>
        <button onClick={() => setColor("maroon")} className=' bg-green-600 p-3 rounded-xl' style={{background:"maroon"}}>maroon</button>
      </div>
      </div>
    </>
  )
}

export default App
