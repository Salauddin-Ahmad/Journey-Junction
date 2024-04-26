import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AuthProvider from './firebase/AuthProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './layouts/Root'
import Error from './Error/Error'
import Navabar from './components/Navabar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Navabar></Navabar>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
