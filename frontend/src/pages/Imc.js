import api from '../services/api';
import react from 'react';
import { useEffect, useState } from 'react';
import ImcCard from '../components/ImcCard';
import axios from 'axios';

function Imc() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [result, setResult] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handlePut = () => {
    let postData =
    {
      "height": height,
      "weight": weight,
    }
    axios.post('http://localhost:8000/api/calculation', postData)
      .then(response => {
        setResult(response.data)
        console.log(response.data);
      });
  }

  return (
    <div>
      <div style={{ margin: '1rem' }}>
        <h1>IMC calculator</h1>
        <h4>Input the measures:</h4>
        <label style={{ marginRight: '1.5rem' }}>Heigth:
          <input style={{ marginLeft: '0.5rem' }}
            onChange={e => { setHeight(e.target.value) }}
          />
        </label>
        <label style={{ marginRight: '1.5rem' }}>Weight:
          <input style={{ marginLeft: '0.5rem' }}
            onChange={e => { setWeight(e.target.value) }}
          />
        </label>
        <button onClick={e => { handlePut(); setIsOpen(true) }}>
          Save
        </button>
      </div>
      {isOpen ?
      <div>
        <hr></hr>
        <div style={{ margin: '3rem 24rem 1rem 24rem', }}>
          <ImcCard result={result} />
        </div>
      </div>
        : null}
        <div style={{margin:'1rem'}}>
          <p>LABEL:</p>
          <ul>
            <li style={{marginBottom:'0.8rem'}}>Underweight: <span style={{background:'lightcoral', padding:'0.1rem',}}>lightcoral</span></li>
            <li style={{marginBottom:'0.8rem'}}>NormalWeight: <span style={{background:'lightgreen', padding:'0.1rem', }}>lightgreen</span></li>
            <li style={{marginBottom:'0.8rem'}}> Overweight: <span style={{background:'yellow', padding:'0.1rem'}}>yellow</span></li >
            <li style={{marginBottom:'0.8rem'}}>Obesity: <span style={{background:'orange', padding:'0.1rem'}}>orange</span></li >
            <li style={{marginBottom:'0.8rem'}}>SevereObesity: <span style={{background:'lightcoral', padding:'0.1rem'}}>lightcoral</span></li>
          </ul>
        </div>
    </div>
  );
}

export default Imc;