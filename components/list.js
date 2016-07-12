import React, { Component } from 'react'
// import Item from './item'
import ItemContainer from '../containers/itemContainer'

class List extends Component {
	render() {
		// console.log('list', this.props)
		return (
			<div>
				{
					this.props.todos.map((todo, index) => {
						return (
							<ItemContainer key={index} todo={todo} />
						)
					})
				}			
			</div>
		)
	}
}

export default List