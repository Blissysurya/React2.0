import React from 'react'
import { useState } from 'react'





const Form = () => {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    let [contacts, setContacts] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Form Submitted");
        let newContacts = [...contacts, { name: name, email: email }]
        setContacts(newContacts);
        setName('');
        setEmail('');
    }

    const nameHandler = (e) =>{
        setName(e);
    }

    const emailHandler = (e) =>{
        setEmail(e);
    }

    return (
        <>
            <form

                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className=' h-32 w-screen ' >


                <input
                    value={name}
                    onChange={(e)=>{
                        nameHandler(e.target.value)
                    }}

                    className='text-[20px] font-semibold bg-white h-8 w-80 border-10 px-10 py-5 border-[#435663]
                rounded-2xl m-25 focus:outline-none'

                    required >

                </input>

                <input
                    value={email}
                    onChange={(e)=>{
                        emailHandler(e.target.value)
                    }}
                    className='text-[20px] font-semibold bg-white h-8 w-80 border-10 px-10 py-5 border-[#435663]
                rounded-2xl m-25 focus:outline-none'

                    required
                >

                </input>

                <button
                    className='bg-[#A3B087] px-7 py-3 rounded-3xl '
                >
                    Submit</button>

            </form>
        </>

    )
}



export default Form