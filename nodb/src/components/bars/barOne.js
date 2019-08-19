import React, {Component} from 'react'
import './bar1.css'
import axios from 'axios'
import Lists from '../list/List'



class Bar1 extends Component {
    constructor(props){

        super(props)
    
        this.state = {
          list:[],
          todo:'',
          edit: false,
          text: false,
          
            
        }
      }

      componentDidMount(){
        this.getList()
        
      }
      toggleText = () =>{
          
        this.setState({
            text: !this.state.text,
                
        })
    } 

      
      toggleEdit = () => {

        this.setState({
            edit: !this.state.edit
        })
      }
      getList = () => {
        
        axios.get('http://localhost:8080/api/list').then(response => {
          
          this.setState({
            list: response.data
            
          })
        })
        .catch((error) => {
          console.log(error)
    
        })
      }

      addItem = (event) => {
        event.preventDefault()
        
        
        const body = {
          todo: this.state.todo
        }
    
        axios.post('http://localhost:8080/api/list', body)
        .then(response =>{
    
          this.setState({
            list: response.data,
            todo: ''
          })
        })
      }

      handleInput = (e) =>{

        this.setState({
            editTodo: e
        })
        
      }
      updateItem = (id) => {
          let updatedItem = {
              todo: this.state.editTodo
          }
        axios.put(`http://localhost:8080/api/list/${id}`, updatedItem)
        .then(response => {

            this.setState({
                list: response.data
                
            })
           
        })

      }

      deleteItem = (id) => {
          
        axios.delete(`http://localhost:8080/api/list/${id}`)
        .then(response => {
          this.setState({
            list: response.data
          })
        })
      
      }


    render(){
        const mappedList = this.state.list.map((list, index)=>{

      
            return(
            <Lists key={index} list={list} deleteItem={this.deleteItem} updateItem={this.updateItem} edit={this.state.edit} text={this.state.text} toggleText= {this.toggleText} toggleEdit={this.toggleEdit} handleInput={this.handleInput}/>
            )
          })
return(

    <div className="bar1-container">
        <div>
            <div className="input-item">
             <input type="text" placeholder="Add To Do Item" value={this.state.todo}  onChange={(e) => this.setState({todo: e.target.value})}/>
             <button onClick={this.addItem}>Add</button>
            </div>
            <div className="clickToEdit">Click on item to finish</div>
            <div className="list" >
             {mappedList}
            </div>
        </div>
        
        
    </div>
)
    }

}
export default Bar1