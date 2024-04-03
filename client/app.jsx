//href links on line 17 and 26 are not currently working
import "../client/css/styles.css";
import HomePage from "./pages/home-page.jsx";
// import store from './store';
import Calendar from "./pages/calendar.jsx";
import Vendors from "./pages/vendors.jsx";
import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./pages/login.jsx";
import GuestList from "./pages/guests.jsx";
import ProfileMode from "./components/profile-mode.jsx";


function App() {
    return (
        // <span className="app-header">
        //     <h1>{HomePage()}</h1>
        // </span>
        <div>
        <BrowserRouter>
        <Routes>
            <Route index element={<Login />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<HomePage />}></Route>
            <Route path="/home" element={<HomePage />}></Route>
            <Route path="/calendar" element={<Calendar />}></Route>
            <Route path="/vendors" element={<Vendors />}></Route>
            <Route path="/guestlist" element={<GuestList />}></Route>
            <Route path="/editprofile" element={<ProfileMode />}></Route>
        </Routes>
        </BrowserRouter>
        </div>
    )
};

const root = createRoot(document.querySelector('#root'));
root.render(<><App/></>);
