import fb from "../../assets/png/fb.png";
import gg from "../../assets/png/gg.png";
import is from "../../assets/png/is.png";


export default function Footer() {
  // 41.963061, 23.729947
  const imgStyle = {width: '10rem'}
  return (
    <div className="footerContainer footerText">
      <div className="main">
        <h4>
          <center>Телефон за резервация</center>
          <center>+359 894 606 136</center>
        </h4>
        <h4>
          <center>Вила Орцево</center>
          <center>lat: 41° 57' 47.0196"</center>
          <center>lng: 23° 43' 47.8086"</center>
        </h4>
        <div className="grid">
          
          <div className="gridItem">
            <a href="https://maps.app.goo.gl/A4HN7FZCZNKVU8cNA" target="_blank">
              <img src={gg} style={imgStyle} />
            </a>
          </div>
          <div className="gridItem">
            <a
              href="https://www.facebook.com/profile.php?id=100052786184013"
              target="_blank"
            >
              <img src={fb} style={imgStyle} />
            </a>
          </div>
          <div className="gridItem">
            <a
              href="https://www.instagram.com/vilaortsevo/"
              target="_blank"
            >
              <img src={is} style={imgStyle} />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
//https://www.instagram.com/vilaortsevo/