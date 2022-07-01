import { Link } from "react-router-dom";
import "../styles/Home.css";
import wigwams from "../assets/images/wigwams.jpg";

function Home() {
  return (
    <main>
      <div className="container">
        <div className="container-textContainer">
          <div className="container-textContainer-headline">
            Top Online Store of 2022
          </div>
          <div className="container-textContainer-statement">
            We don't just make tents, we make art
          </div>
          <button className="shop-link">
            <Link to="/shop">Shop now</Link>
          </button>
        </div>
        <div className="container-imageContainer">
          <img
            alt="wigwams under a night sky"
            src={wigwams}
            className="container-imageContainer-image"
          ></img>
        </div>
      </div>
    </main>
  );
}

export default Home;
