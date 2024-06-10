import { createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Admin from './components/Admin'

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/Admin",
    element: <Admin/>
  }
]) 

export default App
