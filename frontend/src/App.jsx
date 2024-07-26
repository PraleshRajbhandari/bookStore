import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/Home';
import EditBook from './page/EditBook';
import DeleteBook from './page/DeleteBook';
import CreateBook from './page/CreateBook';
import ShowBook from './page/ShowBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='books/details/:id' element={<ShowBook/>}/>
    </Routes>
  )
}

export default App