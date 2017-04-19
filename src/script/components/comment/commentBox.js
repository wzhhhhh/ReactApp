import React from 'react';

import CommentList from "./commentList"
import CommentForm from './commentForm'
export default class CommentBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			comment: {}
		}
	}
	onFormData(data){
		this.setState({
			comment: data
		})
	}
	render() {
		return (
			<div>
				<CommentList author={this.state.comment.author} content={this.state.comment.content} date={this.state.comment.date} />
				<CommentForm formData={this.onFormData.bind(this)}/>
			</div>
		)
	}
}
