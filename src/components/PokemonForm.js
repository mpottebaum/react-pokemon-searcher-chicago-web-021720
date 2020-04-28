import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleHpChange = e => {
    this.setState({
      hp: e.target.value
    })
  }

  handleFrontChange = e => {
    this.setState({
      frontUrl: e.target.value
    })
  }

  handleBackChange = e => {
    this.setState({
      backUrl: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
    this.setState({
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.onSubmit}>
          <Form.Group widths="equal">
            <Form.Input onChange={this.handleNameChange} fluid label="Name" placeholder="Name" name="name" value={this.state.name}/>
            <Form.Input onChange={this.handleHpChange} fluid label="hp" placeholder="hp" name="hp" value={this.state.hp}/>
            <Form.Input onChange={this.handleFrontChange} fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.frontUrl}/>
            <Form.Input onChange={this.handleBackChange} fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
