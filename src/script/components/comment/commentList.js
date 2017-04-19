import React from 'react';

import CommentItem from "./commentItem.js"
export default class CommentList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data : []
		}
	}
	componentWillMount(){
		fetch('/mock/commentData.json')
				.then((response) => response.json())
				.then((result) => {
					this.setState({
						data: result
					})
				})
	}
	render() {
		// let data = [
		// 	{
		// 		author: 'wzh',
		// 		content: '今天天气不错',
		// 		date: '刚刚'
		// 	},{
		// 		author: 'wzh',
		// 		content: '今天天气不错',
		// 		date: '刚刚'
		// 	}
		// ]
		// data.push({
		// 	author: this.props.author,
		// 	content: this.props.content,
		// 	date: this.props.date
		// })
		this.state.data.push({
			author: this.props.author,
			content: this.props.content,
			date: this.props.date
		})
		let CommentItems = this.state.data.map((item) => {
			return <CommentItem author={item.author} content={item.content} date={item.date} />
		})
		return (
			<div>{CommentItems}</div>
		)
	}
}
