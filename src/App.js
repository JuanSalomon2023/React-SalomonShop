import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer saludo={`Bienvenidos`}/>
      <ItemCount initial={1} stock={5} onAdd={(cantidad)=> console.log (`Cantidad agregada`, cantidad)}/>
    </div>
  );
}

export default App;
