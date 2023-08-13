import React,{useRef} from 'react';
import { BiSolidMessageDetail} from 'react-icons/bi';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.min.css';
import { toast } from 'react-toastify'



const ContactForm = () => {

    const form = useRef();

    const notify = () => {
        toast.success('Message Sent!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        })
    }

    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm("service_hmi82uj","template_7xdjs47", form.current, "7tBdQktRy6ZBAeuWC")
        .then((res) => {
            console.log(res.text)
            notify()
        }, (error) => {
            console.log(error.text)
        })

        e.target.reset()

    }
  return (
    <div className=' flex flex-col justify-center items-center p-4 text-white'>
            <h1 className='text-secondary font-extrabold text-4xl md:text-9xl max-w-3xl w-full'>OR</h1>
            <h3 className='text-2xl font-extrabold w-full max-w-3xl'>CONTACT <span className='text-secondary'>US</span> HERE</h3>
            <p className='text-lg font-bold w-full max-w-3xl uppercase'>
                <span className='text-secondary'>For</span> booking, sync licensing, PR, etc...
            </p>
            <div className='w-full max-w-3xl flex flex-col md:flex-row justify-center items-center rounded'>
                <div className='flex flex-col text-start w-full mt-3 p-3'>
                    <BiSolidMessageDetail size={160} color='white' className='cursor-pointer fill-secondary ml-auto md:ml-24'/>
                    <form ref={form} onSubmit={sendEmail} className='flex flex-col  space-y-4 text-black'>
                        <input  placeholder='FUll NAME' type='text' name='user_name' className='py-3 px-2 italic rounded'/> 
                        <input placeholder='YOUR EMAIL' type='text' name='user_email' className='py-3 px-2 italic rounded'/>
                        <textarea name="user_message" id="message" cols="30" rows="10" placeholder='WRITE YOUR MESSAGE HERE' className='italic px-2 rounded'></textarea>
                        <button className=' rounded-sm flex justify-center w-full py-3 mt-8 text-xl md:text-2xl font-extrabold text-black bg-secondary hover:border-2-black border border-secondary hover:bg-transparent ease-linear duration-200 hover:text-secondary' type='submit' >SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default ContactForm