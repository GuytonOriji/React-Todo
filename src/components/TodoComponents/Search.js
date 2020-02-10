import React from 'react'
import styled from 'styled-components'
import {Card} from 'reactstrap'





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


let curentList;

function check(){
  if(window.localStorage.getItem("theList")){

     curentList = JSON.parse(window.localStorage.getItem("theList"))
}else{
   curentList = 'none saved';

}



}

check()




class SearchForm extends React.Component {
	constructor(){
		super()
		this.state={
			theTask:""
		}
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
      <span style={inp_title}>Saved</span>
      <input type='text' list="curList" className="form-control"/>
      <datalist  id="curList" >
      {
      	curentList.map(task=>{
      		return (
      			<option value={task.task}  key={task.id} />
      			)
      	})
      }

      </datalist>

    </label>
  

</Form>

		</Card>
				)


	}
}





export default SearchForm;