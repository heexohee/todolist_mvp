import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([
    { id: 1, age: 18, name: "강해린" },
    { id: 2, age: 20, name: "김민지" },
    { id: 3, age: 20, name: "한니" },
    { id: 4, age: 19, name: "다니엘" },
    { id: 5, age: 16, name: "혜인" },
  ]);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
 // 과제 
 // 1. 새로운 형태의 이놈을 만든다.! {id:1, age:18, name: "강해린"},
 // 2. 이 놈을 배열에 넣는다.

 // 불변성을 유지하기 위해서 배열 users를 스프레드 문법으로 풀고, 새로운 배열을 담아서 반환.
  
 // 추가 버튼 클릭
 const clickAddButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age: age,
      name: name,
    };
    setUsers([...users, newUser]);
     setName('');
     setAge('');
  };

 // 삭제 버튼 클릭(❌) //엑스 버튼을 누를 때 어떤 값을 넘겨주면 된다.
 const clickRemoveButtonHandler =(id)=>{
  
  // const newUsers = users.filter(users=>users.id !== id)
  // setUsers(newUsers);

  const  newUsers = users.filter(function(users) {
    return users.id !== id;
  });
  setUsers(newUsers);
};



  return (
    <div>
      <div>
        이름: &nbsp;
        <input
          value={name}
          onChange={nameChangeHandler}
        />
        <br />
        나이: &nbsp;
        <input
          value={age}
          onChange={ageChangeHandler}
        />
        <br />
        <button onClick={ clickAddButtonHandler}>추가</button>
      </div>
      <div className='app-style'>
        {users.map(function (item) {
          return (
            <User item={item} 
            removeFunction ={clickRemoveButtonHandler} />
           //상위 컴포넌트에서 하위 컴포넌트로 상위 컴포넌트가 갖고 있는 item이라는 그 값을 하위 컴포넌트로 props의 형태로 내려줌.  
          );
        })}
      </div>
    </div>
  );
};

//반복되는 부분을 한아의 컴포넌트로서 관리하면 좋겠다.
// 하나의 users로 관리! 자식 컴포넌트로 user만들기.
// 자식 컴포넌트 User
const User = ({item, removeFunction})=>{
  return (
  <div key={item.id} className='component-style'>
              {item.age}-{item.name}
              <button onClick={() => removeFunction(item.id)}>❌</button>
            </div>)
}
export default App;



