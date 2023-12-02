import React from "react";
import ReactDOM from "react-dom";
import { 
  BrowserRouter as Router, RouterProvider
 } from "react-router-dom";
import {App} from "./Components/App";

const rootElement = document.getElementById("root");

ReactDOM.creteRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)

