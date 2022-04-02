import type { NextPage, GetStaticProps } from 'next'
import { pokeApi } from '../api'
import { Layout } from '../components/layouts/Layout'
import { PokemonCard } from '../components/pokemons/PokemonCard'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons:SmallPokemon[]
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
    return (
      <Layout title='Pockemon Api'>
        <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white mt-10'>
          {
            pokemons.map((pokemon:SmallPokemon, i) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          }
        </div>
      </Layout>
    )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
  const pokemons:SmallPokemon[] = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i+1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i+1}.svg`
  }))
  
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
