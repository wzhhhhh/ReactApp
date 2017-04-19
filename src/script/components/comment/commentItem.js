import React from 'react';

export default class CommentItem extends React.Component {
	render() {
		return (
			<div>{this.props.idx}</div>
		)
	}
}
