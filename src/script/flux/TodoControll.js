import React from 'react';
import TodoList from './TodoList.js'
import Actions from './Actions.js'
import TodoStore from './TodoStore.js'

export default class Todo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: TodoStore.getAll()
    }
  }

  addItem(event){
    if(event.keyCode == 13){
      Actions.addItem(this.refs.todo.refs.inputWord.value)
      event.target.value = ''
    }
  }

  removeItem(event){
    Actions.removeItem(event.target.dataset['index'])
  }

  _onchange(){
    this.setState({
      items: TodoStore.getAll()
    })
  }

  render(){
    return (
      <div>
        <TodoList ref='todo' addItemHandler={this.addItem.bind(this)} removeItemHandler={this.removeItem} items={this.state.items}/>
      </div>
    )
  }

  componentDidMount(){
    TodoStore.addChangeListener(this._onchange.bind(this))
  }
}
