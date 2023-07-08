import React from 'react';
import {motion} from 'framer-motion';
import {AiOutlineClose} from 'react-icons/ai'

const NavbarSideMenu = ({handleSideMenu}) => {
  return (
    <>
        <motion.div 
            className='fixed bg-gradient-to-r from-secondary to-transparent h-screen w-full z-40 top-0'
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0, transition: {duration: 0.3 } }}
            onClick={() => handleSideMenu()}
        >
            <motion.nav
                className='fixed flex flex-col space-y-7 right-0 w-[50%] h-screen z-20 bg-secodaryBg justify-center items-center text-white'
                initial={{ x:100 }}
                animate={{ x:0 }}
                transition={{ type: "spring", stiffness: 100, duration: 0.2}}
                exit={{ x: '100%', transition: { duration: 0.3 } }}
            >
                <button
                    type='button'
                    onClick={() => handleSideMenu(false)}
                    
                >
                    <AiOutlineClose  size={35} className='text-white' />
                </button>

                <ul className='space-y-8 text-center font-bold text-2xl italic flex flex-col'>
                    <a href="/">
                        <div className='sideBar-links'>
                            HOME
                        </div>
                    </a>
                    <a href="/about">
                        <div className='sideBar-links'>
                            ABOUT
                        </div>
                    </a>
                    <a href="/about">
                        <div className='sideBar-links'>
                            BLOG
                        </div>
                    </a>
                    <a href="/about">
                        <div className='sideBar-links'>
                            STORE
                        </div>
                    </a>
                </ul>
            </motion.nav>
        </motion.div>
    </>
  )
}

export default NavbarSideMenu