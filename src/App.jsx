import Login from "./comp/Login"
import Profile from "./comp/Profile"
import ContextProvider from "./contexts/ContextProvider"
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ContextProvider value={{count , setCount}}>
     <Login/>
     <Profile/>
     </ContextProvider>
    </>
  )
}

export default App
