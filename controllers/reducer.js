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
			console.log('done', action)
			const doneState = Object.assign({}, state)
			// find id, set completed to true
			console.log('1', doneState)
			var arr = doneState.todos.map((todo) => {
				return todo.id === action.id ? {id: todo.id, todo: todo.todo, completed: !todo.completed} : todo
			})
			doneState.todos = arr
			return doneState

		default:
			return state
	}
}

export default reducer