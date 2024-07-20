import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //const [color,setColor] = useState('red');
  
  const changecolor=(color)=>{
    document.body.style.backgroundColor=color;
  }
  return (
    <>
 
<div className='new'>
 <button onClick={() =>changecolor('red')}id='red' className='content1'>Red</button>

  <button onClick={() =>changecolor('green')} id='Green'className='content1'>Green</button>

  <button onClick={() =>changecolor('orange')}id='orange'className='content1'>Orange</button>

  <button onClick={() =>changecolor('blue')}id='blue'className='content1'>Blue</button>

  <button onClick={() =>changecolor('pink')}id='pink'className='content1'>pink</button>

  <button  onClick={() =>changecolor('yellow')}id='yellow'className='content1'>yellow</button>

 </div>
  

      </>
     
    
  )
  
}

export default App;
