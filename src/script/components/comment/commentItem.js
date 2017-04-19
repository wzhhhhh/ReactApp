import React from 'react';

export default class CommentItem extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.content}</h1>
				<span>{this.props.author}</span>
				<span>{this.props.date}</span>
			</div>
		)
	}
}
