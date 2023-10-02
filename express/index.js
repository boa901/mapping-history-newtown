import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => console.log(`Listening on port ${port}`));
