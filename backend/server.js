const express = require('express');
const mongoose = require('mongoose');
const clientRoutes = require('./routes/client.routes');
const orderRoutes = require('./routes/order.routes');
const cors = require('cors');


require('dotenv').config();
// Create express app
const app = express()

app.use(express.json());
app.use(cors()) // allow cross-origin requests

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});
// Set up routes
app.use('/client', clientRoutes);
app.use('/order', orderRoutes);

// Set up the server

// connect to the database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to the database')
        // Start the server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log('Error connecting to the database', err)
    })
