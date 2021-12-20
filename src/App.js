import './App.css';
import Counter from './Counter';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header label="Header" />
      <Counter />
      <Footer />
    </div>
  );
}

export default App;
