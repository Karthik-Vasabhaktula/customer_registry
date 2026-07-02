import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get('jwtToken'); // ✅ Correct way to get cookie
    if (!token) {
      navigate('/login');
    }
  }, [navigate]); // ✅ Add dependency

  return <Component />;
};

export default ProtectedRoute;
