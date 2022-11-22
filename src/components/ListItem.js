import { useUserContext } from '../contexts/UserContext'

const ListItem = () => {
  const { age } = useUserContext()
  return <span>age : {age}</span>
}

export default ListItem
