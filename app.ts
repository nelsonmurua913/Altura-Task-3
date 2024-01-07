import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import rateLimit from 'express-rate-limit';
import userRouter from './route/user';
import logger from './libs/logger';
import config from './libs/config';

const app = express();
const port = 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit requests for each IP
  message: 'Too many requests from this IP, please try again later.',
});

app.use(limiter);
app.use(bodyParser.json());

// mongodb connection
mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}).then(() => {
  logger.info("Connected to mongoDB");
  createServer();
}).catch(error => {
  logger.error("MongoDB connection error!");
});

function createServer() {
  // error handling
  app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    res.status(500).send('Internal server error');
  });
  
  // define user router
  userRouter(app);
  
  // start server listening
  app.listen(config.server.port, () => {
    console.log(`Server listening at ${port}`);
  });
}