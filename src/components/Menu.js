import React, {Component} from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import Card from './Card'
import '../App.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOptions: ['Addition', 'Multiplication'],
            selectedOperator: ''
        }
    }

    operatorHandler = (operator) => {
        this.setState({selectedOperator: operator})
        localStorage.setItem('operator', operator)
    }

    render() {
        return (
            <div className='menuContainer'>
                {this.state.menuOptions.map(option => {
                    return (
                        <Route exact path='/' render={(props) => <Link to='/game' onClick={() => this.operatorHandler(option)} className='menuOption'>{option}</Link>} />
                    )
                })}
                <Route exact path='/game' render={(props) => <Card operator={this.state.selectedOperator} />} />
            </div>
        )
    }
}

export default withRouter(Menu)