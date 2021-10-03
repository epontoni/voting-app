import './App.css';
import './components/ProductList'
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <h1>Popular products</h1>
      <ProductList />
    </div>
  );
}

export default App;
