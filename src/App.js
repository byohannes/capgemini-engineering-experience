import './App.css';
import { useState } from 'react';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  const onChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <>
      <p>welcome To DCX!</p>
      <h1>Engineering Experience 123456!</h1>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onChange} />
        {isChecked ? 'Oksana' : 'Ali'}
      </label>
    </>
  );
}

export default App;
