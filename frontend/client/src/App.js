import React, { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [message, setMessage] = useState('');

  const callApi = async (endpoint) => {
    try {
      const response = await fetch(`http://localhost:3001/api/${endpoint}`);
      const data = await response.text(); // 若是 JSON 改用 .json()
      setMessage(data);
    } catch (error) {
      setMessage('錯誤：無法取得資料');
      console.error('API 錯誤:', error);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>React 與 Node API 測試</h2>

      <textarea
        rows="4"
        cols="50"
        readOnly
        value={message}
        style={{ display: 'block', marginBottom: '1rem' }}
      />

      <Button variant="contained" onClick={() => callApi('hello')} style={{ marginRight: '1rem' }}>
        取得 Hello
      </Button>

      <Button variant="contained" onClick={() => callApi('whatsup')}>
        取得 WhatsUp
      </Button>
    </div>
  );
}

export default App;
