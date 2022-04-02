import { pokeApi } from "../api"
import { Pokemon } from "../interfaces/pokemonFull"

export const getPokemonInfo = async( nameOrId: string ) => {
    try {
        const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`)
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites,
        }
    }
    catch( error ) {
        console.error( error )
        return null
    }
}