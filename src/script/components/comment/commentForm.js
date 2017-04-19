import React from 'react';

export default class CommentForm extends React.Component {
  clickBundle() {
    let author = this.refs.author.value;
    let content =this.refs.content.value;
    let data = {
      author: author,
      content: content,
      date: '刚刚'
    }
    this.props.formData(data)
    this.refs.author.value = null;
    this.refs.content.value = null;
  }
	render() {
		return (
      <div className="form">
        <label htmlFor="">
          作者：<input ref='author' type="text" />
        </label>
        <label htmlFor="">
          内容：<textarea ref='content' name="" id="" cols="30" rows="10"></textarea>
        </label>
        <label htmlFor="">
          <input onClick={this.clickBundle.bind(this)} type="button" value="提交"/>
        </label>
      </div>
		)
	}
}
