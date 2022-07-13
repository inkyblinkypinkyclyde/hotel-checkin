const baseURL = 'http://localhost:9000/api/bookings/'

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}

export const postBooking = (payload) => {
    return fetch(baseURL, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const deleteBooking = (id) => {
    console.log(id)
    return fetch(baseURL + id, {
        method: 'DELETE'
    })
}

export const updateCheckIn = (booking) => {
    // console.log(booking)
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify({ checkedIn: true }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}

export const updateCheckOut = (booking) => {
    return fetch(baseURL + booking._id, {
        method: 'PUT',
        body: JSON.stringify({ checkedIn: false }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then(res => res.json())
}