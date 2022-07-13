import React from 'react';
import BookingForm from './BookingForm';
import BookingRow from './BookingRow';

const BookingsTable = ({ bookings, addBooking, removeBooking }) => {  //, updateCheckIn 

    const bookingsList = bookings.map((booking) => {
        return (
            <BookingRow
                booking={booking}
                key={booking._id}
                removeBooking={removeBooking}
            // updateCheckIn={updateCheckIn}
            />
        )

    })

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Checked In</th>
                        <th>Delete</th>
                        <th>Check In/Out</th>
                    </tr>
                </thead>
                <tbody>
                    {bookingsList}
                </tbody>
            </table>
            <BookingForm addBooking={addBooking} />
        </>
    )
}

export default BookingsTable;