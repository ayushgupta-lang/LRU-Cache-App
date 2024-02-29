import React, { useState } from 'react';
import CacheService from './cacheService';
import './App.css'; 

function App() {
  const [key, setKey] = useState('');
  const [value, setValue] = useState('');
  const [getResult, setGetResult] = useState('');
  const [setValueResult, setSetValueResult] = useState('');

  const handleSetClick = async () => {
    try {
      await CacheService.setKeyValue(key, value);
      setSetValueResult('Key-Value set successfully');
      setGetResult('');
      setKey('');
      setValue('');

    } catch (error) {
      setSetValueResult('Failed to set Key-Value');
    }
  };

  const handleGetClick = async () => {
    try {
      const response = await CacheService.getKeyValue(key);
      setGetResult(response.data.message || response.data.error);
      setSetValueResult('');
      setKey('');
      setValue('');

    } catch (error) {
      setGetResult('Failed to get value');
    }
  };

  return (
    <div className="app-container">
      <h1>LRU Cache React App</h1>
      <div className="form-container">
        <label>
          Key:
          <input id="key" type="text" value={key} onChange={(e) => setKey(e.target.value)} />
        </label>
        <br />
        <label>
          Value:
          <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        </label>
        <br />
        <button onClick={handleSetClick} className="button">Set Value</button>
        <button onClick={handleGetClick} className="button">Get Value</button>
        {setValueResult && <p className="result">Set Value Result: {setValueResult}</p>}
        {getResult && <p className="result">Get Value Result: {getResult}</p>}
      </div>
    </div>
  );
}
export default App;

