import React from 'react';

function Todo(props) {
	var status = (props.completed) ? 'Undo' : 'Done';
	return (
		<li className={(props.completed) ? 'completed' : ''} key={props.id}>
			<div className="view">
				<input className="toggle" type="checkbox" checked={props.completed} onChange={() => props.completeTask(props.count, props.id)} />
				<label>{props.task}</label>
				<button type="button" className="destroy" onClick={() => props.removeTask(props.count, props.id)}></button>
			</div>
		</li>
	);
}

export default Todo;
