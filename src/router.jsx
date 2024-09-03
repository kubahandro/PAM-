import { createBrowserRouter } from "react-router-dom"
import Servises from "./components/servises/Servises"
import Layout from "./components/Layout/Layout"
import Home from "./Pages/Home"
import About from "./Pages/About"


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            }, {
                path:"servises",
                element:<Servises/>
            }
        ]
    }
])