import React, {createContext, useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Defualt/Default';
import {storeProducts, detailProduct} from "./data";
import Modal from './components/Modal/Modal';

export const ProductContext = createContext(null);

function App() {

  const [products, setProducts] = useState([]);
  const [productDetails, setProductDetails] = useState({})
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({});
  const [pricing, setPricing] = useState({});
  const [cartCleared, setCartCleared] = useState(false);

  useEffect(()=>{
    const tempProducts = [];
    storeProducts.forEach(obj => {
      const tempObject = {...obj, price: obj.price * 800};
      tempProducts.push(tempObject);
    });
    const pricing = {
      total: 0,
      subTotal: 0,
      tax: 0,
    }
    setPricing({...pricing});
    setProducts(tempProducts);
    setProductDetails({...detailProduct});
  },[cartCleared]);

  useEffect(()=>{
    addTotal();
  }, [cart])

  const getItem = (id) => {
    return products.find(item => item.id === id);
  }

  const handleDetails = (id) => {
    const product = getItem(id);
    setProductDetails(product);
  }

  const addToCart = (id) => {
    const tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;
    setProducts([...tempProducts]);
    setCart([...cart, product]);
  }

  const openModal = (id) =>{
    const product = getItem(id);
    setModalProduct({...product});
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  const increment = (id) => {
    const tempCart = [...cart];

    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count++;
    cartItem.total = (cartItem.price * cartItem.count);

    setCart([...tempCart]);
  }

  const decrement = (id) => {
    const tempCart = [...cart];
    const cartItem = tempCart.find((item) => item.id === id);
    cartItem.count--;
    if(cartItem.count === 0) {
      removeItem(id);
      return;
    }
    cartItem.total = (cartItem.price * cartItem.count);

    setCart([...tempCart]);
  }
  const removeItem = (id) => { 
    let tempCart = [...cart];
    const tempProducts = [...products];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempProducts.indexOf(getItem(id))
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    setCart([...tempCart]);
    setProducts([...tempProducts]);
  }

  const clearCart = () => {
    setCart([]);
    setCartCleared((state) => (!state));
  }

  const addTotal = () => {
    let subTotal = 0;
    cart.forEach((item) => {
      subTotal += item.total;
    })
    const tax = Math.round(subTotal * 0.001);
    const total = subTotal + tax;
    setPricing({total, subTotal, tax});
  }

  return (
    <ProductContext.Provider value={{storeProducts:products, detailProduct: productDetails, 
    modalProduct, cart, handleDetails, addToCart, openModal, closeModal, increment, decrement, removeItem, pricing, clearCart, addTotal}}>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/details' element={<Details />} />
          <Route path='cart' element={<Cart />}/>
          <Route path='*' element={<Default />} />
        </Routes>
        {isModalOpen? <Modal/> : <></>}
      </div>
    </ProductContext.Provider>
  );
}

export default App;
