import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

export class TodoList extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>

        {
          this.props.todos.map(function (todo) {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={this.props.actions.deleteTodo}
                completeTodo={this.props.actions.completeTodo}/>
            )
          }.bind(this))
        }

      </div>
    )
  }
}

export default TodoList
