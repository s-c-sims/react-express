import './App.css';
import { useState }  from 'react';

const App = () =>
{
  const [ msg, setMessage ] = useState('');

  const getBackend = async() =>
  {
    await fetch('/get')
    .then(res => res.text())
    .then(result => setMessage(result));
  };

  return (
    <div className="App">

      <h1>Hello World</h1>

      <button onClick={getBackend}>GET to backend</button>

      <p>{msg}</p>
    </div>
  );
};

export default App;
