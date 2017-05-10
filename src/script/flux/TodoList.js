import React from 'react';
export default class TodoList extends React.Component {
  constructor(props){
    super(props);

  }
  render(){
    let lis = this.props.items.map((item, index) => {
      return <li key={index}>{item}<button data-index={index} onClick={this.props.removeItemHandler}>X</button></li>
    })
    return (
      <div>
        <input ref='inputWord' type="text" onKeyUp={this.props.addItemHandler}/>
        <ul>{lis}</ul>
      </div>
    )
  }
}
