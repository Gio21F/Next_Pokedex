import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout'
import { FavoriteItem } from '../../components/pokemons/FavoriteItems'
import { NoFavorites } from '../../components/pokemons/NoFavorites'
import { localFavorites } from '../../utils'

const Favorites = () => {
  const [ pokemonsFav , setPokemosFav ] = useState<number[]>()
  useEffect(() => {
    setPokemosFav(localFavorites.getFavorites())
  }, [])
  const heigth = pokemonsFav?.length! > 4 ? '' : 'h-screen'
  return (
      <Layout title='Favorites'>
          <div className={`text-white font-semibold ${heigth}`}>
            {
              pokemonsFav?.length === 0  
                ? (<NoFavorites />) 
                : (
                  <div className='grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white mt-10'>
                    {
                      pokemonsFav?.map((id, i) => (
                        <FavoriteItem key={i} id={id} />
                      ))
                    }
                  </div>
                )
            }
          </div>
      </Layout>

  )
}
export default Favorites;
