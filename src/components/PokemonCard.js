import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  render() {
    const pokemon = this.props.pokemon
    const hp = pokemon.stats.find(stat => stat.name === "hp")
    return (
      <Card>
        <div onClick={() => this.props.handleFlipClick(this.props.pokemon.id)} >
          <div className="image">
            <img alt={pokemon.name} src={pokemon.flipped ? pokemon.sprites.back : pokemon.sprites.front}/>
          </div>
          <div className="content">
          <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp.value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

// {
//   "height": 10,
//   "weight": 130,
//   "id": 2,
//   "name": "ivysaur",
//   "abilities": [
//     "overgrow",
//     "chlorophyll"
//   ],
//   "moves": [],
//   "stats": [
//     {
//       "value": 80,
//       "name": "special-defense"
//     },
//     {
//       "value": 80,
//       "name": "special-attack"
//     },
//     {
//       "value": 63,
//       "name": "defense"
//     },
//     {
//       "value": 62,
//       "name": "attack"
//     },
//     {
//       "value": 60,
//       "name": "speed"
//     },
//     {
//       "value": 60,
//       "name": "hp"
//     }
//   ],
//   "types": [
//     "grass",
//     "poison"
//   ],
//   "sprites": {
//     "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
//     "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
//   }
// }