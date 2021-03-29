import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import NavBar from '../components/NavBar';
import Meta from '../components/Meta';
import { Door_Frame_and_Window } from '../public/Data/gallery';
import { Gate_and_Railing } from '../public/Data/gallery';
import { Doors } from '../public/Data/gallery';

function gallery({ data }) {
    return (
        <>
          <Meta title="B.S Steel Fabricator and Doors | Gallery" />
          <NavBar />  
            <Gallery name="Japanese Steel Door Frames and Windows" images={data.Door_Frame_and_Window} />
            <Gallery name="Steel Gates and Railing" images={data.Gate_and_Railing} />
            <Gallery name="Doors" images={data.Doors} />
          <Footer />
        </>
    )
}

export function getStaticProps(){
  return {
    props: {
      data: { Door_Frame_and_Window, Gate_and_Railing, Doors }
    }
  }
}

export default gallery
