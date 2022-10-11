const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../backend/config/db');
const adminRoutes = require('./Routes/adminRoutes');
const hwRoutes = require('./Routes/hwRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const familyRoutes = require('./routes/familyRoutes');
const patientRoutes = require('./routes/patientRoutes');
const logRoutes = require('./routes/logRoutes');

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
connectDB();


app.use(express.json())

// const http = require('http')
// const {Server} = require('socket.io')
// const cors =  require("cors");

// app.use(cors());

// const server = http.createServer(app)

// const io = new Server(server,{
//     cors:{
//         origin:"http://localhost:3000",
//     },
// })

// io.on('connection',()=>{
//     console.log('user Connected');
// })

app.use('/api/admin',adminRoutes);
app.use('/api/hw',hwRoutes);
app.use('/api/doctor',doctorRoutes);
app.use('/api/family',familyRoutes);
app.use('/api/patient',patientRoutes);
app.use('/api/logs',logRoutes)

app.get('/api',(req,res)=>{
    res.send("ok");
})


app.listen(PORT,console.log("server at " + PORT))
