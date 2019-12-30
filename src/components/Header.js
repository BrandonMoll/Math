import React, {Component} from 'react';
import '../App.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className='headerContainer'>
                <div className='header'>
                    Maddie's Math Game!
                </div>
            </div>
        )
    }
}