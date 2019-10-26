import {NavLink as RouterNavLink} from "react-router-dom";
import React from "react";

export default function NavLink(props) {
    return(
        <RouterNavLink className={props.className+" nav-link"} {...props}/>
    );
}
