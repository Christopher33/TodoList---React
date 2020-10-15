import React from 'react';


const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
    //Here I can write javascipt code

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, {text: inputText, completed: false, id: Math.random() * 1000 }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }

    return(

        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>

            <div className="select">
                <select onChange={statusHandler} name="todo" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );

}

export default Form;