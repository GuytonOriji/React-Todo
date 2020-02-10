import React from 'react'
import Todo from './Todo'






const TodoList = (props) =>{




	return (
			<div>
				<Todo todoList={props.todoList} />
			</div>
		)
}



export default TodoList