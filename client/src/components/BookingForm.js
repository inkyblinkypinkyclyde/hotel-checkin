import React, { useState } from "react";
import { postBooking } from "../BookingsService";

const BookingForm = ({ addBooking }) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        checkedIn: false
    })

    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(formData)
        postBooking(formData).then((data) => {
            addBooking(data)
        })
        setFormData({
            name: "",
            email: ""
        })


    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <table>
                    <thead>
                        <tr>
                            <td>Name: </td>
                            <td>
                                <input
                                    onChange={onChange}
                                    type="name"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    required
                                />
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Email: </td>
                            <td>
                                <input
                                    onChange={onChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input type="submit" />
            </form>
        </>
    )
}

export default BookingForm;