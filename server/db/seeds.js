use hotel_bookings;
db.dropDatabase();

db.bookings.insertMany([
    {
        name: "John Smith",
        email: "John.Smith@gmail.com",
        checkedIn: false
    },
    {
        name: "Jane Doe",
        email: "Jane.Doe@yahoomail.com",
        checkedIn: false
    },
    {
        name: "Tom Allan",
        email: "Tom.Allan@hotmail.com",
        checkedIn: false
    }
]);