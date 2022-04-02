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
    if (error || !pokemon) return <h1> Pokemon not found </h1>
    return (
        <Layout title={ pokemon.name }>
            <div className='flex h-screen'>
                <PokemonContent pokemon={pokemon} />
            </div>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')
    const arrayNamesPokemons: string[] = data.results.map( (pokemon) => pokemon.name )
    return {
        paths: arrayNamesPokemons.map( (name) => ({ params: { name } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const name = params?.name
    try {
        const pokemon = await getPokemonInfo( name as string )
        return {
            props: {
                pokemon
            }
        }
    }
    catch(e){
        return {
            props: {
                error: true
            }
        }
    }
}

export default NamePage;
