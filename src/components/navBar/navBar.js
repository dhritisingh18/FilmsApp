import React from 'react';
import "./navBar.css";
import NavBarButtons from '../navBarButtons/navBarButtons';

class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="nav-bar">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJFZ-lWIw9Y-_6WK52sEUI_m9TxLtqqH2HVw&usqp=CAU" alt="logo"/>
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About Us" />
            </div>
        )
    }
}
export default NavBar;