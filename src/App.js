import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {

  const onAdd= (amount) => {
    console.log(amount);
  }
  return (
    <>
    
      <NavBar CartWidget={CartWidget}/>
    
      <ItemListContainer greeting={"Este es el catalogo de lamparas"}/>
    </>
  );
}

export default App;
