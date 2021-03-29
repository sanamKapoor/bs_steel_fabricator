import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import Meta from '../components/Meta';
import { AllProducts } from '../public/Data/products';

function products({products}) {
    return (
        <>
          <Meta title="B.S Steel Fabricator and Doors | Products" />
          <NavBar />
          <main>
            {
                products.map((product) => (
                    <Product key={product.id} imgs={product.images} points={product.points} name={product.title} id={product.id} />
                ))
            }
          </main>
          <Footer />  
        </>
    )
}

export function getStaticProps(){
  return {
    props:{
      products: AllProducts
    }
  }
}

export default products
