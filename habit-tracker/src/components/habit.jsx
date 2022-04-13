import React, { PureComponent } from 'react';

class Habit extends PureComponent {

  handleIncrement = () => {
    // state 오브젝트 안에 있는 count를 증가 시킨 뒤 업뎃하기
    this.props.onIncrement(this.props.habit)
  }

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit)
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit)
  };

  render() {
    console.log(this.props.habit);
    const { name, count } = this.props.habit;
    return (
    <li className="habit">    
      <span className="habit-name">{name}</span>
      <span className="habit-count">{count}</span>
      <button className="habit-btn habit-increase" onClick={this.handleIncrement}><i className="fa-solid fa-circle-plus"></i></button>
      <button className="habit-btn habit-decrease" onClick={this.handleDecrement}><i className="fa-solid fa-circle-minus"></i></button>
      <button className="habit-btn habit-delete" onClick={this.handleDelete}><i className="fa-solid fa-trash-can"></i></button>
    </li>
    );
  }
}

export default Habit;