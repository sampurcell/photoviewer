import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(process.env.APP_PORT, () =>
  console.log(`Photo viewer is listening on port ${process.env.APP_PORT}!`),
);
