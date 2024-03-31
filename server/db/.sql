CREATE TABLE guestlist (
    user_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    invitation_sent BOOLEAN, 
    rsvp BOOLEAN,
    guests_confirmed INT
);

CREATE TABLE guestaddresses (
    address_id SERIAL PRIMARY KEY,
    street_address VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    state_province VARCHAR(100),
    postal_code VARCHAR(20) NOT NULL
);
