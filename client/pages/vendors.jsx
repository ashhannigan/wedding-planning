import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from "./login.jsx";
import Calendar from "./calendar.jsx"
import RelaxMode from "../components/relax-mode.jsx";
import DarkMode from "../components/dark-mode.jsx";

function Vendor () {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/vendors")
    }

    return (
        <div>
            <header className="flex-container heading-tabs"> 
                <p className="home-page-header"><a href="/home"> Home </a></p> 
                <p className="home-page-header"><a href="/calendar"> Calendar </a></p> 
                <p className="home-page-header"><a href="/guestlist"> Guests </a></p> 
                <p className="home-page-header"><a href="/vendors"> Vendors </a></p> 
            </header>

            <section>
            <p>Vendor list </p>       
            </section>

            <footer className="flex-container">
                <p className="home-page-footer"><a href="/home"> Home </a></p>
                <p className="home-page-footer"><a href="/calendar"> Calendar </a></p> 
                <p className="home-page-footer"><a href="/guests"> Guests </a></p> 
                <p className="home-page-header"><a href="/vendors"> Vendors </a></p> 
            </footer>
        </div>
         )
};

export default Vendor;
