import React from 'react';
import { useState } from 'react';
function Todolist() {
    //  use states for the application 
    const [todoTitle, setTodotitle] = useState("");
    const [todoList, setTodolist] = useState([]);
    const [editable,setEditable] = useState(false);
    const [editableTodo,seteditableTodo]=useState(null);

    
    // add a todo list 
    const addTodolist = (event,title) => {
        event.preventDefault();
        if (title) {
            const newTodo = {
                id: Date.now(),
                title
            }
            setTodolist([newTodo, ...todoList]);
            setTodotitle("");
        } else {
            alert("Please Enter a valid title ..")
        }
    }

    // if any name have to delete the run the function
    const deleteHandler = (todoid) => {
        
        const updateTodo = todoList.filter((item)=> item.id !== todoid);
        setTodolist(updateTodo);
    }

    // is any todo name needs to be edit then run the function
    const editHandler = (todoid)=>{
        setEditable(true);
        const updatetodoName=todoList.find((item) => item.id === todoid);
        seteditableTodo(updatetodoName);
        setTodotitle(updatetodoName.title);
    }
    // edit update handler
    const editUpdateHandler = (event,title)=>{
        event.preventDefault();
        if (!title){
            alert("Please edit and update your todo titler")
        }
        else{
            
            editableTodo.title = title || editableTodo.title;
            setTodotitle("");
            setEditable(false);
            seteditableTodo(null);
        }
    }
     
    return (
        <div className="main">
            <div className="todolist">
                <form action="">
                    <input type="text" name="addname" value={todoTitle} placeholder='Enter your todo' onChange={(e) => setTodotitle(e.target.value)} />
                    <button onClick = {(e) =>editable?editUpdateHandler (e, todoTitle):  addTodolist(e, todoTitle)} >
                   {editable ? "Update Todo" : "Add Todo"}
                   
               </button>

               {/* <button onClick={(e) => addTodolist(e, todoTitle)}>Add Student</button>  */}
                </form>
                <br />
                <form className="displaytodo" action="">
                    {todoList.map((todo) => (
                        <div className="list">
                            <div className="listdata">
                                <div className="titlename">{todo.title}</div> <br />
                                <button className="editbtn" onClick={(e)=>{e.preventDefault();
                                editHandler(todo.id);
                                }}>Edit</button>
                                <button className="deletebtn" /*onClick={(e) => {
                                   e.preventDefault();
                                   const newTodoList = todoList.filter((item) => item.id !== todo.id);
                                   setTodolist(newTodoList);               
                                }}> */
                                    onClick={(e) => {
                                        e.preventDefault();
                                        deleteHandler(todo.id);
                                    }}
                                >
                                    Delete</button>
                            </div><hr />

                        </div>

                    ))}<br />

                </form>
            </div>
        </div >
    )
}

export default Todolist;
