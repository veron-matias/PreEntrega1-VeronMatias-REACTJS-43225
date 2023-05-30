import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Greeting from './components/ItemListContainer/greeting';
function App() {
  return (
    <div className="App">

      <NavBar/>
      <Header/>
      <Greeting texto="Hola, bienvenidos a mi tienda Insert-Coin!"/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <Footer/>
    </div>
  );
}

export default App;
