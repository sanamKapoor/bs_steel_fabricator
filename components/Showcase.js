import Link from "next/link"
import Image from 'next/image';
import { useState } from "react"

function Showcase() {

    const [src, setSrc] = useState('/img/Showcase-Door.jpg');

    return (
        <section className="showcase-container" id="products">
      <div className="showcase-images xl:mx-10">
        <div className="flex flex-col sm:flex-row lg:flex-col">
          <div className="large-showcase-img">
            <Image src={src} width="600" height="450" className="rounded-md md:rounded-lg overflow-hidden shadow-lg" alt="" />
          </div>
          <div className="other-showcase-imgs">
            <div className="small-img-card cursor-pointer text-center sm:mr-8 lg:mx-0">
              <img
                src="/img/Showcase-Door.jpg" 
                className={`small-showcase-img ${src === '/img/Showcase-Door.jpg' ? 'active-showcase-img' : ''}`} 
                onClick={() => setSrc('/img/Showcase-Door.jpg')} alt="" 
                />
              <p className="text-xs mt-2">Door</p>
            </div>
            <div className="small-img-card cursor-pointer text-center sm:mr-8 lg:mx-10 mx-4 sm:mx-0 sm:my-5 lg:my-0">
              <img
                src="/img/Showcase-Window.jpg" 
                className={`small-showcase-img ${src === '/img/Showcase-Window.jpg' ? 'active-showcase-img' : ''}`}
                onClick={() => setSrc('/img/Showcase-Window.jpg')} alt="" 
              />
              <p className="text-xs mt-2">Window</p>
            </div>
            <div className="small-img-card cursor-pointer text-center sm:mr-8 lg:mx-0">
              <img
                src="/img/Showcase-Railing.jpg" 
                className={`small-showcase-img ${src === '/img/Showcase-Railing.jpg' ? 'active-showcase-img' : ''}`}
                onClick={() => setSrc('/img/Showcase-Railing.jpg')} alt="" 
              />
              <p className="text-xs mt-2">Railing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="place-self-left lg:place-self-center xl:px-4 lg:order-first">
        <h2 className="article-heading">Major Product Category</h2>
        <ul className="list-none my-1 sm:my-1.5 md:my-2 xl:my-3 leading-loose">
          <li className="showcase-content-bullet-point">
            <i aria-hidden="true" className="fas fa-clipboard-check text-secondary-600 m-1"></i>
            <span className="ml-1">All types of WPC, PVC, Membrane, Laminated and Mesh Doors with finishing</span>
          </li>
          <li className="showcase-content-bullet-point">
            <i aria-hidden="true" className="fas fa-clipboard-check text-secondary-600 m-1"></i>
            <span className="ml-1">Japanese steel door frames (Japani Chokhat) with or without windows made with the help of CNC machine</span>
          </li>
          <li className="showcase-content-bullet-point">
            <i className="fas fa-clipboard-check text-secondary-600 m-1" aria-hidden="true"></i>
            <span className="ml-1">Wooden mesh windows and japanese sheet windows in various sizes, shapes and styles</span>
          </li>
          <li className="showcase-content-bullet-point">
            <i aria-hidden="true" className="fas fa-clipboard-check text-secondary-600 m-1"></i>
            <span className="ml-1">Stainless steel railings for stairs and balcony in different designs</span>
          </li>
        </ul>
        <Link href="/products">
          <a className="btn py-1.5 lg:py-2">View More</a>        
        </Link>
      </div>
    </section>
    )
}

export default Showcase
