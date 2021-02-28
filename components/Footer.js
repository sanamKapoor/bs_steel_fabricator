function Footer() {
    return (
    <footer className="w-5/6 mx-auto mt-6 md:mt-10">
        <hr />
        <div className="flex flex-col sm:flex-row items-center sm:justify-between p-1 sm:p-2">
          <small className="flex text-xl my-1 sm:my-0">
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
          <small className="text-xs md:text-sm">Copyright © {new Date().getFullYear()} bssteelfabricator.com</small>
      </div>
      </footer>
    )
}

export default Footer
