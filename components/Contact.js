
function Contact() {
    return (
        <section className="bg-primary-300 text-primary-700 pt-5 sm:pt-6 md:pt-8 lg:mt-10">
      <div className="contact-container w-full sm:w-5/6 px-1 sm:mx-auto">
        <h2 className="article-heading text-primary-700 px-1 sm:mx-0">Contact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-0 my-2 sm:my-4 md:my-6 text-sm lg:text-base">
          <div className="contact-info lg:col-span-2">
            <div className="address flex my-2">
              <i aria-hidden="true" className="fas fa-map-marker-alt my-1 mx-1 sm:mx-2 md:mx-3"></i>
              <span>B.S Steel Fabricator and Doors, Opposite Fauji Dharam Kanta <br /> Saha-Shahabad Road, Saha (133104) <br /> Ambala, Haryana, India</span>
            </div>
            <div className="contact flex my-2">
              <i aria-hidden="true" className="fas fa-phone-square-alt my-1 mx-1 sm:mx-2 md:mx-3"></i>
              <span>
                <a href="tel:+919416458586">+91 94164 58586</a>, <a href="tel:+919588121720">+91 95881 21720</a> 
              </span>
            </div>
            <div className="contact flex my-2">
              <i aria-hidden="true" className="fab fa-facebook my-1 mx-1 sm:mx-2 md:mx-3"></i>
              <span>
                <a target="_blank" href="https://www.facebook.com/bssteelfabricatoranddoors">@bssteelfabricatoranddoors</a> 
              </span>
            </div>
            <div className="email flex my-2">
              <i aria-hidden="true" className="fas fa-envelope my-1 mx-1 sm:mx-2 md:mx-3"></i>
              <span>
                {/* <a href="mailto:support@bssteelfabricator.com">support@bssteelfabricator.com</a> */}
                <a href="mailto:balwindersingh58586@gmail.com">balwindersingh58586@gmail.com</a>
              </span>
            </div>
          </div>
          <div className="location-map hidden sm:block place-self-start">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10446.905830415863!2d76.97161777889411!3d30.293053512796288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c0fb9c873613c9b!2sB.S%20Steel%20Fabricator%20and%20Doors!5e0!3m2!1sen!2sin!4v1613862856960!5m2!1sen!2sin" style={{border: 0}} allowFullScreen="" loading="lazy" className="mb-2"></iframe>
            <span className="text-xs sm:text-sm lg:text-base mx-1">View Location</span>
          </div>
        </div>
        <hr />
      <div className="flex flex-col md:flex-row items-center md:justify-between py-2 text-xs sm:text-sm">
          <small>Copyright © {new Date().getFullYear()} bssteelfabricator.com</small>
          <small>Made by Sanam Kapoor <a href="tel:+917988791606">(+91 7988791606)</a></small>
      </div>  
    </div>
    </section>

    )
}

export default Contact;
