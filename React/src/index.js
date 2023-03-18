import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RegisterHealthcare from './views/RegisterHealthcare';
import NeonatalCare from './views/NeonatalCare';
import Volunteer from './views/Volunteer';
import ThanksForRegistering from './views/ThanksForRegistering';
import LoginHealthcare from './views/LoginHealthcare';
import SearchForSNCU from './views/SearchForSNCU';
import LoginRegister from './views/LoginRegister';
import RegisterSNCU from './views/RegisterSNCU';
import LoginSNCU from './views/LoginSNCU';
import SearchSNCUResults from './views/SearchSNCUResults';
import About from './views/About.js';
import ReferralRequests from './views/ReferralRequests';
import Dashboard from './views/Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/neonatal-care",
    element: <NeonatalCare />
  },
  {
    path: "/volunteer",
    element: <Volunteer/>,
  },
  {
    path: "/register-healthcare",
    element: <RegisterHealthcare/>,
  },
  {
    path: "/thanks-for-registering",
    element: <ThanksForRegistering/>,
  },
  {
    path: "/login-healthcare",
    element: <LoginHealthcare/>,
  },
  {
    path: "/search-for-SNCU",
    element: <SearchForSNCU/>,
  },
  {
    path: "/login-register",
    element: <LoginRegister/>,
  },
  {
    path: "/register-sncu",
    element: <RegisterSNCU/>,
  },
  {
    path: "/login-sncu",
    element: <LoginSNCU/>,
  },
  {
    path: "/search-sncu-results",
    element: <SearchSNCUResults/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/referral-requests",
    element: <ReferralRequests/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
