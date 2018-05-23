import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as testAction from './actions/testActions'
import { bindActionCreators } from 'redux'

import logo from './logo.svg'
import './App.css'

class App extends Component<TestProps, TestState> {
  constructor(props: TestProps) {
    super(props)
    this.state = {
      myState: 'Hello'
    }
    this.props.actions.XD()
    console.log(this.props)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit {this.state.myState} {this.props.myProps}{' '}
          <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(testAction, dispatch)
})
const mapStateToProps = state => ({
  test: state.test.test
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
