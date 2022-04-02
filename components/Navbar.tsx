import Image from 'next/image'
import { useRouter } from 'next/router'
import pockemon from '../public/pokeapi_256.png'
export const Navbar = () => {
  const router = useRouter()
  return (
    <div className="w-full h-20 bg-black border-b-[1px] border-b-blue-400 text-white flex p-5">
        <div className='flex items-center'>
            <Image 
              className='cursor-pointer'
              onClick={() => router.push('/')}
              src={pockemon} 
              height={60} 
              alt="PokemonApi" 
            />
        </div>
        <div className="w-full h-full flex items-center justify-end">
            <button 
              onClick={() => router.push('/favorites')}
              className='font-semibold rounded-md flex items-center p-2 border-[2px] border-blue-500'>
              <p>Favoritos</p>
            </button>
        </div>
    </div>
  )
}
