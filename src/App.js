import React, {Component} from 'react';
import Todoform from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import SearchForm from './components/TodoComponents/Search'
import {Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components'


let theList;


function check(){
  if(window.localStorage.getItem("theList")){

     theList = JSON.parse(window.localStorage.getItem("theList"))
}else{
   theList = [
  {
    task: 'Organize Garage',
    id: 0,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1,
    completed: false
  }
];

}



}

check()


const containerStylez ={
  textAlign:"center",
  display:"flex",
  flexDirection:"column",
  gridGap:"50px"
}




const Title = styled.h2`
    font-size:4rem;
    font-family: 'Zhi Mang Xing', cursive;



    @media(max-width:500px){
    font-size:2rem;

    }

`;





class App extends Component {
  constructor(){
    super();
    this.state={
      todoList:theList,
    }
  }


addToList = task =>{

        const newTask = {
          task:task,
          id:Date.now(),
          completed:false
        }

        this.setState({
          todoList:[...this.state.todoList, newTask]
        });


        if(window.localStorage.getItem("theList")){
  window.localStorage.setItem("theList", JSON.stringify(this.state.todoList))
     
}else{
  window.localStorage.setItem("theList",  JSON.stringify(this.state.todoList))
}
}


clearList = () =>{
  this.setState({
    todoList:[]
  })


  window.localStorage.clear()

}





  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {

  
    return (
      <Container style={containerStylez}>
        <Title>Welcome to your Todo App!</Title>
        <TodoList todoList={this.state.todoList}/>
        <Todoform addToList={this.addToList} clearList={this.clearList}/>

        <SearchForm />
      </Container>
    );
  }
}

export default App;
