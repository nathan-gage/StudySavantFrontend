import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function SaveNote() {
  return (
    <main className='flex flex-col items-center justify-between min-h-screen p-24'>
      <button className='p-4 bg-blue-500 rounded-xl hover:bg-blue-600'>
        Save Note
      </button>
    </main>
  )
}
