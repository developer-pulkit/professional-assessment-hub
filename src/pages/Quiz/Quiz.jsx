import "./Quiz.css";
import data from "../../data";
import { HiArrowRight } from "react-icons/hi";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
function Quiz({ name }) {
  return (
    <div className="body">
      <div className="navbar">
        <span>KMQ</span>
        <button className="btn">
          Next <HiArrowRight className="icon" />
        </button>
      </div>
      <div className="quizBlock">
        <div className="question">
          What is this main point of the message below ?
        </div>
        <div className="options">
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
