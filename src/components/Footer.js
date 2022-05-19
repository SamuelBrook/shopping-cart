import gitHubIconSmall from "../assets/GitHub-Mark-32px.png";

function Footer() {
  return (
    <footer>
      <small>Copyright &copy; 2022 Samuel Brook. All Rights Reserved</small>
      <img alt="github logo">
        <a href="https://github.com/SamuelBrook/">{gitHubIconSmall}</a>
      </img>
    </footer>
  );
}

export default Footer;
