import logo from './logo.svg';
import './App.css';
import LogoSection from './compontents/logo/logoSection';
import { Toaster, toast } from 'sonner'
import AboutSection from './compontents/About/AboutSection';
import Carousel from './compontents/Crousal/Crousal';
import OurService from './compontents/ourService/OurService';
import OurWork from './compontents/work/OurWork';
import Reviews from './compontents/reviews/Reviews';
import Brands from './compontents/Brands/Brands';


function App() {
  return (
    <div className="App">
      <Toaster position="top-center" />
      <LogoSection></LogoSection>
      <AboutSection></AboutSection>
      <Carousel></Carousel>
      <OurService></OurService>
      <OurWork></OurWork>
      <Reviews></Reviews>
      <Brands></Brands>
    </div>
  );
}

export default App;
