import React from 'react';

const todoList = [{id:1,title:"complete assignment",},{id:2,title:"pick up kid"},{id:3,title:"sleep"}]

function App() {
  return (
    <div>
      <h1>
        Todo List
      </h1>
      <ul>
        {todoList.map(function(item){
          return<li key={item.id}>
            <span>{item.id} </span>
            {item.title}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
