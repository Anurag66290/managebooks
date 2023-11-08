import createError from 'http-errors';
import express from 'express';
// import fs from 'fs';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import fileUpload from 'express-fileupload';;
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();


app.use(fileUpload({ useTempFiles: true, tempFileDir: '/tmp/' }));


// Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/managecourse';
mongoose.connect(mongoDB, { useNewUrlParser: true });
console.log('db connected');

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const PORT = 4000;
app.listen(PORT,()=>{
  console.log("listening on port " + PORT);

})

export default app;
