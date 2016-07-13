import React, { Component } from 'react'

class Edit extends Component {

	getUpdatedText() {
		let updatedText = document.getElementById('editText').value
		return updatedText
	}

	render() {
		const { todo, displayHeading, completed, id } = this.props
		return  (
			<div>
			{
				displayHeading ?
				<h2 style={{textDecoration: completed ? 'line-through' : 'none'}}>{todo}</h2>
				:
				<div>
					<input type="text" id="editText" placeholder={todo} autoFocus={focus} />
					<button onClick={() => {this.props.update(this.getUpdatedText(), id)}}>OK</button>
					<button onClick={() => {this.props.edit(id)}}>X</button>
				</div>
			}
			</div>
		)
	}

}

export default Edit