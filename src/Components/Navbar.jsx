import React,{useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import logo from '../Assets/TrackTeamT.PNG'
import {AiOutlineInstagram} from 'react-icons/ai'

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos]= useState(0);

    const variants = {
        open: {opacity: 1, y: 0},
        closed: { opacity: 0, y: "-100%"},
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) {
                setNavVisible(true);
            } else {
                setNavVisible(false)
            }

            setPrevScrollPos(currentScrollPos);
            window.addEventListener('scroll', handleScroll);
        };
        return () => window.removeEventListener('scroll', handleScroll)
        }, [prevScrollPos])

  return (
    <motion.header
        className='flex flex-row justify-between items-center px-8 w-full bg-black sticky z-30 shadow-white '
        initial='open'
        animate={navVisible ? 'open' : 'closed'}
        variants={variants}
        transition={{duration: 0.2}}
    >
        <img src={logo} alt="Logo" className='max-w-[4rem]' />
        <div className='ml-auto flex justify-center items-center space-x-3'>
            <a 
                href="https://www.instagram.com/trackteamatl/?hl=en"
                
            >
                <AiOutlineInstagram     
                    size={20}
                    className='cursor-pointer hover:scale-110 ease-in-out duration-100
                    text-white'
                />
            </a>
        </div>
    </motion.header>
  )
}

export default Navbar