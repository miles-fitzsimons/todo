import { connect } from 'react-redux'
import Edit from '../components/edit'

// function mapStateToProps (state) {
// 	return {todos: state.todos}
// }

function mapDispatchToProps (dispatch) {
	return {
		update: (todo, id) => {
			dispatch({
				type: 'update',
				todo: todo,
				id: id				
			})
		}
	}
}

export default connect(null, mapDispatchToProps)(Edit)