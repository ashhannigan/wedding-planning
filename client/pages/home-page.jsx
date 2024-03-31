import Login from "./login.jsx";
import Vendor from "./vendors.jsx"
import Calendar from "./calendar.jsx";
import Guests from "./guests.jsx"; 
import RelaxMode from "../components/relax-mode.jsx";
import DarkMode from "../components/dark-mode.jsx";
import Profile from "../components/profile-mode.jsx"
// import store from './store';
import React, { useState} from 'react';
import ReactDOM, { createRoot } from 'react-dom';

function HomePage() {
      
    return (
        <div className="app-header">
            <header className="flex-container heading-tabs"> 
                <p id="btn-profile">{Profile()}</p>
                <p className="home-page-header"><a href="/home"> Home </a></p> 
                <p className="home-page-header"><a href="/calendar"> Calendar </a></p> 
                <p className="home-page-header"><a href="guestlist"> Guests </a></p> 
                <p className="home-page-footer"><a href="/vendors"> Vendors </a></p> 
                <p id="btn-relax">{RelaxMode()}</p> 
                <p id="btn-dark">{DarkMode()}</p>
            </header>
            <section>
                <h1>Home Page</h1>
                {/* <h1 class="calendar-test">{<Calendar />} Calendar</h1> */}
                {/* <h1 class="vendor-test">{<Vendor />}</h1> */}
            </section>
            <footer className="flex-container">
                <p className="home-page-footer"><a href="/home"> Home </a></p>
                <p className="home-page-footer"><a href="/calendar"> Calendar </a></p> 
                <p className="home-page-footer"><a href="/guestlist"> Guests </a></p> 
                <p className="home-page-footer"><a href="/vendors"> Vendors </a></p> 
            </footer>
        </div>
    )
}

export default HomePage;