import { useState } from 'react';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Transactions from './pages/Transactions/Transactions';
import Support from './pages/Support/Support';
const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard/>
  },
  {
    path:'/transactions',
    element:<Transactions/>
  },
  {
    path:'/support',
    element:<Support/>
  },

])

function App() {

  return (
<>
<RouterProvider router={router} />

</>
     
  )
}

export default App
