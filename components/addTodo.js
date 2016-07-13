import React, { Component } from 'react'

class AddTodo extends Component {

	getNewTodoText() {
		let newTodoText = document.getElementById('newText').value
		document.getElementById('newText').value = ''
		return newTodoText
	}

	getNewId() {
		console.log('add', this.props.todos)
		if (this.props.todos.length === 0) {
			let id = 1
			return id
		}
		else {
			let id = this.props.todos.reduce((p,c) => {
				return p.id > c.id ? p : c
			}).id + 1
			return id
		}
	}

	render() {
		return (
			<div>

				<button className="glyphicon glyphicon-plus" aria-hidden="true" aria-label="edit" onClick={() => {this.props.newTodo(this.getNewId())}}></button>
			</div>
		)
	}

}

export default AddTodo

// <input type="text" id="newText" placeholder="add new todo" />