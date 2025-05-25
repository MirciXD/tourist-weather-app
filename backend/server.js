const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://tourist-weather-app.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000']
}));
app.use(express.json());

const client = new MongoClient(process.env.MONGODB_CONNECTION_STRING);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

app.get('/api/objectives/:id', async (req, res) => {
  try {
    const objectiveId = parseInt(req.params.id);
    const db = client.db('tourism');
    const collection = db.collection('objectives');
    
    const objective = await collection.findOne({ objectiveId: objectiveId });
    
    if (!objective) {
      return res.status(404).json({ error: 'Tourist objective was not found' });
    }
    
    res.json(objective);
  } catch (error) {
    console.error('Error fetching tourist objective:', error);
    res.status(500).json({ error: 'Eroare server' });
  }
});

app.get('/api/objectives', async (req, res) => {
  try {
    const db = client.db('tourism');
    const collection = db.collection('objectives');
    
    const objectives = await collection.find({}).toArray();
    res.json(objectives);
  } catch (error) {
    console.error('Error fetching objectives:', error);
    res.status(500).json({ error: 'Eroare server' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  connectToMongoDB();
});
