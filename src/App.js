import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';




function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Solano Diseño! "}/>
    </div>
    );
}

export default App;
