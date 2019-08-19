import React, {Component} from 'react'
import './list.css'
import * as Icon from 'react-feather'

class Lists extends Component{

    constructor(){
        super()

        this.state = {
            list:[],
            edit: false,
            text: false
        }

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

      updateItem = (id) => {
        this.toggleEdit()
          this.props.updateItem(id)
          
      }
    render(){
        const {id, todo} = this.props.list
    return(

        <div>
            {!this.state.edit ? 
   
           (<div className="list-container">
              <div className="list-container2">
               <div className="theList">
                  {!this.state.text 
                  ?
               (<p id="cursor" className="pnormal" onClick={this.toggleText}>{id}. {todo} </p>
               )
               :
               <p id="cursor" className="pstrike" onClick={this.toggleText}>{id}. {todo} </p>   

                }
               </div>
               <div className="icons">
               <Icon.Edit2  id="cursor" size={20} onClick={this.toggleEdit}/>
               <Icon.Trash  id="cursor" size={20} onClick={() => this.props.deleteItem(this.props.list.id)}/>
               </div>
   
               </div>
               <br/>
           </div>
           )
           :
           (<div className="list-container">
              <div className="list-container2">
               <div className="theList">
                   
               <p id="cursor" className="pnormal" onClick={this.props.toggleText}>{id}. {todo} </p>
               <input className="editInput"onChange= {(e) => this.props.handleInput(e.target.value)}/>
               <button className="editBtn" onClick={() => this.updateItem(this.props.list.id)}>done</button>
               <button className="editBtn" onClick={this.toggleEdit}>Cancel</button>
               </div>
               
   
               </div>
               <br/>
           </div>
           )
           }
   
       </div>
       )
   }
}

   export default Lists
