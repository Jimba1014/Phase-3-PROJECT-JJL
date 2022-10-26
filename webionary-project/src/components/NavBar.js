import React from "react";
import { NavLink } from "react-router-dom"
function NavBar(){
    return(
        <nav>
            <NavLink exact to='/'>Home</NavLink>
            <NavLink to='/new_article'>Add New Article</NavLink>
            <NavLink to='/article'>Article</NavLink>
        </nav>

    )
}

export default NavBar