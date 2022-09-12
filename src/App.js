import './App.css';
import Header from './Header.js';
import Home from './Home';

function App() {
  return (
    //BEM
    <div className="App">
      {/* <h1>Hello Guy/s, Green here, let's build Amazon Clone </h1> */}
      <Header />
      <Home />
    </div>
  );
}

export default App;
