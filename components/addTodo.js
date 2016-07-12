import React, { Component } from 'react'

class AddTodo extends Component {

	getNewTodoText() {
		let newTodoText = document.getElementById('newText').value
		return newTodoText
	}

	getNewId() {
		let id = this.props.todos.reduce((p,c) => {
			return p.id > c.id ? p : c
		}).id + 1
		return id
	}

	render() {
		return (
			<div>
				<textarea id="newText" /><button onClick={() => {this.props.newTodo(this.getNewTodoText(), this.getNewId())}}>OK</button>
			</div>
		)
	}

}

export default AddTodo