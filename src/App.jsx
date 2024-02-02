import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar'

import './styles/app.css'
import Home from './pages/Home'
import NewPost from './pages/NewPost'
import Post from './pages/Post'
import EditPost from './pages/EditPost'

function App() {

  return (
    <>
      <div className="container">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/new' element={<NewPost/>}/>
          <Route path= "/posts/:id" element={<Post/>}/>
          <Route path= "/posts/:id/edit" element={<EditPost/>}/>
        </Routes>
      </BrowserRouter> 
      </div>
    </>
  )
}

export default App
