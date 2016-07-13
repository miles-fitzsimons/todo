import { connect } from 'react-redux'
import AddTodo from '../components/addTodo'

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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)