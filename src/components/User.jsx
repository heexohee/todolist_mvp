const User = ({item, removeFunction})=>{ //구조 분해 할당으로 가져옴.(???)
    return (
    <div key={item.id} className='component-style'>
                {item.age}-{item.name}
                <button onClick={() => removeFunction(item.id)}>❌</button>
              </div>)
  }
  export default User;

  //반복되는 부분을 하나의 컴포넌트로서 관리하면 좋겠다.
// 하나의 users로 관리! 자식 컴포넌트로 user만들기.
// 자식 컴포넌트 User
// const User = ({item, removeFunction})=>{ //구조 분해 할당으로 가져옴.(???)
