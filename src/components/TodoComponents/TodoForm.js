import React from 'react'
import styled from 'styled-components'
import {Container, Card} from 'reactstrap'


const Form = styled.form`
	border:solid;
	width:450px;
	display:flex;
	flex-direction:row;
	justify-content:space-between;
	align-items:center;
	padding:5px 10px;
	font-size:1rem;
	box-shadow:0 0 5px #000;
	:hover{
	box-shadow:0 0 15px #000;

	}



	@media(max-width:500px){
		width:100%
	}
`;

const holdCard = {

	display:"flex",
	justifyContent:"center",
	alignItems:"center",
	backgroundColor:"rgba(0,0,0,0)",
	border:"none",

}


const inp_title = {
	fontSize:"1.3rem",
	fontWeight:"bolder"
}


class Todoform extends React.Component {
	constructor(){
		super()
		this.state={
			theTask:""
		}
	}

		newTask = task =>{


			this.setState({
			theTask:task.target.value
			})
		}

		sendTask = task =>{
			task.preventDefault()
			this.props.addToList(this.state.theTask)
		}

		render(){

		return(

			<Card style={holdCard}>
				<Form>
    <label>
      <span style={inp_title}>todo</span>
      <input type='text' onChange={this.newTask} className="form-control"/>
    </label>
  

  <div>
      <button type="button" className="btn btn-info" onClick={this.sendTask}>Add</button>
      <button type="button" className="btn btn-danger" onClick={this.props.clearList} >Clear</button>
  </div>
</Form>

		</Card>
				)


	}
}





export default Todoform;