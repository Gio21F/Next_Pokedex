import Image from 'next/image'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()
  return (
    <div className="w-full h-20 bg-black drop-shadow-3xl text-white flex p-5">
        <div className='flex items-center'>
            <Image 
              src="/pokeapi_256.png"
              className='cursor-pointer'
              onClick={() => router.push('/')}
              height={60} 
              width={180}
              alt="PokemonApi"
              layout='fixed' 
            />
        </div>
        <div className="w-full h-full flex items-center justify-end">
            <button 
              onClick={() => router.push('/favorites')}
              className='font-semibold rounded-md flex items-center p-2 border-[2px] border-blue-500'>
                <Image 
                  src="/favorite.png"
                  alt='Star'
                  layout='fixed'
                  width={25}
                  height={25}
                />
                <p>Favorites</p>

            </button>
        </div>
    </div>
  )
}
