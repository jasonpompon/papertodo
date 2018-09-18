import React, { Component } from 'react';
import './reset.css';
import TodaysDate from "./components/TodaysDate";
import TodoItems from "./components/TodoItems";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      const newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter((item) => {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-logo">PaperToDo</h1>
        <TodaysDate />
        <form onSubmit={this.addItem}>
          <input
              ref={(a) => this._inputElement = a} 
              placeholder="enter task"
              />
          <button type="submit">add</button>
        </form>
        <TodoItems 
          entries={this.state.items}
          delete={this.deleteItem}
         />
      </div>
    );
  }
}

export default App;
