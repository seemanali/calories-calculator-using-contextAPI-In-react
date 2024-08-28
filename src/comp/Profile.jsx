import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const Profile = () => {
  const {count} = useContext(UserContext)
  return (
    <div>
   {count }
    </div>
  )
}

export default Profile
