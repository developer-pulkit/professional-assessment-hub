import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [test, setTest] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home name={name} setName={setName} test={test} setTest={setTest} />
          }
        ></Route>
        <Route path="/quiz" element={<Quiz test={test} />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
