import { React, useState } from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function appDay4() {

  const [counterval, setcounterval] = useState('0');
  const [text, setText] = useState('0');
 
  const inc = () => {
    setText(Number(text) + Number(counterval))

  }
  const dec = () => {

    setText(Number(text) - Number(counterval))
  }
const changeCount = (e) => setcounterval(e.target.value);
    return (
      <>
      <div style={{ marginTop: '50px' }}>
        <Button variant="success" onClick={inc} style={{ marginLeft: '50px' }}>Increment</Button>
        <p style={{ marginLeft: '100px' }}>{text}</p>
        <Button variant="danger" onClick={dec} style={{ marginLeft: '50px' }}>Decrement</Button>{' '}
        </div>

        <div>
          <br/>
          <input type="number" value={counterval} onChange={changeCount} style={{ marginLeft: '50px' }}></input>
        </div>
      </>
    );
  }
// Exporting component
export default appDay4;