import react from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Bilas() {
  
  const [num, setNum] = useState(3);
  let num2 = 2

  return (
    <div>
      
      <h1>Bilas</h1>
      <input type="number" onChange={e => setNum(e.target.value)}></input>
      <h2>{num}</h2>
      <h2>{num2}</h2>
    </div>
  );
}

export default Bilas;