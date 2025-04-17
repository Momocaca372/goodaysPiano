import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());

app.get('/api/hello', async (req, res) => {
  try {
    const response = await fetch('http://localhost:8080/api/hello');
    const data = await response.text(); 
    res.send(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('錯誤：無法取得資料');
  }
});

app.get('/api/whatsup', async (req, res) => {
  try {
    const response = await fetch('http://localhost:8080/api/whatsup');
    const data = await response.text(); 
    res.send(data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('錯誤：無法取得資料');
  }
});

app.listen(PORT, () => {
  console.log(`✅ Node.js backend running on http://localhost:${PORT}`);
});
