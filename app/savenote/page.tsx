'use client' // this is a client component 👈🏽
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SaveNote() {
  const submitButton = () => {
    console.log('Save Note')
  }

  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24 bg-white'>
      <button
        className='bg-white hover:bg-gray-200 text-black py-1 px-2 rounded outline outline-gray-300 font-normal border-1 text-sm'
        onClick={submitButton}
      >
        Save Note
      </button>
    </main>
  )
}
