// import logo from './logo.svg'; 
import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Footer from  './components/Footer';
import AddItem from './components/AddItem';

function App() {
  const products = [
    {
      price : 39999,
      name : "Google Pixel 7a",
      quantity : 0,
    }
    ,
    {
      price : 89999,
      name : "iPhone 14 Pro Max",
      quantity : 0,
    }
  ]

  let [productList , setProductList] = useState(products)

  let [totalAmount, setTotalAmount] = useState(0);
  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity>0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
     } else {
      newProductList[index].quantity=0;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const resetQuantity= ()=>{
    let newTotalAmount = 0;
    let newProductList = [...productList];
    for(let i=0; i< productList.length ; i++){
      newProductList[i].quantity = 0;
    }
    // newProductList.map((products)=>{
    //   products.quantity = 0;
    // })
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);  
  }

  const addItem = (productName, price) =>{
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name : productName,
      quantity : 0
    });
    setProductList(newProductList);
  }

  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <AddItem addItem = {addItem}/>
    <ProductList productList = {productList} 
    incrementQuantity = {incrementQuantity}
    decrementQuantity = {decrementQuantity}
    removeItem = {removeItem}
    />
    </main>
    <Footer totalAmount = {totalAmount} 
    resetQuantity = {resetQuantity}/>
    </>
  );
}

export default App;
