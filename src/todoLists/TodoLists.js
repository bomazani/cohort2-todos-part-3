import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoLists extends Component {

    render(){
        return (
        <div>
            <ul className="todo-list">
                {this.props.todos.map( todo => 
                    <TodoItem 
                        key={todo.id} 
                        todo={todo} 
                        todoDestroy={this.props.todoDestroy} 
                        todoToggleClick={this.props.todoToggleClick}
                    /> 
                )}
            </ul>
        </div>
        );
    }
}

export default TodoLists;
