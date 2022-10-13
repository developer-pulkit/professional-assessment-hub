import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

function Home({ name, setName, test, setTest }) {
  const navigate = useNavigate();
  const Tests = [
    {
      category: "Test 1",
      value: 1,
    },
    { category: "Test 2", value: 2 },
  ];
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (!test || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      navigate("/quiz");
    }
  };
  return (
    <>
      <div className="container">
        <Link to="/" className="title">
          professional assessment hub
        </Link>
        <img src="/quiz.svg" alt="quiz" className="banner" />

        <div className="settings">
          <span style={{ fontSize: 50 }}>Quiz Settings</span>

          <div className="settings_select">
            {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
            <TextField
              style={{ marginBottom: 25 }}
              label="Enter Your Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              select
              label="Select Test"
              value={test}
              onChange={(e) => setTest(e.target.value)}
              variant="outlined"
              style={{ marginBottom: 30 }}
            >
              {Tests.map((cat) => (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant="contained"
              collor="primary"
              size="large"
              onClick={handleSubmit}
            >
              Start Test
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
