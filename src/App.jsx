import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([
    //{ id: 0, age: '', name: "" },
    // { id: 2, age: 20, name: "김민지" },
    // { id: 3, age: 20, name: "한니" },
    // { id: 4, age: 19, name: "다니엘" },
    // { id: 5, age: 16, name: "혜인" },
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
console.log(users);

const User = ({item, removeFunction})=>{ //구조 분해 할당으로 가져옴.(???)
  return (
  <div key={item.id} className='component-style'>
              {item.name}
              {/* <button onClick={() => removeFunction(item.id)}>❌</button> */}
            </div>)
};

  return (
    <div>

      <div className='col'>
        할일: &nbsp;
        <input
          value={name}
          onChange={nameChangeHandler}
          placeholder="할일을 입력해 주세요"
        />
        
        <br />
        {/* 아래 코드를 함수형 컴포넌트 (버튼)로 만들어서 props로 받아옴 */}
        <Button clickAddButtonHandler={clickAddButtonHandler}>추가</Button>
        {/* <button onClick={ clickAddButtonHandler}>추가</button> */}
      </div>
<h1 className='nick'>😘소희의 투두리서터💖</h1>
      <div className='app-style'>

        {users.map(function (item) {
          return (
            <User 
            key = {item.id} //map은 항상 key prop을 가져야 함!
            item = {item} 
            removeFunction = {clickRemoveButtonHandler} />
           //상위 컴포넌트에서 하위 컴포넌트로 상위 컴포넌트가 갖고 있는 item이라는 그 값을 하위 컴포넌트로 props의 형태로 내려줌.  
          );
        })}
      </div>
    </div>
  );
};




//함수형 컴포넌트 추가 버튼 만들기

// const Button =(props)=>{ 
//   const {clickAddButtonHandler, children} = props



//반복되는 부분을 하나의 컴포넌트로서 관리하면 좋겠다.
// 하나의 users로 관리! 자식 컴포넌트로 user만들기.
// 자식 컴포넌트 User
// const User = ({item, removeFunction})=>{ //구조 분해 할당으로 가져옴.(???)

export default App;



// 해설
/*
    <div>
      <p>{변수}</p>
      <button onClick={함수}>{children}</button>
    </div>
*/

//⬆︎⬆︎⬆︎ Component1 최상단 부모컴포넌트 
// const Component1 = () => {
//   const 변수 = "변수"
//   const 함수 = () => {
//     console.log("함수")
//   }
//   return (<>
//     <Component2 변수={변수}/>
//     <Component3 함수={함수}>버튼</Component3>  
//     {/* 
//       props로 2개를 내려주고 있다. 
//       props <태그 내에 설정한 속성과 값>
//             버튼 컴포넌트 : clickAddButtonHandler={clickAddButtonHandler}
//             유저 컴포넌트 : 복수인 경우에는 객체로 전달 -> 꺼내서 사용할 때 {객체구조분해할당}
//                         {
//                           key={item.id}
//                           item={item} 
//                           removeFunction={clickRemoveButtonHandler}
//                         } 
//                         key-value 형태로

//       children란? <>태그 사이에 있는 모두가 친드런이에요</> -> 형태
//     */}
//   </>)
// }

// //User
// const Component2 = ({변수}) => {
//   return (
//     <div>
//       <p>{변수}</p>
//     </div>
//   )
// }

// // Button 
// const Component3 = ({함수, children}) => {
//   return (
//     <button onClick={함수}>{children}</button>
//   )
// }

