import React, { Component } from 'react'
import ListContainer from '../containers/listContainer'
import AddTodoContainer from '../containers/addTodoContainer'

class App extends Component {

  render () {
    return (
    	<div>
		    <h1>Welcome to Ellie and Miles todos</h1>
		    <AddTodoContainer />
		    <ListContainer />
    	</div>
    )
  }
}

export default App
