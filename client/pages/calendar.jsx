import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from "./login.jsx";
import Vendor from "./vendors.jsx"
import RelaxMode from "../components/relax-mode.jsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

function Calendar () {
    const [currentDate, setCurrentDate] = useState(new Date());
    
    const navigate = useNavigate();
    const handleClick = (e) => {
        e.preventDefault();
        navigate("/calendar")
    }

    return (
        <div>
            <header className="flex-container heading-tabs"> 
                <p className="home-page-header"><a href="/home"> Home </a></p> 
                <p className="home-page-header"><a href="/calendar"> Timeline </a></p> 
                <p className="home-page-header"><a href="/guestlist"> Guests </a></p> 
                <p className="home-page-footer"><a href="/vendors"> Vendors </a></p> 
                <p id="btn-relax">{RelaxMode()}</p>
                <p id="btn-dark">{DarkMode()}</p>
            </header>

            <section>
                <p>Today's date: {currentDate.toLocaleDateString()}</p>
             <FontAwesomeIcon icon="fa-solid fa-calendar" />        
            </section>

            <footer className="flex-container">
                <p className="home-page-footer"><a href="/home"> Home </a></p>
                <p className="home-page-footer"><a href="/calendar"> Timeline </a></p> 
                <p className="home-page-footer"><a href="/guestlist"> Guests </a></p> 
                <p className="home-page-footer"><a href="/vendors"> Vendors </a></p> 
            </footer>
        </div>
         )
};

export default Calendar;

