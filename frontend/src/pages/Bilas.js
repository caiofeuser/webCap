import react, { useEffect } from 'react';
import { useState }  from 'react';
import axios from 'axios';

function Bilas() {
  const [data, setData] = useState([]);
  const [unique, setUnique] = useState([]);
  const [search, setSearch] = useState('');
  const [checkbox, setCheckbox] = useState([]);

  useEffect (() => {
    axios.get('https://api.npoint.io/c3b35ea1814c86979474').then(
      (r) => {
        setData(r.data);
        setUnique([...new Set(r.data.map((item) => item.Curso))]);
      }
    )
    
  },[]);

  const handleCheckbox = (e) => {
    if(e.target.checked){
      setCheckbox([...checkbox, e.target.value])
      console.log([...checkbox, e.target.value]);
    } else {
      setCheckbox(checkbox.filter((item) => item !== e.target.value));
    }
  }
  

  const handleAll = (t) => {
    if(t.target.checked){
      setCheckbox(unique);
    } else {
      setCheckbox([]);
    }
  }

  return (
    <div>
      <input type='text'  onChange={(e) => setSearch(e.target.value)}></input>
      {unique.map((curso) => (
        <div key={curso}>
          <input value={curso} onChange={(e) => handleCheckbox(e)} type="checkbox"
          checked={checkbox.includes(curso)}
          />{curso}
          <br />
        </div>
      ))}
      <input type='checkbox' onChange={(t) => handleAll(t)}/> Todos
      {data.filter(
        (o) => (o.Nome.toLowerCase().includes(search.toLowerCase()) ||
        o.Sigla.toLowerCase().includes(search.toLowerCase()) ||
        o.Cargo.toLowerCase().includes(search.toLowerCase())) &&
        checkbox.includes(o.Curso)
      )
        .map((card,index) => (
        <div key={index}style={{marginTop:'1rem' , background:'#FF720A', width:'auto', height:'auto'}}>
          <h1>{card.Sigla}</h1>
          <p>{card.Nome}</p>
          <p>{card.Cargo}</p>
          <p>{card.Curso}</p>
        </div>
      ))}
    </div>
  );
  }

export default Bilas;