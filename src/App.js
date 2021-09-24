import React, {useState} from 'react'
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';

function App() {

  const [showContent, setShowContent] = useState('Home');

  return (
    <div className="App site-container">

      <Header setShowContent={setShowContent} />

      {showContent === "Home" &&
      <Home />
      }
      {showContent === "Projects" &&
      <Projects />
      }
      <Footer />
    </div>
  );
}

export default App;
