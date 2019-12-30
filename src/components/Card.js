import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import '../App.css';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            input: '',
            operator: ''
        }
    }

    componentDidMount() {
        this.randomNumber();
        switch(localStorage.getItem('operator')) {
            case 'Addition':
                this.setState({operator: '+'})
                break;
            case 'Multiplication':
                this.setState({operator: 'x'})
                break;
        }
    }

    inputHandler = (e) => {
        e.preventDefault();
        this.setState({[e.target.name]: e.target.value})
    }

    randomNumber = () => {
        let x = Math.round(Math.random() * 10);
        let y = Math.round(Math.random() * 10);
        this.setState({num1: x, num2: y})
    }

    validateMath = (num1, num2) => {
        let userAnswer = parseInt(this.state.input);
        let correctAnswer;
        switch(this.state.operator) {
            case '+':
                correctAnswer = num1 + num2;
                break;
            case 'x':
                correctAnswer = num1 * num2;
                break;
        }
        if(userAnswer === correctAnswer) {
            alert('Correct!')
        } else {
            alert('Incorrect!')
        }
    }

    render() {
        return (
            <div className='cardContainer'>
                <div className='card'>
                    {this.state.num1} {this.state.operator} {this.state.num2}
                </div>
                <form className='form'>
                    <input 
                        className='input' 
                        name='input'
                        value={this.state.input}
                        onChange={this.inputHandler}
                        autoComplete='off'
                        autoFocus
                        type='text'
                        inputMode='numeric'/>
                    <button onClick={() => this.validateMath(this.state.num1, this.state.num2)}>Submit</button>
                </form>
            </div>
        )
    }
}

export default withRouter(Card)