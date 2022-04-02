import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { SmallPokemon } from '../../interfaces'

interface Props {
    pokemon: SmallPokemon
}

export const PokemonCard = ({ pokemon }:Props) => {
    const { id, name, image } = pokemon
    const router = useRouter()
    return (
        <div  
            className="w-50 cursor-pointer h-50 flex flex-col m-2 p-4 
            border-[1px] border-gray-500 rounded-md justify-center
            hover:bg-white hover:bg-opacity-20"
            onClick={() => router.push(`/name/${name}`)}
            >
            <div className="flex justify-center">
                <Image 
                    src={image} 
                    alt={name} 
                    width={150}
                    height={150}
                    layout='fixed'
                />
            </div>
            <div className='flex justify-between font-semibold'>
                <p className='text-md'>{name}</p>
                <p className='text-md'>#{id}</p>
            </div>
            </div>
  )
}
