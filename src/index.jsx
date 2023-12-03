import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Components/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Certificate } from "./Components/Certificate";
import { Contact } from "./Components/Contact";
import "./index.css";


const router = createBrowserRouter([
  {
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
      {
				path: "/courses",
				element: <Courses />,
			},
      {
				path: "/certificate",
				element: <Certificate />,
			},
      {
				path: "/contact",
				element: <Contact />,
			},
		],
	},

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);