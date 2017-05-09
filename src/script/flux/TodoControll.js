import React from 'react';
import TodoList from './TodoList.js'
import Actions from './Actions.js'
export default class Todo extends React.Component {
  addItem(event){
    if(event.keyCode == 13){
      //dosomething
    }
  }
  render(){
    return (
      <div>
        <TodoList ref='todo' addItemHandler={this.addItem}/>
      </div>
    )
  }
}
