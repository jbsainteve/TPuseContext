import './styles.css'
import { UserProvider } from './contexts/UserContext'

import SideBar from './components/SideBar'
import Content from './components/Content'

const App = () => {
  return (
    <div className="App">
      <h1>Provider Pattern</h1>
      <h2>Pour un state global</h2>

      <UserProvider>
        <div>
          <SideBar />
          <Content />
        </div>
      </UserProvider>
    </div>
  )
}

export default App
