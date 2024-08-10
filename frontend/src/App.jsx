import './App.css'
import { Navigate } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home'
import { useAuthContext } from './context/AuthContext'
function App() {
  
  // To access the value which we stored in AuthContext 
  const {authUser} = useAuthContext() // destructured 
  return (
    <div className='p-4 h-screen flex  items-center justify-center'>
      <Routes>
        <Route path='/' element={ authUser ? <Home /> : < Navigate to = '/login' /> } />
        <Route path='/login' element={ authUser ? < Navigate to = '/' /> : <Login />} />
        <Route path='/signup' element={ authUser ? < Navigate to = '/' /> : <Signup /> } />
      </Routes>
      
      {/* Previously we create router = CreateBrowserRouter([ {path:"", element:</>}, {}, {}]) and return (<> <RouterProvider router={router}/> </>) */}
      {/* Here we are wrapping our main.jsx in BrowserRouter and on App.jsx we are creating several <Route/> inside <Routes/> */}
    </div>
  )
}

export default App
