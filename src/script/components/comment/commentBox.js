import React from 'react';

import CommentList from "./commentList.js"


export default class CommentBox extends React.Component {
	render() {
		console.log(2)
		return (
			<div>
				<CommentList />
			</div>
		)
	}
}
