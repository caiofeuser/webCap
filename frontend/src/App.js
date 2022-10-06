import React from 'react';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Todo from './pages/Todo';
import Imc from './pages/Imc';
import Bilas from './pages/Bilas';


function App() {



  const pi = [
    {
      path: "/todo",
      component: Todo,
      description: "To-do List",
    },
    {
      path: "/imc",
      component: Imc,
      description: "IMC Calculator",
    },
    {
      path: "/",
      description: "Home",
    },
    {
      path: "/bilas",
      description: "Bilas",
    }
  ]

  return (
    <div>
      <div style={{ background: 'lightgrey', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', justifyContent: 'center' }}>
        <h1>Welcome to my aplication</h1>
      </div>
      <Router>
          {pi.map((item,index) => (
            <ul key={index} style={{ display:'inline' }}>
            <li key={index} style={{textDecoration:'none', display:'inline', paddingLeft:'1rem',paddingRight:'1rem', borderRight:' solid 1px grey', borderLeft:' solid 1px grey' }}>
              <Link to={item.path} style={{ textDecoration: 'none', color: 'black' }}>{item.description}</Link>
            </li>
            </ul>
          ))}
          <Routes>
            <Route path="/todo" element={<Todo />} />
            <Route path="/imc" element={<Imc />} />
            <Route path="/Bilas" element={<Bilas />} />
          </Routes>
        </Router>
      <div>
      </div>
      <hr />
    </div>

  );
}

export default App;
