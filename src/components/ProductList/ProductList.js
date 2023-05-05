import Product from "../Product/Product";
import { ProductContext } from "../../App";
import { useContext } from "react";

const ProductList = () => {


  const {storeProducts} = useContext(ProductContext);

  return (
    <>
      <div className="container text-center">
        <h1 className="text-title">our products</h1>
        <div className="row">
          {storeProducts.map(product => (<Product key={product.id} info={product}/>))}
        </div>
      </div>
    </>
  )
}

export default ProductList
