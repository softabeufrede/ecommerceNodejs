const express = require('express')
const mongoose = require('mongoose');
require("dotenv").config();
// inmport route
const userRoutes = require('./routes/user')
//app
const app = express();

//db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true
})
.then(()=> console.log("BD Connected on Local"));

// routes middleware
app.use("/api", userRoutes);


const port = process.env.PORT || 8000

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});