import { useState } from 'react';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name, email, phone, subject, message
        }

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received')
            if (res.status === 200) {
                console.log('Response succeeded!')
                alert("Successfully submitted a message!")
                setName("")
                setEmail("")
                setPhone("")
                setSubject("")
                setMessage("")
            }
        })
    }

    return (
        <div className="min-h-[75vh] flex flex-col items-center justify-center lg:justify-evenly lg:flex-row mx-10 md:mx-20 my-24">
            <div className="text-center lg:text-left w-full max-w-lg lg:max-w-sm">
                <h1 className="text-4xl font-bold">Contact</h1>
                <p className="mt-5 text-lg mb-10 lg:mb-0">Get in touch. Up your game <br/>We're waiting, but the competition isn't.</p>
                <p className="mt-5 font-ligth hidden lg:flex mt-24">The Republic of Singapore</p>
                <p className="mt-5 font-light hidden lg:inline-block p-2 border border-white border-opacity-50 cursor-pointer hover:border-opacity-100">hello@rookbook.com.sg</p>
            </div>

            <form className="mt-0 w-full md:max-w-lg lg:max-w-xl lg:mt-0 p-7 md:p-10 bg-white text-black rounded-lg text-center">
                <div className="flex flex-col space-y-5">
                    <input value={name} type="text" placeholder="Name" className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 md:text-lg hover:border-opacity-75" onChange={(e)=>{setName(e.target.value)}} />
                    <input value={email} type="text" placeholder="Email" className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 md:text-lg hover:border-opacity-75" onChange={(e)=>{setEmail(e.target.value)}} />
                    <input value={phone} type="text" placeholder="Phone" className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 md:text-lg hover:border-opacity-75" onChange={(e)=>{setPhone(e.target.value)}} />
                    <input value={subject} type="text" placeholder="Subject" className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 md:text-lg hover:border-opacity-75" onChange={(e)=>{setSubject(e.target.value)}} />
                    <textarea value={message} rows="4" type="text" placeholder="Message" className="border-2 border-black border-opacity-25 outline-none rounded-md p-2 px-3 focus:border-opacity-100 md:text-lg hover:border-opacity-75" onChange={(e)=>{setMessage(e.target.value)}} />
                </div>
                
                <button type="submit" className="inline-block bg-black text-white mt-5 rounded-full px-7 py-2 text-xl" onClick={(e) => {handleSubmit(e)}}>Shoot.</button>
            </form>
        </div>
    )
}

export default Contact
