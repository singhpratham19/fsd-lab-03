import { Component } from 'react'

// Class component: reads its data from props
class Header extends Component {
  render() {
    return (
      <header>
        <h1>Task Manager</h1>
        <p>
          {this.props.remaining} of {this.props.total} tasks left
        </p>
      </header>
    )
  }
}

export default Header
