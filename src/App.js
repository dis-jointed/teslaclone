
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import {Provider, useDispatch} from 'react-redux';
import {store} from './features/car/store'


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Header />
      <Home />
      </Provider>
      
    </div>
  );
}

export default App;
