import React, {useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'


function App() {
  useEffect(() => {
    alert("This is Tesla Clone, only for leaning purpose")
    return () => {}
  },[])

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
