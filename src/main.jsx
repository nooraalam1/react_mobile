import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home';
import Favourites from './Components/Favourites';
import Login from './Components/Login';
import Mainlayout from './Components/Mainlayout';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[{
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('phones.json')
    }
    ,{
      path:'/favourites',
      element:<Favourites></Favourites>
    },
    {
      path:'/login',
      element:<Login></Login>
    }
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
