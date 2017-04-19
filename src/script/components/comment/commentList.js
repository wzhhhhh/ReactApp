import React from 'react';

import CommentItem from "./commentItem.js"
export default class CommentList extends React.Component {
	render() {
		return (
			<div>
				<CommentItem idx="1"/>
				<CommentItem idx="2"/>
				<CommentItem idx="3"/>
			</div>
		)
	}
}
