import gitHubIconSmall from "../assets/icons/GitHub-Mark-32px.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footerContainer"> 
        <small>Copyright &copy; 2022 Samuel Brook. All Rights Reserved</small>
        <a className="footerContainer-githubIcon" href="https://github.com/SamuelBrook/">
          <img alt="github logo" src={gitHubIconSmall}></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
