import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

import './app.css'

function App() {

  return (
    <>
      <Navbar/>
      <div className="container">
        <Outlet />
      </div>
    </>
  )
}

export default App
