import React, {Component} from 'react'
import './bar1.css'
import axios from 'axios'
import List from '../list/list'



class Bar1 extends Component {
    constructor(props){

        super(props)
    
        this.state = {
          list:[],
          todo:'',
          
            
        }
      }

      componentDidMount(){
        this.getList()
        
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

      updateItem = (id) => {
        axios.put(`http://localhost:8080/api/list/${id}`)
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
            <List key={index} list={list} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
            )
          })
return(

    <div className="bar1-container">
        <div>
            <div className="input-item">
             <input type="text" placeholder="Add To Do Item" value={this.state.todo}  onChange={(e) => this.setState({todo: e.target.value})}/>
             <button onClick={this.addItem}>Add</button>
            </div>
            <div className="clickToEdit">Click on item to edit</div>
            <div className="list" >
             {mappedList}
            </div>
        </div>
        
        
    </div>
)
    }

}
export default Bar1