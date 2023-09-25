import React from 'react';

const todoList = [{id:1,title:"complete assignment",},{id:2,title:"pick up kid"},{id:3,title:"sleep"}]

function App() {
  return (
    <div>
      <h1>
        Todo List
      </h1>
      <List />
    </div>
  );
}
function List(){
  return(
    
    <ul>
        {todoList.map((item)=>{
          return<li key={item.id}>
            <span>{item.id} </span>
            {item.title}</li>
        })}
      </ul>
  )
}

export default App;
