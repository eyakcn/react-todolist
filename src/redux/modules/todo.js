import { createAction, handleActions } from 'redux-actions'

// ------------------------------------
// Constants
// ------------------------------------
export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'COMPLETE_TODO'

// ------------------------------------
// Actions
// ------------------------------------
export const addTodo = createAction(ADD_TODO, (text) => {
  return {
    type: ADD_TODO,
    text: text
  }
})
export const deleteTodo = createAction(DELETE_TODO, (id) => {
  return {
    type: DELETE_TODO,
    id: id
  }
})
export const completeTodo = createAction(COMPLETE_TODO, (id) => {
  return {
    type: COMPLETE_TODO,
    id: id
  }
})

export const actions = {
  addTodo,
  deleteTodo,
  completeTodo
}

var getId = (state) => state.todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1) + 1

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [ADD_TODO]: (state, { payload }) => Object.assign({}, state, {
    todos: [
      {
        id: getId(state),
        completed: false,
        text: payload.text
      },
      ...state.todos
    ]
  }),
  [DELETE_TODO]: (state, { payload }) => Object.assign({}, state, {
    todos: state.todos.filter(function (todo) {
      return todo.id !== payload.id
    })
  }),
  [COMPLETE_TODO]: (state, { payload }) => Object.assign({}, state, {
    todos: state.todos.map(function (todo) {
      return todo.id === payload.id
        ? Object.assign({}, todo, {completed: !todo.completed}) : todo
    })
  })
}, {
  todos: [],
  actions: []
})
