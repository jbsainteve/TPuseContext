import { useState, useEffect } from 'react'

const useUser = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Chargement asynchrone des données
    // ...
    // ...
    setTimeout(() => {
      setUser({
        name: 'Antho',
        age: 30,
        lang: 'js'
      })
    }, 3000)
  }, [])

  return user
}

export default useUser
