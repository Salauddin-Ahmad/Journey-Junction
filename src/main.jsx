import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AuthProvider from './firebase/AuthProvider'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './layouts/Root'
import Error from './Error/Error'
import Login from './components/Login'
import Register from './components/Register'
import Sliders from './components/Sliders'
import AddTouristForm from './components/AddTouristForm'
import MySpotsCard from './components/MySpotsCard'
import UpdateDEtails from './components/UpdateDEtails'
import ToristSpots from './components/ToristSpots'
import AllSpots from './components/AllSpots'
import PrivateRoute from './components/PrivateRoute'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: 
        <>
        <Sliders></Sliders>
        <ToristSpots></ToristSpots>
        </>
        ,
      },
      {
        path: "/updateDetails/:id",
        element: <UpdateDEtails></UpdateDEtails>,
      },
      {
        path: "/myList",
        element: <PrivateRoute>
          <MySpotsCard></MySpotsCard>
        </PrivateRoute>
      },
      {
        path: "/allspots",
        element: <PrivateRoute>
          <AllSpots></AllSpots>
        </PrivateRoute>,
      },
      {
        path: "/addspots",
        element: <AddTouristForm></AddTouristForm>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
