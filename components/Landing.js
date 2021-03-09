import NavBar from "./NavBar"
import Link from 'next/link';
import Image from 'next/image';

function Landing() {
    return (
        <main className="bg-primary-300">
         <NavBar />   
        <section className="w-5/6 md:w-5/6 xl:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 overflow-hidden">
            <div className="place-self-center my-4 sm:my-6 md:my-0 text-center md:text-left">
                <h1 className="xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold">Welcome to B.S Steel Fabricator and Doors</h1>
                <p className="my-1 md:my-2 xl:my-3 text-sm md:text-base">Give your house a finishing touch with our professionally designed products and services</p>
                <Link href="/gallery">
                    <a className="btn py-1.5 lg:py-2 md:mt-0">Gallery</a>
                </Link>
            </div>
            <div className="place-self-center relative top-8 sm:top-9 md:top-10 md:left-10">
                <Image src="/img/home-door.jpg" width="236" height="499" alt="" />
            </div>
        </section>
    </main>
    )
}

export default Landing
