import { useState } from "react";
import { useDispatch } from "react-redux";
import { addConfig } from "../store/config";
import { StyledHome } from "../styles";

const Home = () => {
  const dispatch = useDispatch();

  // stores user input
  const [configOptions, setConfigOptions] = useState(null);

  // pulls value yea
  const handleChange = (e) => {
    setConfigOptions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addConfig(JSON.parse(configOptions.replace(/(\r\n|\n|\r)/gm, "")))
    );
  }

  // Example of configOptions for user to see and mimic
  let example = {
    configOptions: [
      {
        title: "Get users",
        url: "https://jsonplaceholder.typicode.com/users/1",
        method: "GET",
      },
      {
        title: "Create new user",
        url: "https://jsonplaceholder.typicode.com/users",
        method: "POST",
        body: [
          {
            name: "Email",
            type: "email",
            max: 24,
            min: 3,
          },
          {
            name: "Full-Name",
            type: "text",
            placeholder: "John Doe",
            required: true,
          },
          {
            name: "Phone",
            type: "tel",
          },
        ],
      },
    ],
  };
  // Allows for the example to display nicely on webpage
  let HomeExample = JSON.stringify(example, null, 2);

  return (
    <StyledHome>
      <div className="title">Smartcar API Challenge</div>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Place API Configuration here"
          rows="10"
          cols="80"
          onChange={handleChange}
          required={true}
        ></textarea>
        <br></br>
        <button id="submit">Execute</button>
      </form>
      <div className="instructions">
        Use this button to copy API configuration to the text block above.
      </div>

      <div className="example">
        <pre>{HomeExample}</pre>
      </div>
      <a href="/smartcar-api-explorer/">
        <button id="reset-button">Reset</button>
      </a>
    </StyledHome>
  );
};

export default Home;
