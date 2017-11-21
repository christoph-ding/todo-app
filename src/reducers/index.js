const initialState = {
  todos: []
}

// function todoApp(state, action) {
//   if (typeof state==='undefined') {
//     return initialState
//   }

//   return state
// }

// ... is just

function todoApp(state = initialState, action) {
  return state
}
