import { connect } from 'react-redux'
import Item from '../components/item'

// const mapStateToProps = (state) => {
// 	return {todos: state.todos}
// }

const mapDispatchToProps = (dispatch) => {
	return {
		done: (id) => {
			dispatch({
				type: 'done',
				id: id
			})
		},
		delete: (id) => {
			dispatch({
				type: 'delete',
				id: id
			})
		},
		edit: (id) => {
			dispatch({
				type: 'edit',
				id: id
			})
		}
	}
}

export default connect(null, mapDispatchToProps)(Item)