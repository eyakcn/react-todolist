import React, { Component, PropTypes } from 'react'

export class TodoInput extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  state = {
    text: ''
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state.text)
    this.setState({
      text: ''
    })
  };

  handleChange = event => {
    this.setState({
      text: event.target.value
    })
  };

  render () {
    return (
      <div>
        <input type='text' onChange={this.handleChange} autoFocus='true'
               placeholder='Write down new TODO here' value={this.state.text}/>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    )
  }
}

export default TodoInput
