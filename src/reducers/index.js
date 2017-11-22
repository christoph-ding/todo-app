import {addTodo} from '../actions'

console.log(addTodo)

const initialState = {
  todos: []
}

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newState = state.slice()
      const i = action.new
    default: 
      return state
  }
}
