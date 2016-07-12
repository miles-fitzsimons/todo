import React, { Component } from 'react'

class Item extends Component {
	render() {
		console.log('item', this.props)
		return (
			<div className="item">
				<h2 style={{textDecoration: this.props.todo.completed ? 'line-through' : 'none'}}>{this.props.todo.todo}</h2>				
				<h3 className="itemButton" onClick={() => {this.props.done(this.props.todo.id)}}>Done</h3>
				<h3>Edit&emsp;&emsp;&emsp;&emsp;Delete</h3>
		  </div>
		)
	}
}

export default Item