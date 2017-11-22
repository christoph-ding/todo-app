import React, { Component } from 'react'
import {render} from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import todoApp from './src/reducers'
import App from './src/app'

const store = createStore(reducer)
 
render(<Provider store={store}> <App /> </Provider>, document.getElementById('app'));
render(<App />, document.getElementById('app'));
