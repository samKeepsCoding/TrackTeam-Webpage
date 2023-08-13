import React,{useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import logo from '../Assets/TrackTeamT.PNG'
// import { AiOutlineMenu} from 'react-icons/ai'
// import NavbarSideMenu from './NavbarSideMenu';

const Navbar = () => {
    const [navVisible, setNavVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos]= useState(0);
    // const [sideMenu, setSideMenu] = useState(false);


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

    // const handleSideMenu = () => {
    //     setSideMenu(!sideMenu)
    //     console.log(sideMenu)
    // }

  return (
    <>
        <motion.header
            className='flex flex-row justify-center items-center px-8 w-full bg-black sticky z-30 shadow-white'
            initial='open text-white'
            animate={navVisible ? 'open' : 'closed'}
            variants={variants}
            transition={{duration: 0.2}}
        >
            <img src={logo} alt="Logo" className='max-w-[4rem]' />

            {/* <ul className='hidden lg:flex justify-center space-x-24 text-white w-full font-bold italic'>
                <li>
                    <a href="/">
                        HOME
                    </a>
                </li>
                <li>
                    <a href="/about">
                        ABOUT
                    </a>
                </li>
                <li>
                    <a href="/blog">
                        BLOG
                    </a>
                </li>
                <li>
                    <a href="/contact/">
                        CONTACT
                    </a>
                </li>
                <li>
                    <a href="/products">
                        STORE
                    </a>
                </li>
            </ul> */}
            {/* <div className='ml-auto hidden lg:flex justify-center items-center space-x-3'>
                <a 
                    href="https://www.instagram.com/trackteamatl/?hl=en"
                    
                >
                    <AiOutlineInstagram     
                        size={20}
                        className='cursor-pointer hover:scale-110 ease-in-out duration-100
                        text-white'
                    />
                </a>
            </div> */}
            {/* <button
            onClick={() => handleSideMenu()} 
            className='flex lg:hidden'
            >

            <AiOutlineMenu 
                size={30} 
                color='white' 
                className='cursor-pointer'
            />
            </button> */}

        </motion.header>
        {/* {sideMenu ? (
            <NavbarSideMenu handleSideMenu={value => setSideMenu(value)}/>
        ): null} */}
    </>

  )
}

export default Navbar