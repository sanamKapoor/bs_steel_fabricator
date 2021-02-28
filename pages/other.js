import Link from "next/link";
import styles from '../styles/custome.module.css';
import Meta from "../components/Meta";

function Other() {
    return (
        <>
        <Meta title="B.S Steel Fabricator and Doors | Property Consultant" keywords="real estate, property, land, saha property, land near me, property near me, real estate ambala, land property, plot, property advisor" description="Trying to buy or sell land property near Saha (Ambala) ? Now you can do it easily with our first class consultancy services." />
        <div className={styles.landing}>
        <div className="flex w-4/5 mx-auto items-center h-full">
            <div className="bg-white p-4 sm:p-6 md:p-8 shadow-xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">
                    Trying to buy or sell <br /> land property ?
                </h1>
                <p className="mt-2 text-sm md:text-base xl:text-lg">
                    Now do it easily with our first class consultancy services.
                </p>
            </div>
        </div>
    </div>

    <div className="w-4/5 mx-auto py-10 md:py-14 lg:py-16 grid grid-cols-1 sm:grid-cols-3 gap-y-5 sm:gap-y-0 md:gap-5">
        <div className="card flex flex-col justify-center items-center">
            <i aria-hidden="true" className="fas fa-map-marked-alt text-4xl mb-4"></i>
            <p className="text-md font-semibold">Ideal Location</p>
        </div>
        <div className="card flex flex-col justify-center items-center">
            <i aria-hidden="true" className="fas fa-user-friends text-4xl mb-4"></i>
            <p className="text-md font-semibold">Expert Guidance</p>
        </div>
        <div className="card flex flex-col justify-center items-center">
            <i aria-hidden="true" className="fas fa-money-bill-wave text-4xl mb-4"></i>
            <p className="text-md font-semibold">Affordable Prices</p>
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={`md:order-last bg-cover bg-center bg-no-repeat ${styles.points}`}></div>
        <div className="bg-gray-200 p-3 sm:p-6 md:p-9 lg:p-14 xl:p-20 flex flex-col justify-center">
        <p className="font-bold text-lg sm:text-xl md:text-2xl ml-1 mb-2">Why choose us</p>   
        <ul>
            <li className="flex items-start showcase-content-bullet-point">
                <i aria-hidden="true" className="fas fa-clipboard-check p-1.5"></i>
                <span>Honesty and transparency in dealing</span>
            </li>
            <li className="flex items-start showcase-content-bullet-point">
                <i aria-hidden="true" className="fas fa-clipboard-check p-1.5"></i>
                <span>Focus on customer satisfaction</span>
            </li>
            <li className="flex items-start showcase-content-bullet-point">
                <i aria-hidden="true" className="fas fa-clipboard-check p-1.5"></i>
                <span>Highly competitive pricing</span>
            </li>
            <li className="flex items-start showcase-content-bullet-point">
                <i aria-hidden="true" className="fas fa-clipboard-check p-1.5"></i>
                <span>Expert guidance on local property</span>
            </li>
        </ul>
        </div>
    </div>

    <div className={`bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center py-20 sm:py-28 md:py-36 lg:py-40 ${styles.contact}`}>
        <div className="w-5/6 md:w-4/6 mx-auto text-center">
            <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl">Get in touch</h2>
            <p className="my-2 text-sm md:text-base">
                We would love to hear from you. To reach us or get more information, contact us via phone, email or visit our <Link href="/#contact"><a className="underline">Office</a></Link>. 
            </p>
            <small className="flex text-xl justify-center">
                <a href="tel:+919416458586">
                    <i aria-hidden="true" className="cursor-pointer text-primary-600 hover:text-primary-800 fas fa-phone-square-alt"></i>
                  </a>
                  <a href="mailto:support@bssteelfabricator.com">
                    <i aria-hidden="true" className="cursor-pointer text-primary-600 hover:text-primary-800 fas fa-envelope mx-1.5 sm:mx-2"></i>
                  </a>
                  <a href="https://www.facebook.com/bssteelfabricatoranddoors" target="_blank">
                    <i aria-hidden="true" className="cursor-pointer text-primary-600 hover:text-primary-800 fab fa-facebook"></i>              
                  </a>
            </small>
        </div>
    </div>  
        
        </>
    )
}

export default Other
