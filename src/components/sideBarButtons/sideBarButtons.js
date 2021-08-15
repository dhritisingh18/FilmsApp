import React from 'react';
import "./sideBarButtons.css";
class SideBarButtons extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <div className="sidebarbuttons">
                {this.props.text}
            </div>
        )
    }
}

export default SideBarButtons;