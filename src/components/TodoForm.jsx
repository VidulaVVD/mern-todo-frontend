import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";


const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }

    return (
        <form className="form" >
            
            <input  
                placeholder="Enter new task to do..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
           
            <button onClick={onFormSubmit}>Add</button>
            
        </form>
    )
}

export default TodoForm;