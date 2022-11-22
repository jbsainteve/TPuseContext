import { createContext, useContext } from 'react'
import useUser from '../hooks/useUser'

const UserContext = createContext()

export const useUserContext = () => {
  const user = useContext(UserContext)

  return user
}

export const UserProvider = ({ children }) => {
  const user = useUser()
  // const user = {
  //   name: 'Antho',
  //   age: 30,
  //   lang: 'js'
  // }

  return user ? (
    <UserContext.Provider value={user}>{children}</UserContext.Provider>
  ) : (
    <h1>Chargement...</h1>
  )
}
