import { Route, Routes } from 'react-router'
import Navbar from './components/Navbar'
import MainBody from './components/MainBody'
import All from './components/All'
import Normal from './components/Normal'
import Medium from './components/Medium'
import Hard from './components/Hard'

function App() {

  return (
    <>
      <Navbar/>
      <MainBody/>
      <Routes>
        <Route path='/' Component={All}/>
        <Route path='/Normal' Component={Normal}/>
        <Route path='/Medium' Component={Medium}/>
        <Route path='/Hard' Component={Hard}/>
      </Routes>
    </>
  )
}

export default App
