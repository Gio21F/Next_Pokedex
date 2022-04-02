import Head from 'next/head'
import React, { FC } from 'react'
import { Navbar } from '../Navbar'
import banner from '../../public/banner.png'

interface Props {
    title: string
}

const origin = ( typeof window !== 'undefined' ) ? window.location.origin : ''

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <div className='w-full bg-black'>
        <Head>
            <title> {title || 'Pockemon Api'}  </title>
            <meta name="author" content='Javier Gonzalez' />
            <meta name="description" content={`pokemon ${title} information`} />
            <meta name="keywords" content={`${title} , pokemon, pokedex`} />
            <meta property="og:title" content={`Pokemon ${title} information`} />
            <meta property="og:description" content={`Pokemon ${title}`} />
            <meta property="og:image" content={`${origin}/banner.png`} />
        </Head>

        <Navbar />

        <main className='w-full bg-black p-8'>
            {children}
        </main>
    </div>
  )
}
