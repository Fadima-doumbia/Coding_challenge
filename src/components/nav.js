import React from 'react';
import { Link } from 'react-router-dom';
import '../style/nav.css'


class Nav extends React.Component{
    constructor(props){
        super(props);
        this.state={query:""}

        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

    render(){
        
        return(
            <div className = "nav">
                <div className = "left">
                    <h2>DEMO Streaming</h2>
                </div>
                <div className = "boutons">
                    <button className = "right">
                        <Link to="/login">login</Link>
                    </button>
                    <button>
                        <Link to="/login">Share your free trial</Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Nav;