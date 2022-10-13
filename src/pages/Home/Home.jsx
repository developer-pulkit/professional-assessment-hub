import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <Link to="/" className="title">
        professional assessment hub
      </Link>
    </div>
  );
}

export default Home;
