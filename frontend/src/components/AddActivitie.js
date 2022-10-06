import react from "react";
import { useState } from "react";
import { useEffect } from "react";
import api from '../services/api';


function AddActivitie(props) {
  const url = 'http://localhost:8000/api/activities/';


  const handleGet = () => {
    api.get('activities/')
    .then(res => {
      props.setActivities(res.data);
    })
  }

  const handlePost = () => {
    api.post('activities/', {
      title: props.title,
      description: props.description,
      completed: false
    })
    .then(res => {
      console.log(res.data);
      handleGet();
    })
}
  return (
    <>
    <form style={{ padding: '1rem', height:'auto', width:'15rem'}}>
      <input placeholder="input the name of the activity"
        style={{ width: '100%', height: '1rem', padding: '0.2rem', border: '1px solid black', borderRadius: '0.2rem' }}
        value={props.title} onChange={e => props.setTitle(e.target.value)} />
      <br />
      <input
        placeholder="input the description of the activity"
        style={{ width: '100%', height: '1rem', padding: '0.2rem', border: '1px solid black', borderRadius: '0.2rem' }}
        value={props.description} onChange={e => props.setDescription(e.target.value)}/> <br />
    </form>
    <button onClick={handlePost}
      style={{ background: 'lightgreen', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', fontWeight: 'bold', marginLeft:'1rem' }}
    >
      Save
    </button>
    <button onClick={() => props.setAdd(false)}
      style={{marginLeft:'1rem', background: 'coral', border: 'none', borderRadius: '0.5rem', padding: '0.5rem', fontWeight: 'bold' }}
    >
      Cancel
    </button>
    </>
  );
}
export default AddActivitie;