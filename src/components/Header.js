import { useUserContext } from '../contexts/UserContext'

const Header = () => {
  const { name } = useUserContext()
  return <div>nom : {name}</div>
}

export default Header
