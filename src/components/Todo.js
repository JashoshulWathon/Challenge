
import React from "react";
import '../App.css';

const Todo = ({ todo }) => {
	return (
		<div className="todo">{todo.text}</div>;	
	);
}

export default Todo;
