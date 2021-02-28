import Link from "next/link";
import Image from 'next/image';

function About() {
    return (
    <section id="about" className="w-5/6 md:w-4/6 lg:w-full mx-auto lg:px-12 xl:px-24 py-8 sm:py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0">
      <div className="about-img place-items-auto">
        <img src="/img/Balwinder Singh.jpg" className="h-auto w-full" alt="" />
      </div>
      <div className="about-content inline-block md:place-self-center lg:bg-primary-50 lg:border  lg:p-4 xl:p-6 lg:w-full lg:shadow-lg z-10 relative lg:mr-24 xl:mr-24">
        <h2 className="article-heading">About</h2>
        <p className="sm:my-1 lg:my-2 text-xs sm:text-sm md:text-base leading-relaxed">
          B.S Steel Fabricator and Doors was formed by Mr. Balwinder Singh in 2003 with an aim of providing quality products and services. Through years of perseverance, hard work and committed serivce, we've become market leaders in industry with 1000+ clients served.
        </p>
        <Link href="/other">
          <a className="text-xs sm:text-sm font-bold text-secondary-500 hover:text-secondary-600 underline">Other Services</a>        
        </Link>
      </div>
    </section>
    )
}

export default About
