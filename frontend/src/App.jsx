import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Routes,Route} from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import Home from './pages/Home'



function App() {
 

  return (
 
    <Routes>
      <Route path ='/' element={<Home/>} />
      <Route path ='/books/create' element={<CreateBook/>} />
      <Route path ='/books/details/:id' element={<ShowBook/>} />
      <Route path ='/books/edit/:id' element={<EditBook/>} />
      <Route path ='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App
