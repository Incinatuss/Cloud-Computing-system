import express from 'express';
import { router } from './index.mjs';

const app = express();
const port = 3000;

app.use('/', router);

app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});