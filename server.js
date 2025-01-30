require ('dotenv').config();
const {connect} = require('./src/db/index');
const express = require('express');
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {errorHandler} = require('./src/middlewares/errorHandler');

connect();
const PORT = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(cookieParser());

// CORS setup
app.use(cors({
     origin: true,
     credential: true, 
}))

// Routes
app.get('/', (req, res)=>{
     res.send('Hello World');
})




app.use('*',(req, res, next)=>{
     const error = new Error("Route not found!");
     error.status = 404;
     next(error);
})
// Global error handler
app.use(errorHandler);


app.listen(PORT, () => {
     console.log(`server running on port ${PORT}`);
});