import express from 'express';
const app = express();
const port = 8090;
import connectToDb from './config/db.js';
import userRoutes from './routes/userRoutes.js'

connectToDb()

app.use(express.json())
app.get('/',(req,res)=>{
    res.send('welcome page')
})


app.use('/users',userRoutes)


app.listen(port, ()=>{
    console.log(`server is running on http://localhost:${port}`)
})