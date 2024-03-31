import React from 'react';
// import { useNavigate } from 'react-router-dom';

function Profile () {
    // const navigate = useNavigate();
    // const handleClick = (e) => {
    //     e.preventDefault();
    //     navigate("/profile")
    //     console.log('profile clicked')
    // }
    return (
        <div>
            <button id="btn-profile" onClick={handleClick()}> Profile </button>
        </div>
    )
};

export default Profile;
