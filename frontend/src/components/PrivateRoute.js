import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import config from '../config';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return <div>Loading...</div>;
  }

  return localStorage.getItem(config.TOKEN_KEY) ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
