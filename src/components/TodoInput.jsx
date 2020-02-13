import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item, handleChange,handleSubmit,editItem} =this.props
        return (
            <div className="input">
                <div className="input__inner">
                    <div className="input__title">
                        <h3>Todo Input</h3>
                    </div>
                    <form className="input__form" onSubmit={handleSubmit}>
                        <input
                         type="text" 
                         className="input__area" 
                         placeholder="add a todo item"
                         value={item}
                         onChange={handleChange}
                        />
                        <button type="submit" className={
                            editItem ?  "input__button input__button--green" :"input__button input__button--blue"
                        }>{editItem ? 'Edit Item' : "Add Item"}</button>
                    </form>
                </div>
            </div>
           
        )
    }
}
