import React from 'react';
import './App.css';

function App() {
 const users = [
  
    {id:1, age:18, name: "강해린"},
    {id:2, age:20, name: "김민지"},
    {id:3, age:20, name: "한니"},
    {id:4, age:19, name: "다니엘"},
    {id:5, age:16, name: "혜인"},
    ];
 
  return <div className ='app-style'>
    <div className='component-style'>{users[0].age}-{users[0].name}</div>
    <div className='component-style'></div>
    <div className='component-style'></div>
    <div className='component-style'></div>

  </div>;
   
  
}

export default App;
