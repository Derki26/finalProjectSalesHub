import { AuthContext } from './context/auth-context';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

/* eslint-disable react/prop-types */
function RequireAuth({ children, reload = false, to = '/login' }) {
	const { currentUser } = useContext(AuthContext);
	const location = useLocation();

	if (!currentUser && reload) {
		return children;
	}

	if (!currentUser && !reload) {
		return (
			<Navigate
				to={`${to}?redirect=${location.pathname}`}
				state={{ from: location }}
				replace
			/>
		);
	}

	return children;
}

export default RequireAuth;
