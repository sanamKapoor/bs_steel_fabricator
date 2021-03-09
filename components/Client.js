import Image from 'next/image';

function Client() {
    return (
    <section id="contact" className="flex flex-col justify-center items-center py-6 sm:py-8 md:py-10 lg:py-12">
      <h2 className="article-heading">Our Clients</h2>
      <div className="flex flex-col sm:flex-row sm:w-5/6 sm:justify-evenly my-5 sm:my-7 md:mt-10">
        <div className="my-4 sm:my-0 sm:mx-4 md:mx-0">
          <Image src="/img/clients/coca-cola.png" width="100" height="100" alt="" />
        </div>
        <div className="my-4 sm:my-0 sm:mx-4 md:mx-0">
          <Image src="/img/clients/super-screen.png" width="100" height="100"  alt="" />        
        </div>
        <div className="my-4 sm:my-0 sm:mx-4 md:mx-0">
          <Image src="/img/clients/man-pasand.jpg" width="120" height="80" alt="" />
        </div>
        <div className="my-4 sm:my-0 sm:mx-4 md:mx-0">
          <Image src="/img/clients/perfect-bread.jpg" width="100" height="100"  alt="" />
        </div>
      </div>
    </section>
    )
}

export default Client
