import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Counter from './components/Counter';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Todo List</p>
        <TodoList />
        <p>Simple Counter</p>
        <Counter />
        <p>Form Input</p>
        <FormInput />
      </header>
    </div>
  );
}

export default App;