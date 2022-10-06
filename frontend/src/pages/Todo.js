import '../App.css'
import React from 'react';
import Activity from '../components/Activity';
import AddActivitie from '../components/AddActivitie';
import { useState, useEffect, useRef } from 'react';
import api from '../services/api';



function Todo() {
  const [data, setData] = useState([]);
  const [add, setAdd] = useState(false);
  const [activities, setActivities] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [created_at, setCreated_at] = useState("");
  const [completed, setCompleted] = useState(false)
  const [selectedOption, setSelectedOption] = useState('all');
  const [search, setSearch] = useState('');
  const isSet = true;
  const url = 'http://localhost:8000/api/activities/';


  const scrollToBottom = () => {
  }

  const handleGet = () => {
    api.get('activities/')
      .then(res => {
        setData(res.data);
        setActivities(res.data);
      })
  };

  useEffect(() => {
    handleGet();
  },[]);

  return (
    <div>
      <h1 style={{marginLeft:'1rem'}}>To-do List</h1>
      <span style={{marginLeft:'1rem'}}>Search:</span>
      <input style={{ marginBottom: '1rem', marginLeft: '1rem' }}
        onChange={e => { setSearch(e.target.value); }} />
      <select style={{ marginBottom: '1rem', marginLeft: '1rem' }}
        onChange={e => {
          console.log(selectedOption)
          setSelectedOption(e.target.value);
        }}
          >
        <option value="all">All</option>
        <option value="true">Completed</option>
        <option value="false">Not Completed</option>
      </select>
      <hr></hr>
      <div style={{ display: 'grid', gridColumnGap: '1rem', gridRowGap: '3rem', gridTemplateColumns: 'repeat(3,1fr)', margin: '3rem' }}>
        {activities
          .filter((activity) => (activity.title.toLowerCase().includes(search.toLowerCase()) ||
            activity.description.toLowerCase().includes(search.toLowerCase()))
            && (
              selectedOption == 'all' ||
              (selectedOption == 'true' && activity.completed) ||
              (selectedOption == 'false' && !activity.completed)
            )
          )
          .map((item) => (
            <Activity
              activities={activities}  setActivities={setActivities}
              key={item.id}
              id={item.id}
              title={item.title} setTitle={setTitle}
              description={item.description} setDescription={setDescription}
              completed={item.completed} setCompleted={setCompleted}
              created_at={item.created_at} setCreated_at={setCreated_at}
              url={url}
            />
          ))}
      </div >
      <button onClick={() => setAdd(true)} 
        style={{marginBottom:'1rem', marginLeft:'1rem', background:'lightgreen', border:'none', borderRadius:'0.5rem', padding:'0.5rem', fontWeight:'bold'}}
      >
        Adicionar atividade +
      </button>
      {add ?
        <AddActivitie
          activities={activities} setActivities={setActivities}
          title={title} setTitle={setTitle}
          description={description} setDescription={setDescription}
          completed={completed} setCompleted={setCompleted}
          completed_at={created_at} setCreated_at={setCreated_at}
          add={add} setAdd={setAdd}
        /> :
        null}
    </div>
  );
}

export default Todo;