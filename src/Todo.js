import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, addTodo, clearTodo } from "./features/todoSlice";

function Todo() {
        const items = useSelector((state) => state.todos.items)
        const dispatch = useDispatch()
        const [input , setInput] = useState('')
    
        const data = items.map((item, index) => <li key={index} onClick={()=> dispatch(removeTodo(index))}>{item}</li>)

        const todoToAdd = (e) =>{
            e.preventDefault()
            dispatch(addTodo(input))
        }  

        return (
            <div>
                <form onSubmit={(e) => todoToAdd(e)}>
                    <input type="text" onChange={(e) => setInput(e.target.value)} />
                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {data}
                </ul>
                <button onClick={() => dispatch(clearTodo())}>Clear</button>
            </div>
        )
}

export default Todo