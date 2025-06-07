import express from "express"
import { db } from "./config/db.js"
import { router } from "./routes/weather-routes.js"

import 'dotenv/config'
const myDb = db

const app = express()
app.use(express.json())

app.use('/weather', router)
const port = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log(`SErver running on port ${port}`);
    
})