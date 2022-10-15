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
// const PORT = 3000;
connectDB();
const cors = require('cors')
const http = require('http')
const {Server} = require('socket.io');


const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
    },
})

io.on('connection',(socket)=>{
    console.log(socket.id)

    socket.on('send-message',(msg,room)=>{
        socket.to(room).emit('recieve-message',msg)
    })
    socket.on('join-room',(room,userId)=>{
        // console.log(room);
        socket.join(room);
        socket.to(room).emit('user-connected',userId);
    })
})


app.use(cors())
app.use(express.json())

app.use('/api/admin',adminRoutes);
app.use('/api/hw',hwRoutes);
app.use('/api/doctor',doctorRoutes);
app.use('/api/family',familyRoutes);
app.use('/api/patient',patientRoutes);
app.use('/api/logs',logRoutes)

app.get('/api',(req,res)=>{
    res.send("ok");
})


server.listen(PORT,console.log("server at " + PORT))