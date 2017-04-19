import React from 'react';

import CommentItem from "./commentItem.js"
export default class CommentList extends React.Component {
	render() {
		console.log(this.props.data)
		let CommentItems = this.props.data.map((item) => {
			return <CommentItem author={item.author} content={item.content} date={item.date} />
		})
		return (
			<div>{CommentItems}</div>
		)
	}
}
