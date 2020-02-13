import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default class TodoItem extends Component {
  render() {
    const { title,handleDelete, handleEdit} = this.props;
    return (
      <li className="item">
        <h6 className="item__title">{title}</h6>
        <div className="item__icons">
          <span className="item__icon item__icon--edit" onClick ={handleEdit}>
            <FontAwesomeIcon icon={faPen} />
          </span>
          <span className="item__icon item__icon--delete" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </span>
        </div>
      </li>
    );
  }
}
