import React, {Component} from 'react';

class TodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ''
		}

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		this.setState({task: event.target.value});
	}

	render() {
		return (
			<div>
				<input type="text" className="new-todo"
					value={this.state.task} onChange={this.handleInputChange}
					onKeydown={() => {
					this.props.addTask(this.state.task)
					this.setState({task: ''})}}
					placeholder="What to do today?"/>
			</div>
		)
	}
}

export default TodoForm;
