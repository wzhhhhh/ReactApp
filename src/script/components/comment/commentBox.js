import React from 'react';

import CommentList from "./commentList"
import CommentForm from './commentForm'
export default class CommentBox extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			comment: []
		}
	}
	onFormData(data){
		this.setState({
			comment: this.state.comment.concat(data)
		})
		console.log(this.state.comment)
	}

	componentWillMount(){
		console.log(1)
		fetch('/mock/commentData.json')
				.then((response) => response.json())
				.then((result) => {
					this.setState({
						comment: result
					})
					console.log(this.state.comment)
					console.log(2)
				})
	}
	render() {
		console.log(3)
		return (
			<div>
				<CommentList data={this.state.comment} />
				<CommentForm formData={this.onFormData.bind(this)}/>
			</div>
		)
	}
}
