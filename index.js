require('dotenv').config()
const express = require('express')
const cors = require('cors');
const user = require('./router/mainRoute')

const app = express();
app.use(cors())
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }))

app.use('/',user)

app.listen(process.env.Port,()=>{
    console.log(`>> server started at ${process.env.Port} !`)
})