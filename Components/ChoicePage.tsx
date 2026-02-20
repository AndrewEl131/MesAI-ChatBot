import React from 'react'
import Image from 'next/image'

export default function ChoicePage() {
  return (
    <main className='w-full h-screen'>
        <div className='w-100 h-100 relative'>
            <Image src={"/assets/character-anime.jpg"} fill alt='naruto' />
        </div>
    </main>
  )
}
