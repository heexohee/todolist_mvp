import React, { useState } from 'react';
import './App.css';

const App = () => {
// function App() {
//  const users = [
  
//     {id:1, age:18, name: "강해린"},
//     {id:2, age:20, name: "김민지"},
//     {id:3, age:20, name: "한니"},
//     {id:4, age:19, name: "다니엘"},
//     {id:5, age:16, name: "혜인"},
//     ];
 const [users, setUsers] = useState([
  
      {id:1, age:18, name: "강해린"},
      {id:2, age:20, name: "김민지"},
      {id:3, age:20, name: "한니"},
      {id:4, age:19, name: "다니엘"},
      {id:5, age:16, name: "혜인"},
      ]);
  
const [name, setName] = useState('');
const [age, setAge] = useState('');

const nameChangeHandler = (event) =>{
  setName(event.target.value);
}

const ageChangeHandler = (event) => {
  setAge(event.target.value);
};
 const clickAddButtonHandler = () => {
alert('hi');
 };

  return (
    <div>
      <div> 
        이름 : &nbsp;
        <input 
        value = {name}
        onChange={(event)=>nameChangeHandler(event)}
        /> 
        <br />
        나이 : &nbsp;
        <input 
        value = {age}
        onChange={ageChangeHandler} />
        <br />
        <button onClick={clickAddButtonHandler}>추가</button>
      </div>
  <div className ='app-style'>
    { users.map(function(item){
        return (
          <div key={item.id} className='component-style'>
      {item.age}-{item.name}
      </div>
        );
      })
    }

  </div>
  </div>
  ); 
}

export default App;
