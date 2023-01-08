import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'

// const router=createBrowserRouter({
//   path:"/",
//   element:<
// })

const App = () => {
  return (
    <div>
      <Home></Home>
    </div>
  )
}

export default App