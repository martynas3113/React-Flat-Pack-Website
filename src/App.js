
import './App.css';
import Header from './components/header/header';
import Headlines from './components/headlines/headlines';
import Hero from './components/hero/hero';
import Testimonials from './components/testimonials/testimonials';
  

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Headlines />
      <Testimonials />
    </div>
  );
}

export default App;
