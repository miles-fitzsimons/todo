const INITIAL_STATE = {
	todos: 
	[	
		{id: 1, todo: 'Walk dog', completed: false, displayHeading: true},
		{id: 2, todo: 'Feed cat', completed: false, displayHeading: true},
		{id: 3, todo: 'Cook dinner', completed: false, displayHeading: true}
	]
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'newTodo':
			const newTodoState = Object.assign({}, state)
			newTodoState.todos = newTodoState.todos.concat({id: action.id, todo: action.todo, completed: false, displayHeading: true})
			return newTodoState

		case 'done':
			// find id, set associated completed to true
			let doneArr = state.todos.map((todo) => {
				return todo.id === action.id ? {id: todo.id, todo: todo.todo, completed: !todo.completed, displayHeading: true} : todo
			})
			return Object.assign({}, state, {todos: doneArr})

		case 'delete':
			// find id, delete associated todo object
			let deleteArr = state.todos.filter((todo) => {
				return todo.id !== action.id
			})
			return Object.assign({}, state, {todos: deleteArr})

			case 'edit':
				// find id, change associated displayHeading
				let editArr = state.todos.map((todo) => {
					return todo.id === action.id ? {id: todo.id, todo: todo.todo, completed: todo.completed, displayHeading: !todo.displayHeading} : todo
				})
				return Object.assign({}, state, {todos: editArr})

			case 'update':
				console.log('updating at reducer', action)
				// find id, change associated todo and reset displayHeading to true
				let updateArr = state.todos.map((todo) => {
					return todo.id === action.id ? {id: todo.id, todo: action.todo, completed: todo.completed, displayHeading: true} : todo
				})
				return Object.assign({}, state, {todos: updateArr})

		default:
			return state
	}
}

export default reducer