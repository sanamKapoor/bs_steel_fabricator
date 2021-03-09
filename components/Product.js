import Image from 'next/image';
import { useEffect, useState } from 'react';

function Product({ imgs, points, name, id }) {

    const [img, setImg] = useState(imgs[0])
    
    const nextImg = () => {
      for(let i = 0; i < imgs.length; i++){
        if(img === imgs[i]){
            if(i === imgs.length - 1){
                i = -1;
            }
            setImg(imgs[++i])
            return;
        }
      }
    }

    const prevImg = () => {
      for(let i = 0; i < imgs.length; i++){
        if(img === imgs[i]){
            if(i === 0){
                i = imgs.length;
            }
            setImg(imgs[--i])
            return;
        }
      }
    }

    useEffect(() => {
        setImg(img)
    }, [img])

    return (
        <section className="showcase-container gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-0">
        <div className={`showcase-images xl:mx-10 ${id % 2 === 0 ? 'lg:order-last' : ''}`}>
          <div className="flex flex-col">
            <div className="large-showcase-img order-first" id="door-img">
              <Image src={img} width="700" height="500" className="rounded-md md:rounded-lg overflow-hidden shadow-lg" alt="" />
            </div>
            <div className="controlers mt-2 md:mt-3 text-center text-secondary-500 text-xl sm:text-2xl">
                <i aria-hidden="true" className="cursor-pointer far fa-arrow-alt-circle-left md:fa-2x hover:text-secondary-600" onClick={prevImg}></i>
                <i aria-hidden="true" className="cursor-pointer far fa-arrow-alt-circle-right md:fa-2x mx-1 hover:text-secondary-600" onClick={nextImg}></i>
            </div>
          </div>
        </div>
  
        <div className="flex flex-column items-center xl:px-4">
          <div>
          <h2 className="article-heading">{name}</h2>
          <ul className="list-none my-1 sm:my-1.5 md:my-2 xl:my-3 leading-loose">
                {
                    points.map((point, index) => (
                        <li key={index} className="showcase-content-bullet-point">
                            <i className="fas fa-clipboard-check text-secondary-600 m-1"></i>
                            <span className="ml-1">{point}</span>
                        </li>
                    ))
                }
          </ul>
          </div>
        </div>
      </section>
    )
}

export default Product
