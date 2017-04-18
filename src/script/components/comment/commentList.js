import React from 'react';

import commentItem from "./commentItem.js"
export default class commentList extends React.Component {
	render() {
		return (
			<div>
				<commentItem />
				<commentItem />
				<commentItem />
			</div>
		)
	}
}
