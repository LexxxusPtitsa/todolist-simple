import React from "react";
import "./App.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import uuid from "react-uuid"

class App extends React.Component {
  state = {
    items: [],
    id: uuid(),
    item: '',
    editItem: false
  }
  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item
    };

    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: '',
      id: uuid(),
      editItem: false
    })
  }
  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = id =>{
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id ===id);

    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem:true
    })
  }
  render() {
    return (
      <div className="App">
        <TodoInput item={this.state.item} handleChange={this.handleChange} handleSubmit={this.handleSubmit}  editItem={this.state.editItem}/>
        <TodoList items={this.state.items} clearList={this.clearList} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />
      </div>
    );
  }
}

export default App;
