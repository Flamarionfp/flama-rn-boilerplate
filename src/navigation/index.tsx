import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AppRoutes from './App.routes';
import AuthRoutes from './Auth.routes';

const Navigation: React.FC = () => {
  const { signed } = useAuth();

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Navigation;
