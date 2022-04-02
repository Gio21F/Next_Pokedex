import { NextPage, GetStaticPaths, GetStaticProps  } from 'next'
import React from 'react'
import { Layout } from '../../components/layouts/Layout'
import { PokemonContent } from '../../components/pokemons/Pokemon'
import { Pokemon } from '../../interfaces/pokemonFull'
import { getPokemonInfo } from '../../utils'

interface Props {
    pokemon?: Pokemon | null
    error?: boolean
}

const PokemonPage: NextPage<Props> = ({ pokemon, error }) => {
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
    const arrayCompletePokemos = [...Array(151)].map( (_, i) => `${ i + 1 }`)
    return {
        paths: arrayCompletePokemos.map( (id) => ({ params: { id } })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    return {
        props: {
            pokemon: await getPokemonInfo( id as string )
        }
    }
}

export default PokemonPage;
