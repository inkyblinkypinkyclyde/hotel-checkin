import React from "react";
import BookingForm from "./BookingForm";

const GuestPage = ({ addBooking }) => {
    return (
        <>
            <BookingForm
                addBooking={addBooking}

            />
        </>
    )
}

export default GuestPage;