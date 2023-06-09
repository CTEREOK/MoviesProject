import React, { Component } from 'react';
import './First.css';

class FirstButtons extends Component {
  state = {
    count: 0
  };
  handleClickIncrise = () => {
    this.setState({ count: this.state.count + 1 })
  }
  handleClickDecrise = () => {
    this.setState({ count: this.state.count - 1 })
  }
  render() {
    return (
      <div>
        <header>
        <button className='First_button' onClick={this.handleClickIncrise}>Добавить</button>
        <span>{this.state.count}</span>
        <button className='Second_button' onClick={this.handleClickDecrise}>Убавить</button>
        </header>
      </div>
    );
  };
}