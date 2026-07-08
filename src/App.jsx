import "./App.css"
import Nav from './Component/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer/Footer'

function App() {
  return (
    <>
      <Nav/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default App
