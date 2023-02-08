import { NavLink } from "react-router-dom"
import {Outlet} from "react-router-dom";
import React from "react";


export const Nav = () =>{
    return(
        <div className="headers">
        <NavLink to={"/webovio"} className="link">Webovio</NavLink>
        <NavLink to={"/"} className="link">Konstruct</NavLink>
        </div>
    ) 
}


