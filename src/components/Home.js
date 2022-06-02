import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <main>
      <div>
        <div>Top Online Store of 2022</div>
        <div>We don't just make tents, we make art</div>
        <button>
          <Link to="/shop">Shop now</Link>
        </button>
      </div>
      <div>
        <img></img>
      </div>
    </main>
  );
}

export default Home;
