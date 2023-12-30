import React from 'react'
import ReactDOM from 'react-dom/client'
import Places from './Places.jsx'
import Navbar from './components/shared/Navbar.jsx'
import {ChakraProvider, Text} from '@chakra-ui/react'
import { createStandaloneToast } from '@chakra-ui/toast'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login.jsx";
import Signup from "./components/signup/Signup";
import AuthProvider from "./components/context/AuthContext.jsx";
import ProtectedRoute from "./components/shared/ProtectedRoute.jsx";
import './index.css'

const { ToastContainer } = createStandaloneToast();

const router = createBrowserRouter([
    // {
    //     path: "/login",
    //     element: <Login />
    // },
    // {
    //     path: "/signup",
    //     element: <Signup />
    // },
    {
        path: "/",
        element: <div><Navbar /><Places /></div>
    }
])

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <ChakraProvider>
                <AuthProvider>
                    <RouterProvider router={router} />
                </AuthProvider>
                <ToastContainer />
            </ChakraProvider>
        </React.StrictMode>,
    )
