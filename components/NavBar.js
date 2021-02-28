import Link from 'next/link';
import Image from 'next/image'; 
import { useEffect, useState } from 'react';

function NavBar() {

    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        setOpenMenu(openMenu)
    }, [openMenu])

    return (
        <div className="w-full text-primary-700">
        <div className="flex flex-col max-w-screen-xl px-2 mx-auto md:items-center md:justify-between md:flex-row">
          <div className="p-3 sm:p-4 flex flex-row items-center justify-between">
            <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg">
              <img src="/img/logo.svg" className="w-20 sm:w-24 md:w-28 " alt="" />
            </a>
            <button className="md:hidden rounded-lg focus:outline-none focus:shadow-outline" onClick={() => setOpenMenu(!openMenu)}>
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {
                openMenu ?
                <path x-show="open" fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                : 
                <path x-show="!open" fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path>
                }
              </svg>
            </button>
          </div>
          <nav className={`${openMenu ? 'flex' : 'hidden'} md:flex flex-col flex-grow pb-4 md:pb-0 md:justify-end md:flex-row`}>
            <Link href="/"><a onClick={() => setOpenMenu(false)} className="desktop-nav-link">Home</a></Link>
            <Link href="/products"><a onClick={() => setOpenMenu(false)} className="desktop-nav-link">Products</a></Link>
            <Link href="/gallery"><a onClick={() => setOpenMenu(false)} className="desktop-nav-link">Gallery</a></Link>
            <Link href="/#about"><a onClick={() => setOpenMenu(false)} className="desktop-nav-link">About</a></Link>
            <Link href="/#contact"><a onClick={() => setOpenMenu(false)} className="desktop-nav-link">Contact</a></Link>
          </nav>
        </div>
      </div>
    )
}

export default NavBar