import { connect } from 'react-redux'
import List from '../components/list'

function mapStateToProps (state) {
	return {todos: state.todos}
}

export default connect(mapStateToProps)(List)