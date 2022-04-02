import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface Props {
    id: number
}

export const FavoriteItem = ({ id }:Props) => {
    const router = useRouter()
    return (
        <div className=' w-50 cursor-pointer h-50 flex flex-col m-2 p-4 
            border-[1px] border-gray-500 rounded-md justify-center
            hover:bg-white hover:bg-opacity-20'
            onClick={() => router.push(`/pokemon/${id}`)}
        >
              <Image 
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} 
                alt="Pokemon"
                width={1}
                height={1}
                layout='responsive'
            />  
        </div>
    )
}
