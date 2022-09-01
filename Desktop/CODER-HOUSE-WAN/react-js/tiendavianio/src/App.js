//import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';

function App() {
  const mensaje = 'Bienvenidxs a la tienda'
  const estilos = {
    backgroundColor: 'yellow',
    padding: '25px'
  }
  return (
    <div className='container'>
      <NavBar/>
      <h1> ¡Hola clientes! </h1>
      <h3 style={ estilos }>{ mensaje}</h3>
     
    </div>
  );
}

export default App;
