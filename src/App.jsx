import Hero from "./features/home/hero/Hero.jsx";
import Map from './features/map/touristMap.jsx'
import Forecast from './features/forecast/Forecast.jsx'
import Region from './features/region/region.jsx'
import Gallery from "./features/gallery/gallery.jsx"


function App() {
  return (
    <>
      <Hero />
      <Map />
      <Forecast />
      <Region />
      <Gallery />
    </>
  );
}

export default App;
