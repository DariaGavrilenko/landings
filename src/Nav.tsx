import { NavLink } from "react-router-dom"
import {Outlet} from "react-router-dom";
import React from "react";


export const Nav = () =>{
    return(
        <div className="headers">
        <NavLink to={"/webovio"}>Webovio</NavLink>
        <NavLink to={"/"}>Konstruct</NavLink>
        </div>
    ) 
}


