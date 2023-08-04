import React from "react";
import SearchBar from "../SerachBar/SearchBar";
import { Link } from "react-router-dom";
import "./nav.css"


const Nav = ({onSearch}) => {
    return (
        <div className="botones">
            <SearchBar onSearch={onSearch}/>
            <Link to="/about"><button>About</button></Link>
            <Link to="/home"><button>Home</button></Link>
            <Link to="/favorites"><button>Favorites</button></Link>
        </div>
    )
    
}

export default Nav;