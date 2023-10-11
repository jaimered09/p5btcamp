import './App.css';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar'
import { ProductList } from './components/ProductList';
import { MainRoutes } from './router/MainRoutes'
import { UserState } from './context/UserState';


function App() {

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);


  return (
    <>
      <UserState>
        <NavBar />
        <MainRoutes />
        <Header
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <ProductList
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
        />
        <Footer />
      </UserState>
    </>
  )
}

export default App;

