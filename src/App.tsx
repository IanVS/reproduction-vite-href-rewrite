import {Navigate, Outlet} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
     <Navigate to='/page'/>
     <Outlet/>
    </>
  )
}

export default App
