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
        <img alt="github icon">
          <a href="https://github.com/SamuelBrook/">{gitHubIconLarge}</a>
        </img>
        <img alt="instagram icon">
          <a href="#">{instagramIcon}</a>
        </img>
        <img alt="facebook icon">
          <a href="#">{facebookIcon}</a>
        </img>
        <img alt="twitter icon">
          <a href="#">{twitterIcon}</a>
        </img>
        <img alt="linkedin icon">
          <a href="#">{linkedinIcon}</a>
        </img>
        <img alt="email icon">
          <a href="#">{emailIcon}</a>
        </img>
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
