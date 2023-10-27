import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({
	todo,
	toggleTodo,
	deleteTodo,
	startEditing,
	saveEditedTodo,
}) => {
	const [editedText, setEditedText] = useState(todo.text);

	const handleEdit = () => {
		setEditedText(todo.text);
		startEditing(todo.id);
	};

	const handleSave = () => {
		saveEditedTodo(todo.id, editedText);
		startEditing(null);
	};

	return (
		<li id="content-todo">
			<input
				type="checkbox"
				checked={todo.completed}
				onChange={() => toggleTodo(todo.id)}
				className="checkbox checkbox-primary"
				disabled={todo.editing}
			/>
			{todo.editing ? (
				<>
					<input
						type="text"
						value={editedText}
						onChange={(e) => setEditedText(e.target.value)}
						className="input input-bordered input-md"
					/>
				</>
			) : (
				<>
					<span
						style={{ textDecoration: todo.completed ? "line-through" : "none" }}
					>
						{todo.text}
					</span>
				</>
			)}
			<div id="button-action">
				<button
					onClick={handleEdit}
					disabled={todo.completed}
					style={{ display: todo.completed || todo.editing ? "none" : "" }}
				>
					<FontAwesomeIcon icon={faPenToSquare} />
				</button>
				<button onClick={() => deleteTodo(todo.id)}>
					<FontAwesomeIcon icon={faTrash} />
				</button>
				<button
					onClick={handleSave}
					style={{ display: todo.editing ? "" : "none" }}
				>
					Save
				</button>
			</div>
		</li>
	);
};

export default Todo;
