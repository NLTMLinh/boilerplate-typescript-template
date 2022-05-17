import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CRUDDemoPage from './pages/CRUDDemoPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from 'containers/Auth/PrivateRoute';
import './App.css';
import 'antd/dist/antd.css';
import { HOME_URI, SIGN_IN_URI, CRUD_URI } from 'constants/routes';
const Home = () => <>Home page</>;

function App() {
  return (
    <Routes>
      <Route path={CRUD_URI} element={<CRUDDemoPage />} />
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      <Route path={HOME_URI} element={<PrivateRoute />}>
        <Route path={HOME_URI} element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
