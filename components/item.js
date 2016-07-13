import React, { Component } from 'react'
import EditContainer from '../containers/editContainer'

class Item extends Component {

	render() {
		const { id, todo, completed, displayHeading } = this.props.todo
		return (
			<div className="item">
				<EditContainer todo={todo} displayHeading={displayHeading} completed={completed} id={id} />
				<h3 className="itemButton" onClick={() => {this.props.done(id)}}>Done</h3>
				<h3 className="itemButton" onClick={() => {this.props.edit(id)}}>Edit</h3>
				<h3 className="itemButton" onClick={() => {this.props.delete(id)}}>Delete</h3>
		  </div>
		)
	}
}

export default Item