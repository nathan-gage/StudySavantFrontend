'use client' // this is a client component 👈🏽
import { useState, ChangeEvent } from 'react'

// const defaultData = [
//   {
//     role: 'user',
//     message: 'Luke Skywalker',
//   },
//   {
//     role: 'user',
//     message:
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//   },
//   {
//     role: 'assistant',
//     message: 'Loster',
//   },
//   {
//     role: 'assistant',
//     message: 'Andrew',
//   },
//   {
//     role: 'assistant',
//     message:
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//   },
//   {
//     role: 'assistant',
//     message: 'Loster',
//   },
//   {
//     role: 'assistant',
//     message: 'Loster',
//   },
//   {
//     role: 'user',
//     message: 'Luke Skywalker',
//   },
//   {
//     role: 'user',
//     message:
//       'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
//   },

//   {
//     role: 'assistant',
//     message: 'Loster',
//   },
//   {
//     role: 'assistant',
//     message: 'Loster',
//   },
// ]

const testData = [
  {
    role: 'user',
    message: 'Luke Skywalker',
  },
]

const endpoint = 'http://localhost:3000/chat-textbook'

export default function Home() {
  const [data, setData] = useState([
    {
      role: 'user',
      message: 'Luke Skywalker',
    },
  ])

  // for input
  const [inputMessage, setInputMessage] = useState('')

  // async function getData() {
  //   const res = await fetch(endpoint)
  //   // The return value is *not* serialized
  //   // You can return Date, Map, Set, etc.

  //   // Recommendation: handle errors
  //   if (!res.ok) {
  //     // This will activate the closest `error.js` Error Boundary
  //     throw new Error('Failed to fetch data')
  //   }

  //   return res.json()
  // }

  // async function postData(text: string) {
  //   setData((prev) => [...prev, { role: 'assistant', message: text }])

  //   const res = await fetch(endpoint, {
  //     body: JSON.stringify(data),
  //     // headers: {
  //     //   'Authorization': 'Basic ' + base64.encode("APIKEY:X"),
  //     //   'Content-Type': 'application/json',
  //     // },
  //     method: 'POST',
  //   })
  // }

  // function submit() {
  //   const newMessage = { role: 'assistant', message: message }
  //   setData((prev) => [...prev, newMessage])
  //   console.log('message:', newMessage)
  // }
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value)
  }

  const handleClick = (event: any) => {
    event.preventDefault()
    // 👇 "message" stores input field value

    const newMessage = { role: 'assistant', message: inputMessage }
    setData((prevState: any) => [...prevState, newMessage])
    setInputMessage('')
    console.log('message', data)
  }

  return (
    <main className='flex flex-col bg-white mb-8 relative'>
      <div className='mb-24'>
        {data &&
          data.map((item: any, index: any) => {
            return (
              <div
                key={index}
                className={`chat ${
                  item.role === 'user' ? 'chat-end' : 'chat-start'
                }  p-4`}
              >
                <div
                  className={`chat-bubble ${
                    item.role === 'assistant' ? '' : 'bg-blue-500'
                  }`}
                >
                  {item.message}
                </div>
              </div>
            )
          })}
      </div>

      <div className='flex flex-col items-center justify-center bottom-0 w-full px-2 fixed mb-0 bg-white'>
        <div className='m-2 w-[90vw]'>
          <button className='btn btn-active btn-sm btn-outline'>
            Generate Flash Cards For Chapter 2
          </button>
          <button className='btn btn-sm ml-4 btn-outline'>
            Create an Exam Review for Chapter 10
          </button>
          <button className='btn btn-sm ml-4 btn-outline'>
            Create an Notes for Chapter 10
          </button>
        </div>

        <form className='form-control'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Send a message…'
              className='input input-bordered w-[90vw]'
              onChange={onChange}
              value={inputMessage}
            />
            <button className='btn btn-square' onClick={handleClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}
