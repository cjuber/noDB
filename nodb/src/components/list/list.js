import React from 'react'
import './list.css'
import * as Icon from 'react-feather'
const List = (props) => {
    const {id, todo} = props.list
    return(

        <div className="list-container">
           <div className="list-container2">
            <div className="theList">
            <p id="cursor">{id}. {todo} </p>
            </div>
            <div className="icons">
            <Icon.Check  id="cursor" size={20} onClick={() => props.updateItem(props.list.id)}/>
            <Icon.Trash  id="cursor" size={20} onClick={() => props.deleteItem(props.list.id)}/>
            </div>

            </div>
            <br/>
        </div>
    )
}

export default List