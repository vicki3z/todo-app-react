import React, { Component } from 'react';
import * as firebase from 'firebase';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
    this.getList();
  }

  getList () {
    const rootRef = firebase.database().ref().child('todo');
    const that = this;
    //const speedRef = rootRef.child('speed');
    var tempTask = [];
    rootRef.once('value', function(snap){
      snap.forEach(function(task){
        const item = task.val();
        item.key = task.key;
        tempTask.push(item);
        //console.log(tempTask);
        //console.log("Temp length: "+tempTask.length);
        //console.log("Snap length: "+snap.numChildren());
        if(tempTask.length === snap.numChildren()){
          that.setState({
            items: tempTask
          });
          console.log(that.state.items);
        }
      })
    });
  }

  addTask(task) {
    const rootRef = firebase.database().ref().child('todo');
    rootRef.push({task: task, completed: false});

    var tempItems = this.state.items;
    tempItems.unshift({task: task, completed: false});

    this.setState({
      items: tempItems
    });
  }

  completeTask(index, key) {
    console.log(key);
    var tempItems = this.state.items;
    var completed = !tempItems[index].completed;
    const rootRef = firebase.database().ref().child('todo');
    rootRef.child(key).update({'completed': completed});

    this.getList();
  }

  removeTask(index,key) {
    console.log(key);
    const rootRef = firebase.database().ref().child('todo');
    rootRef.child(key).remove();

    this.getList();
  }

  render() {
    return (
      <div className="todoapp">
        <h2>To Do App</h2>
        <TodoForm addTask={this.addTask.bind(this)} />
        <TodoList items={this.state.items} completeTask={this.completeTask.bind(this)}
          removeTask={this.removeTask.bind(this)} />
      </div>
    );
  }
}

export default App;
