import { pokeApi } from "../api"
import { Pokemon } from "../interfaces/pokemonFull"

export const getPokemonInfo = async( nameOrId: string ) => {
    try {
        const { data, status } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)
        if ( status === 200 ) {
            return {
                id: data.id,
                name: data.name,
                sprites: data.sprites,
                abilities: data.abilities
            }
        }
        return null
    }
    catch( error ) {
        // console.error( error )
        return null
    }
}