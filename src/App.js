import "./App.css";
import Header from "./components/Header/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";

function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/quiz" element={<Quiz />}></Route>
          <Route path="/result" element={<Result />}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
