const cors = require('cors')

require('dotenv').config()


const express = require('express')
const mongoose = require('mongoose')
const clubRouter = require('./routes/clubRoutes')
const eventRouter = require('./routes/eventRoutes')




// express
const app = express();



app.use(cors());


// middleware
app.use(express.json());

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
});


// routes
app.use('/club', require('./routes/clubRoutes'))
app.use('/event', require('./routes/eventRoutes'))


const allowedOrigins = ['http://localhost:3000'];


app.use(
  cors({
    origin: allowedOrigins,
  })
);


//connect to mongodb
mongoose.connect(process.env.MONGO_URL)
    .then((result) => {
        console.log("Connected to db")
        //listen
        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log(err)
    })



