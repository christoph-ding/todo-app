import React, { Component } from 'react'

import {Body} from './container-components/Body'
import {Header} from './container-components/Header'
import {ToDoForm} from './container-components/ToDoForm'

export class App extends React.Component {

  render() {
    return (
      <div>
        <Body />
        <Header />
        <ToDoForm />
      </div>
    )
  }
}
