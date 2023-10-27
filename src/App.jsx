import React from "react";
import "./input.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";

import { useSelector, useDispatch } from "react-redux";
import {
	addTodo,
	toggleTodo,
	deleteTodo,
	startEditing,
	saveEditedTodo,
	setFilter,
} from "./redux/actions";

const App = () => {
	const todos = useSelector((state) => state.todos);
	const filter = useSelector((state) => state.filter);
	const dispatch = useDispatch();

	const filteredTodos = todos.filter((todo) => {
		if (filter === "all") return true;
		if (filter === "active") return !todo.completed;
		if (filter === "completed") return todo.completed;
		return true;
	});

	return (
		<div className="app">
			<h1 className="title">What's the plan for today?</h1>
			<TodoForm addTodo={(text) => dispatch(addTodo(text))} />
			<FilterButtons filter={filter} setFilter={(filter) => dispatch(setFilter(filter))} />
			<TodoList
				todos={filteredTodos}
				toggleTodo={(id) => dispatch(toggleTodo(id))}
				deleteTodo={(id) => dispatch(deleteTodo(id))}
				startEditing={(id) => dispatch(startEditing(id))}
				saveEditedTodo={(id, editedText) => dispatch(saveEditedTodo(id, editedText))}
			/>
		</div>
	);
};

export default App;
