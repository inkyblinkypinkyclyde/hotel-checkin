import React from "react";
import { deleteBooking, updateCheckIn, updateCheckOut } from '../BookingsService'

const BookingRow = ({ booking, removeBooking }) => {
    // console.log(booking)

    const checkedInDisplay = () => {
        if (booking.checkedIn === false) {
            return "❌"
        } else {
            return "✅"
        }
    }

    const handleDelete = () => {
        deleteBooking(booking._id)
            .then(() => {
                removeBooking(booking._id)
            })
    }

    const handleCheckInOut = () => {
        console.log(booking.checkedIn)
        if (booking.checkedIn === true) {
            updateCheckOut(booking)
        } else {
            updateCheckIn(booking)
        }
    }

    return (
        <tr>
            <td>{booking.name}</td>
            <td>{booking.email}</td>
            <td>{checkedInDisplay({ booking })}</td>
            <td><button onClick={handleDelete} alt="">🚮</button></td>
            <td><button onClick={handleCheckInOut} alt="">🛫</button></td>
        </tr>
    )
}

export default BookingRow;