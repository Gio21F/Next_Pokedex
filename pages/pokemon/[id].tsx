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
    const title = pokemon?.name || 'Pokemon not found'
    return (
        <Layout title={ title }>
            <div className='flex h-screen'>
                {
                    (error || !pokemon) ? <h1 className='p-8 font-semibold text-lg'> Pokemon not found </h1> : <PokemonContent pokemon={pokemon!} />
                }
            </div>
        </Layout>
    )
}


export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const arrayCompletePokemos = [...Array(151)].map( (_, i) => `${ i + 1 }`)
    return {
        paths: arrayCompletePokemos.map( (id) => ({ params: { id } })),
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id
    try {
        const pokemon = await getPokemonInfo( id as string )
        if (pokemon) {
            return {
                props: { pokemon },
                revalidate: 86400
            }
        }
        return { props: { error: true } }
    } catch (e) {
        return {
            props: { error: true },
            revalidate: 86400
        }
    }
}

export default PokemonPage;
