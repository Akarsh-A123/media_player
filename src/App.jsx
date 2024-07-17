import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Watchhistory from './pages/Watchhistory'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/Home' element={<Home />}/>
        <Route path='/Watchhistory' element={<Watchhistory/>}/>
      </Routes>
      <Footer/>
      
    </>
  )
}

export default App
