const INITIAL_STATE = {
	todos: 
	[	
		{id: 1, todo: 'Walk dog', completed: false},
		{id: 2, todo: 'Feed cat', completed: false},
		{id: 3, todo: 'Cook dinner', completed: false}
	]
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'newTodo':
			const newTodoState = Object.assign({}, state)
			newTodoState.todos = newTodoState.todos.concat({id: action.id, todo: action.todo, completed: false})
			return newTodoState

		case 'done':
			// find id, set associated completed to true
			let doneArr = state.todos.map((todo) => {
				return todo.id === action.id ? {id: todo.id, todo: todo.todo, completed: !todo.completed} : todo
			})
			return Object.assign({}, state, {todos: doneArr})

		case 'delete':
		// find id, delete associated todo object
			let deleteArr = state.todos.filter((todo) => {
				return todo.id !== action.id
			})
			return Object.assign({}, state, {todos: deleteArr})

		default:
			return state
	}
}

export default reducer