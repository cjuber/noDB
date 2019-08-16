import React from 'react'
import './list.css'
import * as Icon from 'react-feather'
const List = (props) => {
    const {id, todo} = props.list
    return(

     <div>
         {!props.edit ? 
        <div className="list-container">
           <div className="list-container2">
            <div className="theList">
                
            <p id="cursor" className="pnormal" onClick={props.toggleText}>{id}. {todo} </p>
            </div>
            <div className="icons">
            <Icon.Edit2  id="cursor" size={20} onClick={props.toggleEdit}/>
            <Icon.Trash  id="cursor" size={20} onClick={() => props.deleteItem(props.list.id)}/>
            </div>

            </div>
            <br/>
        </div>
        :
        <div className="list-container">
           <div className="list-container2">
            <div className="theList">
                
            <p id="cursor" className="pnormal" onClick={props.toggleText}>{id}. {todo} </p>
            <input onChange= {(e) => props.handleInput(e.target.value)}/>
            <button onClick={() => props.updateItem(props.list.id)}>done</button>
            </div>
            

            </div>
            <br/>
        </div>
        }

    </div>
    )
}

export default List