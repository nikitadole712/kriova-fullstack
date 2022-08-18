import React from 'react';
import SignInOutContainer from './Container/SignInOutContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<SignInOutContainer />} />
        <Route path="/forgot" exact element={<ForgotPassword />} />
        <Route path="/profile" exact element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
