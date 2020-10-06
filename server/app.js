require('dotenv').config();
const mongoConnection = require('./mongoConnection');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json()); // Make sure it comes back as json

app.use(express.urlencoded({ extended: false }));

app.use(cors());

mongoConnection();
