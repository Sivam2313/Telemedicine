const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path:'../.env'});
const connectDB = require('../backend/config/db');
const adminRoutes = require('./Routes/adminRoutes');
const hwRoutes = require('./Routes/hwRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const familyRoutes = require('./routes/familyRoutes');
const patientRoutes = require('./routes/PatientRoutes');
const logRoutes = require('./routes/logRoutes');
const prescriptionRoutes = require('./routes/prescriptionRoutes')
const medicineRoutes=require('./routes/medicineRoutes')
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

connectDB();
const cors = require('cors')
const http = require('http')
const {Server} = require('socket.io');


const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        // origin:"http://localhost:3000",
    },
})

io.on('connection',(socket)=>{
    console.log('Socket ID is'+socket.id)

    socket.on('send-message',(msg,room)=>{
        if(socket.rooms.has(room)){
            socket.to(room).emit('recieve-message',msg)
        }
    })
    socket.on('join-room',(room,userId)=>{
        // console.log(room);
        socket.join(room);
        socket.to(room).emit('user-connected',userId);
    })
    socket.on('leave-room',(room,userId) => {
        socket.leave(room);
        console.log('leaving room with id' + socket.id)
        socket.to(room).emit('user-disconnected',userId)
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
app.use('/api/prescription',prescriptionRoutes)
app.use('/api/med',medicineRoutes)


// app.get('/api',(req,res)=>{
//     res.send("ok");
// })

const __dirname1 = path.resolve();

if(process.env.Node_Env=='production'){
    app.use(express.static(path.join(__dirname1,'./frontend/build')));
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname1,"./frontend/build/index.html"))
    })
}
else{
    
    app.get('/',(req,res)=>{
        res.send('ok');
    })
}


server.listen(PORT,console.log("server at " + PORT))