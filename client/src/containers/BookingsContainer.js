import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../components/Navigation"
import BookingsTable from '../components/BookingsTable';
import GuestPage from '../components/GuestPage';
import { getBookings } from '../BookingsService'

const BookingsContainer = () => {

    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setBookings(allBookings);
        })
    }, [bookings]);

    const addBooking = (booking) => {
        const tempData = bookings
        tempData.push(booking)
        setBookings(tempData)
    }

    const removeBooking = (id) => {
        const temp = bookings.map(s => s);
        const indexToDel = temp.map(s => s._id).indexOf(id);
        temp.splice(indexToDel, 1);
        setBookings(temp);
    }

    // const updateCheckIn = (id) => {

    // }

    return (
        <Router>
            <h1>Hotel Booking System</h1>
            <Navigation />
            <Routes>
                <Route path="/" />
                <Route
                    path="/guest"
                    element=
                    {
                        <GuestPage
                            bookings={bookings}
                            addBooking={addBooking}
                        />
                    }
                />
                <Route
                    path="/manager"
                    element=
                    {
                        <BookingsTable
                            bookings={bookings}
                            addBooking={addBooking}
                            removeBooking={removeBooking}
                        // updateCheckIn={updateCheckIn}
                        />
                    }
                />
            </Routes>
        </Router>
    )
}

export default BookingsContainer;



