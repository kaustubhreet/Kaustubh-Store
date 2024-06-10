const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()

app.use(cors({
    origin :  process.env.NODE_ENV === 'production' ? process.env.FRONTEND_URL: 'http://localhost:3000',
    credentials : true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api", router)
connectDB.Connection();

const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
