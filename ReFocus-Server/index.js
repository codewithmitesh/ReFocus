const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
// Starting the server
const corsConfig = {
    origin: true,
    credentials: true,
};

const app = express();
//cors 
app.use(cors(corsConfig));
// app.use(cors());
app.options('*', cors(corsConfig));
// initializing the configuration of .env
dotenv.config({
    path: 'config.env'
})

// port 
const PORT = process.env.PORT || 8000

// parse request to body-parser
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json());
app.use(cookieParser());

// Connecting the Database
const connectDB = require('./database/connection');
// mongodb connection
connectDB();



// log requests -- console logs the request response time and type 
app.use(morgan('tiny'));

// load routers  
const Route = require('./routes/router');
app.use('/', Route);


// server on port 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
});