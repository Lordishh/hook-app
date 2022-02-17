import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { HomeScreen } from "./HomeScreen";
import { AboutScreen } from "./AboutScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from './NavBar';
import { NotFoundPage } from './NotFoundPage';

const AppRouter = () => {
  return (
    <Router>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<HomeScreen />} />

          <Route path="/about" element={<AboutScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
