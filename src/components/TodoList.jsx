import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <div className="list">
        <h3 className="list__title">Todo List</h3>
        <ul className="list__ul">
          {items.map(item => {
            return <TodoItem key={item.id} title={item.title} handleDelete={() => handleDelete(item.id)} handleEdit={() => handleEdit(item.id)}/>;
          })}
        </ul>
        
        <button onClick = {clearList} type="button" className="list__button">
          Clear list
        </button>
      </div>
    );
  }
}
