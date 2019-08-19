import React from 'react'
import './footer.css'

const Footer = (props) =>{

    return(

        <div>
            <footer className="footer">
            <h1>Total Items To Do : {props.list.length}</h1>

            </footer>

        </div>
    )
}

export default Footer