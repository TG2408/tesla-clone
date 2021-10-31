import React, {useEffect} from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'

function App() {
  useEffect(() => {
    alert("This is Tesla Clone, only for leaning purpose")
  },[])

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
