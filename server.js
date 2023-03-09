// Dependencies
const express = require("express");
const fs = require("fs");
const path = require('path');

// Starts express app
const app = express();
const PORT = process.env.PORT || 3000;

// Setups data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Route files
require('/routes')(app);

// Setup listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});  