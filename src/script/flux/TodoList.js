import React from 'react';
export default class TodoList extends React.Component {
  constructor(props){
    super(props);

  }
  render(){

    return (
      <div>
        <input ref='inputWord' type="text" onKeyUp={this.props.addItemHandler}/>
        <ul>jjjjj</ul>
      </div>
    )
  }
}
