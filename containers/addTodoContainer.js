import { connect } from 'react-redux'
import AddTodo from '../components/addTodo'

function mapStateToProps (state) {
	return {todos: state.todos}
}

function mapDispatchToProps (dispatch) {
	return {
		newTodo: (id) => {
			dispatch({
				type: 'newTodo',
				id: id
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)