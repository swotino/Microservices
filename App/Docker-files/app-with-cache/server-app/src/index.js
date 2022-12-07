const express = require('express'); // Import express   
const database = require('./database'); // Import database
const cors = require('cors');
const { setCachedData, getCachedData } = require('./cache');

const app = express(); // Create express app instance.
const port = 9090; // Define port

app.use(cors()); // Enable CORS

// Create a GET route
app.get('/', (req, res) => {
    res.send('Server is up and running');
});

app.get('/sensors', async (req, res) => {

  const cached = await getCachedData('sensors');
  if (cached) {
    res.send(cached);
  } else {
    database.findSensors((data) => { 
      res.send(data || 'No data found'); 
      if(data) setCachedData('sensors', data);
    });
  }
});

app.get('/insert', (req, res) => {
  const { value, sensorId } = req.query;
  database.insert({ value, sensorId });
  res.send('Inserted');
});

app.get('/data', async (req, res) => {
  const { sensorId } = req.query;

  const cached = await getCachedData("sensor-" + sensorId);
  if(cached) {
    res.send(cached);
  } else {
    database.findSensorData(sensorId, (data) => { 
      res.send(data || 'No data found'); 
      if(data) setCachedData("sensor-" + sensorId, data);
    });
  }
});

app.get('/alldata', async (req, res) => {
  
  const cached = await getCachedData('alldata');
  if(cached) {
    res.send(cached);
  } else {
    database.findData((data) => { 
      res.send(data || 'No data found'); 
      if(data) setCachedData('alldata', data);
    });
  }
});

// Start express server on defined port
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});