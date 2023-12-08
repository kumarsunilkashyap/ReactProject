import './App.css';
import Header from './Header';
import Product from './Product';
function App() {
  return (
    <div className="App">
      <h1>Welcome to the React </h1>
      <Header></Header>
      {/* <Product></Product> */}
      <Product name="Levis Jeans" price="2000"/>
      <Product name="Cottan Clothes" price="200"/>
      <Product name="Kitchen" price="1254"/>
    </div>
  );
}

export default App;
