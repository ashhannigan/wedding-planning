import React, { useState } from 'react';

function GuestList () {


    return (
        <div>
            <header className="flex-container heading-tabs"> 
                <p className="home-page-header"><a href="/home"> Home </a></p> 
                <p className="home-page-header"><a href="/calendar"> Timeline </a></p>
                <p className="home-page-header"><a href="/guestlist"> Guests </a></p> 
                <p className="home-page-header"><a href="/vendors"> Vendors </a></p> 
                <p id="btn-relax">{RelaxMode()}</p>
                <p id="btn-dark">{DarkMode()}</p>
            </header>

            <section>
            <p>Guest list </p>       
            </section>

            <footer className="flex-container">
                <p className="home-page-footer"><a href="/home"> Home </a></p>
                <p className="home-page-footer"><a href="/calendar"> Timeline </a></p>
                <p className="home-page-footer"><a href="/guestlist"> Guests </a></p> 
                <p className="home-page-header"><a href="/vendors"> Vendors </a></p> 
            </footer>
        </div>
         )
};

export default GuestList;
