import React from 'react';
import Todo from './Todo';

function TodoList(props) {
	const items = props.items.map((todo,count) => {
		return (<Todo
				task={todo.task}
				completed={todo.completed}
				count={count}
				id={todo.key}
				completeTask={props.completeTask}
				removeTask={props.removeTask} />);
	})
	return (
		<ul className="todo-list">{items}</ul>
	);
}

export default TodoList;
