import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Websites/Home';
import About from './Websites/About';
import Dashboard from './Admin/Dashboard';
import AddCategory from './Admin/Category/AddCategory';
import ViewCategory from './Admin/Category/ViewCategory';


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/dashboard",
    element:<Dashboard/>,
  },
  ,
  {
    path: "/dashboard/addcategory",
    element:<AddCategory/>,
  },
  ,
  {
    path: "/dashboard/viewcategory",
    element:<ViewCategory/>,
  },

]);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
