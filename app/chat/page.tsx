"use client"
import {useState} from 'react'
import PlaneIcon from "@/app/generate/PlaneIcon";
interface Message {
    role: string;
    message: string;
}
export default function Home() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');

    //User submitted message
    function submit(event: any) {
        event.preventDefault();
        console.log('submit', newMessage)
        setMessages([...messages, {role: 'user', message: newMessage}]);
        setNewMessage('');
    }

    //User pressed action button
    function send(prompt) {
        const message = prompt.target.innerHTML
        // @ts-ignore
        setMessages([...Messages, {role: 'user', message: message}]);
    }

    return (
        <main className='flex flex-col bg-white mb-8 relative'>
            <div className='mb-24'>
                {messages.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={[`chat ${
                                item.role === 'user' ? 'chat-end' : 'chat-start'
                            }  p-4`, 'pt-0']}
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

            <div className='flex flex-col items-center justify-center bottom-0 w-full p-8 fixed mb-0'>
                <div className='form-control'>
                    <div className='input-group'>
                        <form onSubmit={submit}>
                            <input
                                type='text'
                                placeholder='Send a message…'
                                value={newMessage}
                                className='input input-bordered w-[90vw] text-black border-black placeholder-black'
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                        </form>
                        <PlaneIcon></PlaneIcon>
                    </div>
                </div>
            </div>
        </main>
    )

}
