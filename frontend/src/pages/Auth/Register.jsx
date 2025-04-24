import './Auth.css'

// components
import { Link } from 'react-router-dom'

// hooks
import { useState, useEffect } from 'react'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user)
  }

  return (
    <div id="register">
      <h2>ReactGram</h2>
      <p className='subtitle'>Sign-up to share photos with your friends!</p>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='Name' 
          onChange={(e) => setName(e.target.value)} 
          value={name || ""} 
        />
        <input 
          type="email" 
          placeholder='E-mail' 
          onChange={(e) => setEmail(e.target.value)} 
          value={email || ""} 
        />
        <input 
          type="password" 
          placeholder='Password' 
          onChange={(e) => setPassword(e.target.value)} 
          value={password || ""} 
        />
        <input 
          type="password" 
          placeholder='Confirm your password' 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          value={confirmPassword || ""} 
        />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already has an account? <Link to="/login">Click here!</Link>
      </p>
    </div>
  )
}

export default Register