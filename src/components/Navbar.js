import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
      
                <ul  className='navbar'>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/" >Development</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/system" >System</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/tools" >Tools</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/data-science" >Data Science</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/blockchain" >Blockchain</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/topic" >Mobile</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/lists" >Awesome lists</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/social" >Social</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/visual" >Visual</NavLink>
                    </li>
                    <li>
                        <NavLink className="navButton" activeClassName="active" exact to="/open-source" >Mobile</NavLink>
                    </li>
                </ul>

        );
    }
}
