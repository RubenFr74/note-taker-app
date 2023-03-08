// Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Starts express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setup data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));