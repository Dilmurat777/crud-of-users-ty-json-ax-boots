import { Routes, Route } from 'react-router-dom'
import './App.css'
// import Home from './components/Home'
// import Create from './components/Create'
// import Read from './components/Read'
// import Update from './components/Update'
import {Home, Read, Create, Update} from './components'

function App () {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='/read/:id' element={<Read/>}/>
      <Route path='/update/:id' element={<Update/>}/>
    </Routes>
  )
}

export default App
