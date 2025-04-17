import express from 'express';
import cors from 'cors';
import axios from 'axios';
const backendApiUrl = 'http://localhost:8080/api';

const app = express();
const PORT = 3001;

//設定msg reg rule
const msgRule= /^[a-zA-Z0-9].{7,}$/;

app.use(cors());
app.use(express.json());

app.get('/api/hello', async (req, res) => {
  try {
    const response = await axios(`${backendApiUrl}/hello`, { params: req.query });
	res.send(response.data);
  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('錯誤：無法取得資料');
  }
});

app.get('/api/whatsup', async (req, res) => {
  try {
    const response = await axios(`${backendApiUrl}/whatsup`, { params: req.query });
	res.send(response.data);

  } catch (error) {
    console.error('Fetch error:', error);
    res.status(500).send('錯誤：無法取得資料');
  }
});

// API: setmsg
app.post('/api/setmsg', async (req, res) => {
    const { message } = req.body;

    if (!message || !msgRule.test(message)) {
        return res.status(400).json({ error: 'Invalid message format. Must start with alphanumeric and be at least 8 characters.' });
    }

    try {
        const backendResponse = await axios.post(`${backendApiUrl}/setmsg`, { message: { message } });
        res.json(backendResponse.data);
    } catch (error) {
        console.error('Error forwarding to backend:', error);
        res.status(500).json({ error: 'Error communicating with backend.' });
    }
});

// API: getmsg
app.get('/api/getmsg', async (req, res) => {
    // 您可能也需要對 getmsg 的輸入進行驗證 (例如查詢參數)

    try {
        const backendResponse = await axios.get(`${backendApiUrl}/getmsg`, { params: req.query });
        res.json(backendResponse.data);
    } catch (error) {
        console.error('Error forwarding to backend:', error);
        res.status(500).json({ error: 'Error communicating with backend.' });
    }
});


app.listen(PORT, () => {
  console.log(`✅ Node.js backend running on http://localhost:${PORT}`);
});
