import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super()

    this.state = {
      pokemon: [],
      search: ""
    }
  }

  addFlippedToPokemon = pokemon => {
    return pokemon.map(pokemon => ({...pokemon, flipped: false}))
  }

  handleFlipClick = id => {
    this.setState(prevState => {
      return {
        pokemon: prevState.pokemon.map(pokemon => {
          if(pokemon.id === id) {
            return {
              ...pokemon,
              flipped: !pokemon.flipped
            }
          } else {
            return pokemon
          }
        })
      }
    })
  }

  handleSearchChange = e => {
    this.setState({
      search: e.target.value
    })
  }

  filterPokemonBySearch = () => {
    return this.state.pokemon.filter(pokemon => {
      return pokemon.name.includes(this.state.search)
    })
  }

  handleSubmit = formState => {
    const newPokemon = {
      name: formState.name,
      stats: [{value: formState.hp, name: "hp"}],
      sprites: {
        front: formState.frontUrl,
        back: formState.backUrl
      }
    }
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    }

    fetch("http://localhost:3000/pokemon", configObj)
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState(prevState => {
          return {
            pokemon: [...prevState.pokemon, pokemon]
          }
        })
      })
  }

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(resp => resp.json())
      .then(pokemon => {
        this.setState({
          pokemon: this.addFlippedToPokemon(pokemon)
        })
      })
  }
  
  render() {
    const filteredPokemon = this.filterPokemonBySearch()

    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
        <br />
        <Search handleSearchChange={this.handleSearchChange} />
        <br />
        <PokemonCollection
          pokemon={filteredPokemon}
          handleFlipClick={this.handleFlipClick}  
        />
      </Container>
    )
  }
}

export default PokemonPage
