
import './App.css';
import Header from './components/header/header';
import Headlines from './components/headlines/headlines';
import Hero from './components/hero/hero';
import Testimonials from './components/testimonials/testimonials';
import Video from './components/videoSection/video';
  

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Headlines />
      <Testimonials />
      <Video />
    </div>
  );
}

export default App;
