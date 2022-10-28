import styled from "styled-components/macro";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  align-items: center;
  gap: 15px;
  background-color: #faf5e7;
  .title {
    margin-top: 50px;
    margin-bottom: 25px;
    font-size: 36px;
    font-weight: 500;
  }
  textarea {
    border-radius: 5px;
    width: 500px;
    height: 500px;
  }
  button {
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 11px 23px;
    border: 1px solid #222222;
    font-size: 14px;
    font-weight: bold;
    color: white;
    background: #383c74;
    :hover {
      background: #2b819d;
    }
  }submit {
    width: 500px;
    height: 40px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    button {
      width: 100px;
      height: 40px;
    }
  }
  .instructions {
    font-size: 20px;
    font-weight: 400;
    align-text: center;
  }

  .example {
    width: 500px;
    height: 500px;
    background-color: #383c74;
    align-items: center;
    color: white;
    font-family: monospace;
    padding: 10px;
    border-radius: 8px;
    font-size: 12px;
    border: 1px solid grey;
  }
  #reset-button {
    width: 300px;
    height: 40px;    
    margin-bottom: 50px;

  }
`;

export default StyledHome;
