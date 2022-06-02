import gitHubIconSmall from "../assets/GitHub-Mark-32px.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <small>Copyright &copy; 2022 Samuel Brook. All Rights Reserved</small>
      <a href="https://github.com/SamuelBrook/">
        <img alt="github logo" src={gitHubIconSmall}></img>
      </a>
    </footer>
  );
}

export default Footer;
