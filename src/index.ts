import express from 'express';
import cors from 'cors';
import routes from './routes';
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT||"3333"


const app = express();
app.use(cors());
app.use(express.json());

app.use(routes); 


app.listen(port,()=>{
    console.log(`The aplication is runnig at http://localhost:${port}/`)
});