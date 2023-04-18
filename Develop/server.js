// import required packages and files
const express = require ('express');
const apiRoutes = require ('./routes/api_routes.js');
const htmlRoutes = require ('./routes/html_routes.js');

// Initialize app and create port
const app = express();
const PORT = process.env.PORT || 3001;

// Use methods for parsing and middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static ('public'));
// app.use('/api', apiRoutes);
// app.use('/api', htmlRoutes);



// listener to start the server and log message saying server is listening on port 3001
app.listen(PORT, () => 
    console.log('Server listening on Port %s', PORT));