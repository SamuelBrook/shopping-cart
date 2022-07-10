import gitHubIconLarge from "../assets/icons/GitHub-Mark-120px-plus.png";
import instagramIcon from "../assets/icons/instagram-icon.svg";
import facebookIcon from "../assets/icons/facebook-icon.svg";
import twitterIcon from "../assets/icons/twitter-icon.svg";
import linkedinIcon from "../assets/icons/linkedin-icon.svg";
import emailIcon from "../assets/icons/email-icon.svg";
import "../styles/Contact.css";

function Contact() {
  return (
    <main className="mainContact">
      <div className="contactInfoContainer">
        <div className="contactIconsContainer">
          <a href="https://github.com/SamuelBrook/">
            <img className="contactIcon" alt="github icon" src={gitHubIconLarge}></img>
          </a>

          <a href="#">
            <img className="contactIcon" alt="instagram icon" src={instagramIcon}></img>
          </a>

          <a href="#">
            <img id="facebookIcon" className="contactIcon" alt="facebook icon" src={facebookIcon}></img>
          </a>

          <a href="#">
            <img className="contactIcon" alt="twitter icon" src={twitterIcon}></img>
          </a>

          <a href="#">
            <img className="contactIcon" alt="linkedin icon" src={linkedinIcon}></img>
          </a>

          <a href="#">
            {" "}
            <img className="contactIcon" alt="email icon" src={emailIcon}></img>
          </a>
        </div>
        <div className="contactInfo">
          <div className="contactInfo-name">MockShop</div>
          <div className="contactInfo-address">
            5 Mockland Avenue, Fakeville UK
          </div>
        </div>
      </div>
      
    </main>
  );
}

export default Contact;
