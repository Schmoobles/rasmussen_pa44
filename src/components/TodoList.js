import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue.trim()]);
            setInputValue('');
        }
    };

    const handleDelete = (index) => {
        setTodos(todos.filter((_, i) => i !== index));
    };

    return (
        <div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter a todo"
            />
            <button onClick={handleSubmit} disabled={!inputValue.trim()}>
                Add Todo
            </button>
            <ul>
                {todos.length === 0 ? (
                    <li>No items yet</li>
                ) : (
                    todos.map((todo, index) => (
                        <li key={index}>
                            {todo}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
}

export default TodoList;
