import React, { Component } from 'react'

export default class InputClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      state: ''
    }

  this.handleChange = this.handleChange.bind(this)

}

handleChange(e) {
  this.setState(state => ({
    input: e.target.value
  }))
}

  render() {
    return (
      <div>
        <input onChange={this.handleChange}/>
        <h3>text from input:</h3>
        <h2>{this.state.input}</h2>


      </div>
    )
  }
}

