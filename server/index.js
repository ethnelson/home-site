// Filename: /server/index.js
// Description: This is the index of the server. The base home site
// NOTICE: base file is not original, will be changing in the future. This is simply a template


const path = require("path");
const express = require("express");
const https = require("https");
const fs = require("fs");

const PORT = process.env.PORT || 3001;
const SERVER_ENV = process.env.SERVER_ENV || 'development';
const CERT_PATH = path.resolve(__dirname, process.env.CERT_PATH) || path.resolve(__dirname, '../localhost.pem');
const KEY_PATH = path.resolve(__dirname, process.env.KEY_PATH) || path.resolve(__dirname, '../localhost-key.pem');
const app = express();
const sslOptions = {
    cert: fs.readFileSync(CERT_PATH),
    key: fs.readFileSync(KEY_PATH)
};



// Have Node serve the files for the built React app
app.use(express.static(path.resolve(__dirname, "../build")));


// Handle GET requests to '/api' route
app.get("/api", (req, res) => {
    res.json({message: "Hello from server!"}); 
});

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, "../build", "index.html"))
});


let serverHttps = https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});

/* app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
}); */


 