import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
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
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
