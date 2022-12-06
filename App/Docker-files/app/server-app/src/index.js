const express = require('express'); // Import express   
const database = require('./database'); // Import database
const cors = require('cors');

const app = express(); // Create express app instance.
const port = 9090; // Define port

app.use(cors()); // Enable CORS

// Create a GET route
app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.get('/sensors', (req, res) => {
  database.findSensors((data) => { 
    res.send(data || 'No data found'); 
  });
});

app.get('/insert', (req, res) => {
  const { value, sensorId } = req.query;
  database.insert({ value, sensorId });
  res.send('Inserted');
});

app.get('/data', (req, res) => {
  const { sensorId } = req.query;
  database.findSensorData(sensorId, (data) => { 
    res.send(data || 'No data found'); 
  });
});

app.get('/alldata', (req, res) => {
  
  database.findData((data) => { 
    res.send(data || 'No data found'); 
  });
});

// Start express server on defined port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});