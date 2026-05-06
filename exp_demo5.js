var express = require('express');
var app = express();

app.get('/bookings/:bookingid', (req, res) => {
    res.send('Booking ID: ' + req.params.bookingid);
});

app.listen(3000);
