import { useEffect, useState } from 'react';
import axios from 'axios';
import { StyledAPIExplorer } from '../styles';


const APIExplorer = ({ config }) => {
  // bodyParams are the input values from user, APIresponse pull data
  const [bodyParams, setBodyParams] = useState({});
  const [APIResponse, setAPIResponse] = useState(null);

  // clears page
  useEffect(() => {
    setAPIResponse(null);
  }, [config]);


  const handleChange = (e) => {
    const value = e.target.value;
    setBodyParams({ ...bodyParams, [e.target.name]: value });
  };

  // Handles form submission for API Request. Uses the URL from the user's configuration option to send request
  const handleSubmit = (e) => {
   
    e.preventDefault();

    // using axios to perform CRUD requests
    if (config.method === 'GET') {
      axios(config.url)
        .then((response) => {
          setAPIResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (config.method === 'POST') {
      axios
        .post(config.url, bodyParams)
        .then((response) => {
          setAPIResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (config.method === 'PUT') {
      axios
        .put(config.url, bodyParams)
        .then((response) => {
          setAPIResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (config.method === 'PATCH') {
      axios
        .patch(config.url, bodyParams)
        .then((response) => {
          setAPIResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (config.method === 'DELETE') {
      axios
        .delete(config.url, bodyParams)
        .then((response) => {
          setAPIResponse(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setAPIResponse(
        'API Explorer only supports the following HTTP methods: GET, POST, PUT, PATCH, DELETE'
      );
    }
  };

  return (
    <StyledAPIExplorer>
      <div id="component-information">
        <div id="component-title">{config.title}</div>
        <table>
          <tbody>
            <tr>
              <td>HTTP Method</td>
              <td>{config.method}</td>
            </tr>
            <tr>
              <td>Endpoint</td>
              <td>{config.url}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {config.body && (
        <form onSubmit={handleSubmit}>
          {/* mapping through submission to pull specific attributes*/}
          {config.body.map((attribute, key) => (
            <div key={key}>
              <label htmlFor={attribute.name}>
                {attribute.required
                  ? attribute.name + ' (required)'
                  : attribute.name}
              </label>
              <input {...attribute} onChange={handleChange}></input>
            </div>
          ))}
          <button type="submit" className="submit-button">
            Send Request
          </button>
        </form>
      )}

      {!config.body && (
        <button onClick={handleSubmit} id="submit-button">
          Send Request
        </button>
      )}

      <div className="response">
        <pre>{APIResponse && JSON.stringify(APIResponse, null, 2)}</pre>
      </div>
      <a href="/smartcar-api-explorer/">
        <button className="reset-button">Reset API</button>
      </a>
    </StyledAPIExplorer>
    //Reset API
  );
};

export default APIExplorer;