import addTodo from '../components/addTodo'
import { connect } from 'react-redux'

function mapStateToProps (state) {
	return {todos: state.todos}
}

function mapDispatchToProps (dispatch) {
	return {
		newTodo: (todo, id) => {
			dispatch({
				type: 'newTodo',
				todo: todo,
				id: id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(addTodo)