import Image from 'next/image';

function Service() {
    return (
        <article className="flex flex-col lg:grid lg:grid-cols-2 py-6 lg:py-10 xl:py-12 sm:mx-4 lg:mx-16 xl:mx-32 lg:gap-x-6 xl:gap-x-10">
            <div className="text-center lg:text-left lg:order-last lg:place-self-center">
                <h2 className="article-heading">Our Best Services</h2>
                <p className="text-base mt-3 hidden lg:block lg:mr-7 xl:mr-12">
                  Providing an accurate, customized, on-demand quality service is our mission and vision and we have stayed true to it from the day one.
                  </p>
            </div>
            <div className="service-card-container">
                <div className="card sm:order-2">
                    <i aria-hidden="true" className="fas fa-door-closed text-5xl"></i>
                    <div className="service-text">WPC, PVC, Membrane and Mesh Doors</div>
                </div>
                <div className="card my-4 sm:my-auto lg:my-0 bg-secondary-600 text-white sm:order-1 sm:row-span-full sm:place-self-center">
                    <i aria-hidden="true" className="fas fa-door-open text-5xl"></i>
                    <div className="service-text">Japanese Steel Door Frame and Window</div>
                </div>
                <div className="card sm:order-3">
                    <img src="/img/staircase.png" className="mx-auto" />
                    <div className="service-text">Stainless Steel Railing for Stairs and Balcony</div>
                </div>
            </div>
        </article>

    )
}

export default Service
