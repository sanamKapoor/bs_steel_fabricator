import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import NavBar from '../components/NavBar';
import Meta from '../components/Meta';
import { Door_Frame_and_Window } from '../public/Data/gallery';
import { Gate_and_Railing } from '../public/Data/gallery';
import { Doors } from '../public/Data/gallery';

function gallery() {
    return (
        <>
          <Meta title="B.S Steel Fabricator and Doors | Gallery" />
          <NavBar />  
            <Gallery name="Japanese Steel Door Frames and Windows" images={Door_Frame_and_Window} />
            <Gallery name="Steel Gates and Railing" images={Gate_and_Railing} />
            <Gallery name="Doors" images={Doors} />
          <Footer />
        </>
    )
}

export default gallery
