import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';

class Test extends Component {

	constructor(props) {
		super(props);
		this.state = {
			tasks: [],
			lists: ''
		}
	}

	asyncfunction() {

	}
	componentDidMount() {
		const rootRef = firebase.database().ref().child('todo');
		const that = this;
		//const speedRef = rootRef.child('speed');
		var tempTask = [];
		rootRef.once('value', function(snap){
			snap.forEach(function(task){
				tempTask.push(task.val());
				console.log(tempTask);
				console.log("Temp length: "+tempTask.length);
				console.log("Snap length: "+snap.numChildren());
				if(tempTask.length === snap.numChildren()){
					that.setState({
						tasks: tempTask
					});
					console.log(that.state.tasks);
					that.getList();
				}
			})
		});

	}

	getList () {
		const lists = this.state.tasks.map((item) => {
			return (<li>{item.task}</li>)
		});
		this.setState({
			lists: lists
		})
	}

	render() {
		return (
			<div className="App">
		      <h1>My Prototype</h1>
		      <ul>{this.state.lists}</ul>
		    </div>
		)
	}
}

export default Test