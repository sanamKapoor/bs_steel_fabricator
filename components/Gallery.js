
function Gallery({ name, images }) {
    return (
        <div className="frame-and-door-gallery text-center mt-6">
              <h2 className="inline-block text-xl sm:text-2xl lg:text-3xl font-bold text-secondary-600 px-4 sm:my-2 md:my-4 lg:my-6">{name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 lg:grid-rows-4 gap-3 xl:gap-4 w-full px-4 sm:px-5 md:px-8 xl:px-20 my-5 bg-white h-full lg:h-96">
                  <div className="sm:col-span-2 lg:col-span-3 lg:row-span-4 max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96">
                    <img src={images[0]} className="h-full w-full" alt="" />
                  </div>
                  <div className="lg:col-span-2  lg:row-span-2 sm:order-2 lg:order-none max-h-60 sm:max-h-36 md:max-h-44 lg:max-h-96">
                    <img src={images[1]} className="h-full w-full" alt="" />
                  </div>
                  <div className="lg:row-span-4 max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96">
                    <img src={images[2]} className="h-full w-full" alt="" />
                  </div>
                  <div className="lg:row-span-2 lg:col-span-2 max-h-60 sm:max-h-36 md:max-h-44 lg:max-h-96">
                    <img src={images[3]} className="h-full w-full" alt="" />
                  </div>
                  <div className="sm:block lg:hidden max-h-60 sm:max-h-36 md:max-h-44 lg:max-h-96">
                    <img src={images[4]} className="h-full w-full" alt="" />
                  </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 lg:grid-rows-4 gap-3 xl:gap-4 w-full px-4 sm:px-5 md:px-8 xl:px-20 my-5 bg-white h-full lg:h-96">
                <div className="lg:row-span-4 max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96">
                  <img src={images[5]} className="h-full w-full" alt="" />
                </div>
                <div className="lg:row-span-2 lg:col-span-2 sm:order-3 lg:order-none max-h-60 sm:max-h-36 md:max-h-44 lg:max-h-96">
                  <img src={images[6]} className="h-full w-full" alt="" />
                </div>
                <div className="sm:col-span-2 lg:col-span-3 lg:row-span-4 max-h-60 sm:max-h-72 md:max-h-80 lg:max-h-96">
                  <img src={images[7]} className="h-full w-full" alt="" />
                </div>
                <div className="lg:col-span-2  lg:row-span-2 sm:order-2 lg:order-none max-h-60 sm:max-h-36 md:max-h-44 lg:max-h-96">
                  <img src={images[8]} className="h-full w-full" alt="" />
                </div>
                <div className="sm:block lg:hidden max-h-60 sm:max-h-36 md:max-h-44 lg:max-h-96">
                  <img src={images[9]} className="h-full w-full" alt="" />
                </div>
            </div>
            </div>
    )
}

export default Gallery
