import { NextPage, GetStaticPaths, GetStaticProps  } from 'next'
import React from 'react'
import { pokeApi } from '../../api'
import { Layout } from '../../components/layouts/Layout'
import { PokemonContent } from '../../components/pokemons/Pokemon'
import { PokemonListResponse } from '../../interfaces'
import { Pokemon } from '../../interfaces/pokemonFull'
import { getPokemonInfo } from '../../utils'

interface Props {
    pokemon?: Pokemon | null
    error?: boolean
}

const NamePage: NextPage<Props> = ({ pokemon, error }) => {
    const title = pokemon?.name || 'Pokemon not found'
    return (
        <Layout title={ title }>
            <div className='flex h-screen'>
                {
                    (error && !pokemon) ? <h1 className='p-8 font-semibold text-lg'> Pokemon not found </h1> : <PokemonContent pokemon={pokemon!} />
                }
            </div>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const arrayNamesPokemons: string[] = data.results.map( (pokemon) => pokemon.name )
    return {
        paths: arrayNamesPokemons.map( (name) => ({ params: { name } })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const name = params?.name
    try {
        const pokemon = await getPokemonInfo( name as string )
        if (pokemon) {
            return {
                props: { pokemon },
                revalidate: 86400
            }
        }
        return {
            props: { error: true },
            revalidate: 86400
        }
    }
    catch(e){
        return {
            props: { error: true },
            revalidate: 86400
        }
    }
}

export default NamePage;
