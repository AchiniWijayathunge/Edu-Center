require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose')
const teachersRoutes = require('./routes/teachers');
const timetablesRoutes = require('./routes/timetables');
const classesRoutes = require('./routes/classes');
const url = "mongodb://127.0.0.1/EDUCENTER"
//express app
const app = express();

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path,req.method);
  next();
})
//routes
app.use('/api/teachers', teachersRoutes);
app.use('/api/timetables', timetablesRoutes);
app.use('/api/teachers/:id/classes', classesRoutes);

//connect to db
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected to the database...");
});

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("listning on port", process.env.PORT);
});
