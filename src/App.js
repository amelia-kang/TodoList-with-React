import React from "react";
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedItems = prevState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed;
        }
        return item;
      });
      return {
        todos: updatedItems
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));

    return (
      <div className="todo-list">
        <h2>To do List</h2>
        {todoItems}
      </div>
    );
  }
}

export default App;
