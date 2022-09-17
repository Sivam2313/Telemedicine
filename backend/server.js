const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('../backend/config/db');
const adminRoutes = require('./Routes/adminRoutes');
const hwRoutes = require('./Routes/hwRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const familyRoutes = require('./routes/familyRoutes');

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
connectDB();


app.use(express.json())

app.use('/api/admin',adminRoutes);
app.use('/api/hw',hwRoutes);
app.use('/api/doctor',doctorRoutes);
app.use('/api/family',familyRoutes);

app.get('/api',(req,res)=>{
    res.send("ok");
})


app.listen(PORT,console.log("server at " + PORT))