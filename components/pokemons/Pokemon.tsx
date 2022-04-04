import React, { useState } from 'react'
import Image from 'next/image'
import { Pokemon } from '../../interfaces/pokemonFull'
import { localFavorites } from '../../utils'
import confetti from 'canvas-confetti';
interface Props {
    pokemon: Pokemon
}
export const PokemonContent = ({ pokemon }:Props) => {
    const { id, name, sprites, abilities} = pokemon
    const [ isInFavorites, setIsInFavorites ] = useState(localFavorites.existFavorite(id))
    const handleClickFavorite = (id:number) => {
        localFavorites.toggleFavorite(id)
        setIsInFavorites(!isInFavorites)
        if (isInFavorites) return;
        confetti({
            zIndex: 10,
            particleCount: 100,
            angle: -100,
            spread: 160,
            origin: {
                x: 1,
                y: 0
            },

        });

    }
    return (
        <div className='flex text-white w-full items-center flex-col space-y-5 text-center'>
            <button
                onClick={() => handleClickFavorite(id)}
                className='flex items-center justify-center rounded-md
                    font-semibold p-2 border-[2px] border-blue-500 absolute top-28 right-7'
            >
                <Image
                    src={isInFavorites ? `/favorite.png` : `/NoFavorite.png`}
                    alt="Favorite"
                    width={40}
                    height={40}
                    layout='fixed'
                />
            </button>
            <div className='flex justify-center flex-col'>
                <div className='w-44 h-44'>
                    <Image
                        src={sprites?.other?.dream_world?.front_default! || sprites?.front_default}
                        alt={name}
                        width={1}
                        height={1}
                        layout='responsive'
                    />
                </div>
                <p className='text-3xl font-semibold'>{name}</p>
            </div>
            <hr
                className='bg-blue-500 border-[1px] border-blue-500 w-60'
            />
            <Sprites pokemon={pokemon} />
        </div>
    )
}

const Sprites = ({ pokemon }:Props) => {
    const { sprites, name } = pokemon
    return (
        <div className='flex flex-col items-center'>
                <p className='font-semibold text-2xl'>Sprites</p>
                <div className='flex flex-wrap'>
                    <Image
                        src={sprites?.front_default}
                        alt={name}
                        width={100}
                        height={100}
                        layout='fixed'
                    />
                    <Image
                        src={sprites?.back_default}
                        alt={name}
                        width={100}
                        height={100}
                        layout='fixed'
                    />
                    <Image
                        src={sprites?.front_shiny}
                        alt={name}
                        width={100}
                        height={100}
                        layout='fixed'
                    />
                    <Image
                        src={sprites?.back_shiny}
                        alt={name}
                        width={100}
                        height={100}
                        layout='fixed'
                    />
                </div>
            </div>
    )
}