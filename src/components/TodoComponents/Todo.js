import React from 'react'
import {Card} from 'reactstrap'
import styled from 'styled-components'

const todoListStyle ={

			fontSize:"2rem",
			fontFamily:"oblique",
			textDecoration:"underline",
			textShadow:"0 0 5px azure",
			WebkitTextStroke:".7px azure",
			fontWeight:"bolder",
			height:"500px",
			overflowY:"auto",
			borderRadius:"20px",
			backgroundColor:"rgba(64,65,86,1)",
			border:"double 10px",
			boxShadow:'0 0 5px #000',

}

const TaskStyle = styled.p`
:hover{
	background-color:rgba(250,250,250,.3);
	border:solid azure;
}
`;
const Todo = props =>{

	return(
				<Card style={todoListStyle}>
				{
					props.todoList.map(todo=>{
						return (

								<TaskStyle key={todo.id}>
								{todo.task}
								</TaskStyle>
							)
					})
				}
			</Card>
		)
}




export default Todo;