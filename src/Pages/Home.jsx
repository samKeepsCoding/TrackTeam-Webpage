import React from 'react';
import Hero from '../Components/Hero';
import LatestVideo from '../Components/LatestVideo';
import TrackTeamPlaylist from '../Components/TrackTeamPlaylist';
import SubscribeForm from '../Components/SubscribeForm';
import Socials from '../Components/Socials';

const Home = () => {
  return (
    <>

      <Hero/>
      <Socials/>
      <LatestVideo/>
      <TrackTeamPlaylist/>
      <SubscribeForm/>
    </>
  )
}

export default Home