import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config({ path: '.env.test' });

export default function setup() {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.listen(8080);
}
