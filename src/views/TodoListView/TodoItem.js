import React, { PropTypes } from 'react'

export class TodoItem extends React.Component {
  static propTypes = {
    completeTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
  };

  handleCompleted = () => {
    this.props.completeTodo(this.props.todo.id)
  };

  handleDelete = () => {
    this.props.deleteTodo(this.props.todo.id)
  };

  render () {
    var textStyle = this.renderTextStyle()
    return (
      <ul>
        <li>
          <div style={textStyle}>
            {this.props.todo.text}
          </div>
          <button onClick={this.handleCompleted}>toggle completed</button>
          <button onClick={this.handleDelete}>delete</button>
        </li>
      </ul>
    )
  }

  renderTextStyle = () => {
    return {
      color: this.props.todo.completed ? 'lightgrey' : 'black',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  };

}

export default TodoItem
