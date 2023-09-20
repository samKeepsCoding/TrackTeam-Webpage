import React from 'react';
import Hero from '../Components/Hero';
import LatestVideo from '../Components/LatestVideo';
// import TrackTeamPlaylist from '../Components/TrackTeamPlaylist';
import SubscribeForm from '../Components/SubscribeForm';
import Socials from '../Components/Socials';
import ContactForm from '../Components/ContactForm';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import VideoBG from '../Components/VideoBG';

const Home = () => {
  return (
    <>

      {/* <Hero/> */}
      <VideoBG/>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
      <Socials/>
      <LatestVideo/>
      {/* <TrackTeamPlaylist/> */}
      <SubscribeForm/>
      <ContactForm/>
    </>
  )
}

export default Home