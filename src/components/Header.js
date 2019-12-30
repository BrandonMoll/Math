import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import '../App.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='headerContainer'>
                {this.props.location.pathname === '/' ? 
                <div className='header'>Maddie and Gabby's Math Game!</div> :
                <Link to='/' className='menuLink'>Menu</Link>}
            </div>
        )
    }
}

export default withRouter(Header)