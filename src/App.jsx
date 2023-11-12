import Hero from "./features/home/hero/Hero.jsx";
import Map from './features/map/touristMap.jsx'
import Info from './features/info/info.jsx'
import TransportMap from './features/map/transportMap.jsx'
import Forecast from './features/forecast/Forecast.jsx'
import Region from './features/region/region.jsx'
import Gallery from "./features/gallery/gallery.jsx"
import Footer from './features/footer/footer.jsx'


function App() {
  return (
    <>
      <Hero />
      <Info />
      <Region />
      <TransportMap />
      <Forecast />
      <Map />
      <Gallery />
      <Footer />    
    </>
  );
}

export default App;
