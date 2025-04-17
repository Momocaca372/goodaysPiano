import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material'; // 引入 Box 用於樣式佈局

function App() {
  const [message, setMessage] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [storedValue, setStoredValue] = useState('');

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSet = () => {
    setStoredValue(inputValue);
    setMessage(`已設定值：${inputValue}`);
  };

  const handleGet = () => {
    setMessage(`取得已儲存的值：${storedValue}`);
  };

  const handleClear = () => {
    setStoredValue('');
    setInputValue('');
    setMessage('已清除儲存的值和輸入框');
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

      <Box sx={{ mt: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="輸入文字"
          value={inputValue}
          onChange={handleInputChange}
          variant="outlined"
          fullWidth
        />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button variant="contained" onClick={handleSet}>
            Set
          </Button>
          <Button variant="outlined" onClick={handleGet}>
            Get
          </Button>
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default App;