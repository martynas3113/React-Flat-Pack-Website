
import './App.css';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Headlines from './components/headlines/headlines';
import Hero from './components/hero/hero';
import JoinUs from './components/join-us/joinus';
import Logos from './components/logos/logos';
import Reviews from './components/reviews/reviews';
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
      <JoinUs />
      <Logos />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
