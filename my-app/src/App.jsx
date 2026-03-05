import { useState } from 'react'
import { handleLogin } from './assets/api/frontend'
import './App.css'

function App() {
  const [name, setName] = useState("")
   const [password, setPassword] = useState("")

  return (
    <>
   
      <h1>What up, freak, create an account</h1>
    <form id="login" name="login"  onSubmit={async (e) => {
    e.preventDefault(); 
    await handleLogin({ name, password });
  }}>
      <div>
      <div style={{padding:10}}>
      <label>
        Enter your name:
        <input
          type="text"
          value={name}
          onChange={(e)=>setName(e.target.value)}
         
        />
      </label>
      </div>
      <div>
       <label>
        Enter your password:
        <input
          type="text"
          value={password}
          onChange={(e)=>(setPassword(e.target.value))}
         
        />
      </label>
      </div>
      </div>
      <div style={{padding:10}}>
      <button  type="submit">Submit</button>
      </div>
    </form>
      
   
    </>
  )
}

export default App
