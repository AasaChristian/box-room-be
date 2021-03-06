const express = require('express')
const app = express()
const server = require('http').createServer(app);

const Users = require('./Routers/user-router')
const Trailers = require('./Routers/trailer-router')
const Materials = require('./Routers/material-router')
const Loads = require('./Routers/load-router')


const Port = process.env.PORT || 5000;

const cors = require('cors')


server.listen(Port, () => {
  console.log(`Listening at ${Port}`);
});

var corsOptions = {
    origin: process.env.BASE_URL || "http://localhost:3000",
    // origin: "http://localhost:3000",
    methods: "GET,PUT,POST,DELETE",
       credentials: false
}
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send({ response: "I am alive Test" }).status(200);
});

app.use('/api/users', Users);
app.use('/api/trailers', Trailers);
app.use('/api/materials', Materials); 
app.use('/api/loads', Loads); 

