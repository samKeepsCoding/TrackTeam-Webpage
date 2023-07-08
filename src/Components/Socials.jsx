import React from 'react';
import { AiFillInstagram, AiFillYoutube} from 'react-icons/ai';
import { TfiSoundcloud } from 'react-icons/tfi'

const Socials = () => {

    const handleSocialLink = (linkUrl) => {
        window.open(linkUrl);
    }
  return (
    <section className='bg-white text-black flex justify-center items-center py-8 w-full space-x-3'>
        <button onClick={() => handleSocialLink("https://instagram.com/trackte.am")}>
            <AiFillInstagram size={25}/>
        </button>
        <button onClick={() => handleSocialLink("https://youtube.com/@Trackte.am")}>
            <AiFillYoutube size={30}/>
        </button>
        <button onClick={() => handleSocialLink("https://soundcloud.com/trackte_am")}>
            <TfiSoundcloud size={25}/>
        </button>
    </section>
  )
}

export default Socials