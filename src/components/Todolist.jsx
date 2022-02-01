import React from 'react';
import { useState } from 'react'
function Todolist() {

    const [todoTitle, setTodotitle] = useState("");
    const [todoList, setTodolist] = useState([]);

    const changeTodotitle = (val) => {
        setTodotitle(val)
    }

    const addTodolist = ((title) => {
        const newTodo = {
            id: Date.now(),
            title: title,
        }
        setTodolist([newTodo, ...todoList]);

    })

    return (
        <div className="main">
            <div className="todolist">
                <form action="">
                    <input type="text" name="addname" value={todoTitle} placeholder='Enter your todo' onChange={(e) => changeTodotitle(e.target.value)} />
                    <button className="addbtn" onClick={(e) => {
                        e.preventDefault();
                        addTodolist(todoTitle);
                        setTodotitle("");

                    }}>Add Todo</button>
                </form>
                <br />
                <form className="displaytodo" action="">
                    {todoList.map((item) => (
                        <div className="list">
                            <div className="listdata">
                                <div className="titlename">{item.title}</div> <br />
                                <button className="editbtn">Edit</button>
                                <button className="deletebtn" onClick={() => {
                                    const deltodo = todoList.filter((todo) =>todo.id !==item.id);
                                    setTodolist(deltodo);
                                  
                                    
                                }}>Delete</button>
                            </div><hr />

                        </div>

                    ))}<br />

                </form>
            </div>
        </div >
    )
}

export default Todolist;
