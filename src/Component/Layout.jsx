import React from 'react'
import './Layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Layout(props) {
    return (
        <div className="jumbotron">
         <h1>{props.newT}</h1>
         <p>{props.news}</p>
        </div>
    )
}
export default Layout;