import { useState } from "react";
import "./gallery.css";

export default function Gallery() {
  const arrOfImages = [
    "photo wide photo1",
    "photo photo14",
    "photo tall photo7",
    "photo photo4",
    "photo photo11",
    "photo wide photo5",
    "photo wide photo30",
    "photo photo31",
    "photo tall photo16",
    "photo wide photo3",
    "photo wide tall photo2",
    "photo tall photo15",
    "photo tall photo13",
    "photo photo9",
    "photo tall photo12",
    "photo photo17",
    "photo wide photo8",
    "photo wide photo18",
    "photo tall photo19",
    "photo photo20",
    "photo photo21",
    "photo tall photo23",
    "photo wide photo22",
    "photo photo25",
    "photo photo26",
    "photo photo27",
    "photo wide photo24",
    "photo wide photo28",
    "photo photo10",
  ];

  const [arrImageSize, setArrImageSize] = useState(false);

  const toggleArrImageSize = () => {
    setArrImageSize((prevState) => !prevState);
  };

  return (
    <div className="backgroundWhite">
      <section className="main">
        <h3> Галерия </h3>
        <div
          className={`gallery ${arrImageSize ? "galleryLong" : "galleryShort"}`}
        >
          {arrOfImages
            .slice(0, arrImageSize ? arrOfImages.length : 6)
            .map((img, index) => (
              <div key={index} className={img}></div>
            ))}
        </div>
        <center>
          <button
            className="contactLink showMoreImagesButton"
            onClick={toggleArrImageSize}
          >
            {arrImageSize ? "По-малко снимки" : "Повече снимки"}
          </button>
        </center>
      </section>
    </div>
  );
}
