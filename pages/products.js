import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import { AllProducts } from '../public/Data/products';
import Meta from '../components/Meta';

function products() {
    return (
        <>
          <Meta title="B.S Steel Fabricator and Doors | Products" />
          <NavBar />
          <main>
            {
                AllProducts.map((product) => (
                    <Product key={product.id} imgs={product.images} points={product.points} name={product.title} id={product.id} />
                ))
            }
          </main>
          <Footer />  
        </>
    )
}

export default products
