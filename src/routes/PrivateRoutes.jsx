import React, { Children, useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loader) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (user) {
    return children;
  }
  return <Navigate to='/login' state={{ from: location }}></Navigate>;
};

export default PrivateRoutes;
