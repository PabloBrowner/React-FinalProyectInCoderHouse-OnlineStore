import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import CartProvider from "./contexts/CartContext";
import Cart from "./components/Cart";


function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar CartWidget={CartWidget}/>
          <Routes>
            <Route index element={<ItemListContainer />} />
            <Route path="/categoria/:name" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route
              path="*"
              element={
                <div style={{ backgroundColor: "red" }}> ERROR 404 NOT FOUND</div>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
