const INITIAL_STATE = {
	todos: 
	[	
		{id: 1, todo: 'Walk dog', completed: false, displayHeading: true, important: false},
		{id: 2, todo: 'Feed cat', completed: false, displayHeading: true, important: false},
		{id: 3, todo: 'Cook dinner', completed: false, displayHeading: true, important: false}
	]
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type) {

		case 'newTodo':
			const newTodoState = Object.assign({}, state)
			newTodoState.todos = newTodoState.todos.concat({id: action.id, completed: false, displayHeading: false, important: false})
			return newTodoState

		case 'done':
			// find id, set associated completed to true
			let doneArr = state.todos.map((todo) => {
				return todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
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
					return todo.id === action.id ? { ...todo, displayHeading: false } : todo
				})
				return Object.assign({}, state, {todos: editArr})

			case 'update':
				// find id, change associated todo and reset displayHeading to true
				let updateArr = state.todos.map((todo) => {
					return todo.id === action.id ? { ...todo, todo: action.todo, displayHeading: true } : todo
				})
				return Object.assign({}, state, {todos: updateArr})

			case 'important':
				// find id, change associated important flag
				let importantArr = state.todos.map((todo) => {
					console.log({ ...todo, important: !todo.important })
					return todo.id === action.id ? { ...todo, important: !todo.important } : todo
				})
			return Object.assign({}, state, {todos: importantArr})

		default:
			return state
	}
}

export default reducer