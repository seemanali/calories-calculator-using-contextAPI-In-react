import React, { useContext } from 'react'
import userContext from '../contexts/UserContext'

const Login = () => {

    const {count ,setCount} = useContext(userContext)

  return (
    <div>
      this is login
      <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Login
