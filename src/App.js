import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Login from './components/pages/login/login';
import Home from './components/pages/home/home';
import Dashboard from './components/pages/dashboard/dashboard';
import Profile from './components/pages/profile/profile';
import ResponsiveDrawer from './components/common/sidebar/sidebar';
import AddFarmer from './components/pages/farmer/addfarmer';
import UpdateFarmer from './components/pages/farmer/updatefarmer';
import AddDistributor from './components/pages/distributor/adddistributor';
import UpdateDistributor from './components/pages/distributor/updatedistributor';
import CropDetails from './components/pages/crops/cropdetails';
import CropRecord from './components/pages/crops/croprecord';


function App() {
  return (
    function PrivateRoute({ element: Component, role, ...rest }) {
      const userRole = localStorage.getItem('userRole');
      if (userRole === 'SuperAdmin' || (userRole === 'Farmer' && ['updatefarmer', 'updatedistributor', 'profile']
        .includes(rest.path))) {
        return <Route {...rest} element={<Component />} />;
      } else {
        return <Navigate to="/" />;
      }
    },

    <BrowserRouter>
      <ResponsiveDrawer>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} role={['SuperAdmin', 'Farmer']} />
          <Route path="/dashboard" element={<Dashboard />} role={['SuperAdmin', 'Farmer']} />
          <Route path="/profile" element={<Profile />} role={['SuperAdmin', 'Farmer']} />
          <Route path="/addfarmer" element={<AddFarmer />} role="SuperAdmin" />
          <Route path="/updatefarmer" element={<UpdateFarmer />} role={['SuperAdmin', 'Farmer']} />
          <Route path="/adddistributor" element={<AddDistributor />} role="SuperAdmin" />
          <Route path="/updatedistributor" element={<UpdateDistributor />} role={['SuperAdmin', 'Farmer']} />
          <Route path="/cropdetails" element={<CropDetails />} role="SuperAdmin" />
          <Route path="/croprecords" element={<CropRecord />} role={['SuperAdmin', 'Farmer']} />
        </Routes>
      </ResponsiveDrawer>
    </BrowserRouter>
  );
}

export default App;
