import './App.css';
import { useState }  from 'react';

const App = () =>
{
  const [ msg, setMessage ] = useState('');
  const [ input, setInput ] = useState({text: ''});

  const options = 
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)

  };



  const getBackend = async() =>
  {
    await fetch('/get')
    .then(res => res.text())
    .then(result => setMessage(result));
  };

  const postBackend = async(e) =>
  {
 
    e.preventDefault();

    await fetch('/post', options)
    .then(res => res.text())
    .then(result => setMessage(result));

  };


  return (
    <div className="App">

      <h1>Hello World</h1>

      <button onClick={getBackend}>GET to backend</button>

      <form onSubmit={postBackend} style={{padding: '3rem'}}>
      
        <input type='text' onChange={(e) => setInput({text: e.target.value})}></input>
        <br></br>
        <button type='submit' style={{margin: '1rem'}}>POST to backend</button>
        </form>

      <p>{msg}</p>
    </div>
  );
};

export default App;
