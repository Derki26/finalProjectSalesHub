import { useEffect, useState } from "react";
import { db } from "./lib/firebase";
import { collection, getDocs } from "firebase/firestore";


export const Information = () => {

  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (task) => {
    const newTodoList = [
      ...todos,
      { 
        id: todos.length + 1,
        task: task,
        done: false
       },
    ];

    setTodo(newTodoList)
  };

  const deleteTodo = (id) => {
    const newTodoList = todos.filter((item) => item.id!=id);
    setTodo(newTodoList)
  }

useEffect(() => {
  const todoReference = collection(db,"dataGeneral");
  //console.log(dbreference);
  ///================================
  const getData = async() => {
    const data = await getDocs(todoReference);
    const dataGeneral = data.docs.map((doc) => ({
      id:doc.id,
      ...doc.data(),
    }));
    setTodo(dataGeneral);
  };
  getData()

},[]);


  // const changeTodoState = (id, state) => {
  //   const newTodoList = todos.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, done: state };
  //     } else {
  //       return item;
  //     }
  //   });

  //   setTodo(newTodoList);
  // };

  return (
   
      <div>
        {todos.map((item) => {
          return (
            <div key={item.id}>
            <div className="hero max-h-screen bg-white">
                <div className="hero-content text-left">
                  <div className="max-w-mx">
                    <h1 className="text-5xl font-bold">{item.tittle}</h1>
                    <span className="todo-item-text">{item.text}</span>
                  </div>
                </div>
            </div>
          </div>
          );
        })}
      </div>
    
  );
}
