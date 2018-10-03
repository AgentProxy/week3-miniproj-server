const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '../public');
const resourcesPath = path.join(__dirname, '../resources');
const resultsPath = path.join(__dirname, '../result');
const http = require('http');
const server = http.createServer(app);
const port = 3000;

app.use(express.static(publicPath));
app.use('/resources', express.static(resourcesPath));
app.use('/results', express.static(resultsPath));


server.listen(port,()=>{
    console.log(`Server has been started on port ${port}`);
})





