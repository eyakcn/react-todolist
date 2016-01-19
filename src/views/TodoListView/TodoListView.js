import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { actions } from '../../redux/modules/todo'
import TodoList from './TodoList'
import TodoInput from './TodoInput'

export class TodoListView extends React.Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    return (
      <div>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
        <TodoInput addTodo={this.props.actions.addTodo}/>
      </div>
    )
  }
}

var mapStateToProps = (state) => state.todo
var mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListView)
