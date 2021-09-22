import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';

// Routes
import routes from './routes';

//  Environment variables
//  dotenv.config({
//    allowEmptyValues: true
// });

// Database
// import './database';

// App
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/uploads', express.static('uploads'));

// Routes
app.use(routes);

// Port
const port = process.env.PORT || 7000;

// Listen
if (require.main == module) {
  app.listen(port, () => {
    console.log(`Server running on === localhost:${port} ===`);
  });
}

export default app;
