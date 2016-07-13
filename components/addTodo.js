import React, { Component } from 'react'

class AddTodo extends Component {

	getNewTodoText() {
		let newTodoText = document.getElementById('newText').value
		document.getElementById('newText').value = ''
		return newTodoText
	}

	getNewId() {
		console.log('add', this.props.todos.length)
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
				<input type="text" id="newText" placeholder="add new todo" /><button className="glyphicon glyphicon-ok" aria-hidden="true" aria-label="edit" onClick={() => {this.props.newTodo(this.getNewTodoText(), this.getNewId())}}></button>
			</div>
		)
	}

}

export default AddTodo