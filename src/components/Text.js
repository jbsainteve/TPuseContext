import { useUserContext } from '../contexts/UserContext'

const Text = () => {
  const { lang } = useUserContext()
  return <h1>langue : {lang}</h1>
}

export default Text
