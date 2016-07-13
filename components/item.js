import React, { Component } from 'react'
import EditContainer from '../containers/editContainer'

class Item extends Component {

	render() {
		const { id, todo, completed, displayHeading } = this.props.todo
		return (
			<div className="item">
				<EditContainer todo={todo} displayHeading={displayHeading} completed={completed} id={id} />
				<span className="itemButton glyphicon glyphicon-ok" aria-hidden="true" aria-label="done" onClick={() => {this.props.done(id)}}></span>&emsp;
				<span className="itemButton glyphicon glyphicon-pencil" aria-hidden="true" aria-label="edit" onClick={() => {this.props.edit(id)}}></span>&emsp;
				<span className="itemButton glyphicon glyphicon-remove" aria-hidden="true" aria-label="delete" onClick={() => {this.props.delete(id)}}></span>
		  </div>
		)
	}
}

export default Item