import './Auth.css'

// components
import { Link } from 'react-router-dom'

// hooks
import { useState, useEffect } from 'react'

const Register = () => {

  const handleSubmit = () => {

  }

  return (
    <div>
      <h2>ReactGram</h2>
      <p className='subtitle'>Sign-up to share photos with your friends!</p>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Name' />
        <input type="email" placeholder='E-mail' />
        <input type="password" placeholder='Password' />
        <input type="password" placeholder='Confirm your password' />
        <input type="submit" value="Register" />
      </form>
      <p>
        Already has an account? <Link to="/login">Click here!</Link>
      </p>
    </div>
  )
}

export default Register