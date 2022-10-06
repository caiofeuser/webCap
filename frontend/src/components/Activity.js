import React from 'react';
import { useState, useEffect } from 'react';
import api from '../services/api';


function Activity(props) {
  const [isEditTitle, setIsEditTitle] = useState(false);
  const [editTitle, setEditTitle] = useState(props.title);
  const [editDescription, setEditDescription] = useState(props.description);


  const handleGet = () => {
    api.get('activities/')
      .then(res => {
        props.setActivities(res.data);
      })
  };


  const handlePut = () => {
    api.put(`activities/${props.id}/`,
      {
        title: editTitle,
        description: props.description,
        created_at: props.created_at,
        updated_at: props.updated_at,
        completed: !props.completed,
      },
    ).then(res => {
      console.log(res.data);
      handleGet();
    })

  }

  const handleDelete = (z) => {
    api.delete(`activities/${z}/`)
      .then(res => {
        console.log(res.data);
        handleGet();
      })
  }


  useEffect(() => {
  }, []);

  return (
    <>
      <div style={{ background: 'lightblue', width: '20rem', padding: '0.5rem 2rem 0rem 2rem', height: 'auto', borderRadius: '5px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {isEditTitle ?
            <>
              <input value={editTitle} onChange={e => { setEditTitle(e.target.value); console.log(editTitle) }}
                style={{ border: 'solid 1px black', fontSize: '1rem', fontWeight: 'bold', marginTop: '1rem', marginBottom: '1rem' }}
              ></input>
              <button onClick={() => { setIsEditTitle(false); handlePut(props.id) }}
                style={{ background: 'ligthgreen', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', fontWeight: 'bold', height: '1.8rem', marginTop: '1rem' }}
              >
                Save
              </button>
            </> :
            <>
              <h3
                style={{ textDecoration: props.completed ? 'line-through' : 'none' }}>
                {props.title}
              </h3>
              <button style={{ margin: '20px 0 20px 0', border: 'none', borderRadius: '10px', padding: '5px' }}
                onClick={() => { setIsEditTitle(true); }}
              >
                Edit name
              </button>
            </>
          }
        </div>
        <div>
          <span>Feito</span>
          <input type='checkbox' checked={props.completed}
            onChange={handlePut}
          />
        </div>
        <p style={{ background: 'lightgrey', padding: '10px', borderRadius: '5px' }}>
          {props.description}
        </p>
        <p style={{alignContent:'end'}}>
          às {props.created_at.slice(11,16)} em {props.created_at.slice(8,10)}/{props.created_at.slice(5,7)}/{props.created_at.slice(0,4)}<br />
        </p>
        <button
          style={{ margin: '0.5rem 0 1rem 0', borderStyle: 'none', padding: '5px', background: 'lightcoral', borderRadius: '50%' }}
          onClick={() => {
            handleDelete(props.id);
          }}
        >
          X
        </button>
      </div>
    </>
  );
};

export default Activity;
