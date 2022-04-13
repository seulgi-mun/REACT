import React, { Component } from 'react';
import Habit from './habit';
import HabbitAddForm from './habbitAddForm';


class Habits extends Component {
  
  // handleIncrement = (habit) => {
  //   this.props.onIncrement(habit);
  // }

  // handleDecrement = (habit) => {
  //   this.props.onDecrement(habit);
  // };

  // handleDelete = (habit) => {
  //   this.props.onDelete(habit);
  // };

  // handleAdd = (name) => {
  //   this.props.onAdd(name);
  // }

  render() {
    return (
      <div className="habits">
        {/* <HabbitAddForm onAdd={this.handleAdd} /> */}
        <HabbitAddForm onAdd={this.props.onAdd} />
        <ul>
          {
            this.props.habits.map(habit => (
              <Habit 
              key={habit.id} 
              habit={habit} 
              // onIncrement={this.handleIncrement} 
              // onDecrement={this.handleDecrement} 
              // onDelete={this.handleDelete}
              // onAdd={this.handleAdd} 
              onIncrement={this.props.onIncrement}
              onDecrement={this.props.onDecrement}
              onDelete={this.props.onDelete}
              onAdd={this.props.onAdd}
              />
            ))
          }
        </ul>
        <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
      </div>
    );
  }
}

export default Habits;