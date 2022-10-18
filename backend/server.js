const express = require('express')
const authRoute=require('./routes/authRoute');
const cors=require('cors');
require('dotenv').config()
const app = express();
const mongoose = require('mongoose')
const MongoURL = process.env.MONGOB_URL;

app.use(express.json())
app.use(cors());
app.use('/storage',express.static('storage'))
mongoose.connect(MongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('DB connected');
})
app.use('/',authRoute)
app.listen(process.env.PORT,()=>{
    console.log("Server running at port ",process.env.PORT)
})