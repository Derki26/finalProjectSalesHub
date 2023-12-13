import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Courses } from './pages/Courses';
import { Certificate } from './Components/Certificate';
import { Contact } from './Components/Contact';
import { Login } from './Components/Login';
import { Information } from './Components/Information';
import './index.css';


import RequireAuth from "./Components/lib/require-auth.jsx"
import { AuthProvider } from "./Components/lib/context/auth-context";

const withAuthProvider = (Component, requireAuth = false,) => {
return (
	<AuthProvider>
	{requireAuth? (
		<RequireAuth>
		 <Component/>
		</RequireAuth>
	) : (
		<Component/>
	)}
	</AuthProvider>
);
};

const router = createBrowserRouter([
	{
		path: '/',
		//element: <App />,
		element: withAuthProvider (App,true),
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/courses',
				element: <Courses />,
			},
			{
				path: '/certificate',
				element: <Certificate />,
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/information',
				element: <Information />,
			},
		],
	},
	{
		path: '/Login',
		element: withAuthProvider(Login,true)
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
