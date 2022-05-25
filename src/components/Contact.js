import gitHubIconLarge from "../assets/GitHub-Mark-120px-plus.png";
import instagramIcon from "../assets/instagram-icon.svg";
import facebookIcon from "../assets/facebook-icon.svg";
import twitterIcon from "../assets/twitter-icon.svg";
import linkedinIcon from "../assets/linkedin-icon.svg";
import emailIcon from "../assets/email-icon.svg";

function Contact() {
  return (
    <main>
      <div className="contactIconsContainer">
        <a href="https://github.com/SamuelBrook/">
          <img alt="github icon" src={gitHubIconLarge}></img>
        </a>

        <a href="#">
          <img alt="instagram icon" src={instagramIcon}></img>
        </a>

        <a href="#">
          <img alt="facebook icon" src={facebookIcon}></img>
        </a>

        <a href="#">
          <img alt="twitter icon" src={twitterIcon}></img>
        </a>

        <a href="#">
          <img alt="linkedin icon" src={linkedinIcon}></img>
        </a>

        <a href="#">
          {" "}
          <img alt="email icon" src={emailIcon}></img>
        </a>
      </div>
      <div className="contactInfo">
        <div className="contactInfo-name">MockShop</div>
        <div className="contactInfo-address">
          5 Mockland Avenue, Fakeville UK
        </div>
      </div>
    </main>
  );
}

export default Contact;
