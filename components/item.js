import React, { Component } from 'react'

class Item extends Component {
	render() {
		console.log('item', this.props)
		const { id, todo, completed } = this.props.todo
		return (
			<div className="item">
				<h2 style={{textDecoration: completed ? 'line-through' : 'none'}}>{todo}</h2>				
				<h3 className="itemButton" onClick={() => {this.props.done(id)}}>Done</h3>
				<h3>Edit</h3>
				<h3 className="itemButton" onClick={() => {this.props.delete(id)}}>Delete</h3>
		  </div>
		)
	}
}

export default Item