import express from 'express';
import bodyParser from 'body-parser';
import { sendData } from './sendData.js';
import 'dotenv/config';
import cors from 'cors';



const app = express();
app.use(bodyParser.json());
app.use(express.json());
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5000'
}));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});
app.use("/data", sendData)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

export default app;
