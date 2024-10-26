import React, { useEffect, useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUsers(data.results));
  },[]);

  const addMember = (name) => {
    console.log("member added", name);
  }

  // const add = (x, y) => x + y;
  // const addWrapper = () => add(3, 5);
  // const total = addWrapper;
  // console.log(total);

  return (
    <div>
      <h1>Team Builder</h1>
      {
        users.map(user => <User user={user} addMember={addMember}></User>)
      }
    </div>
  );
}

export default App;
