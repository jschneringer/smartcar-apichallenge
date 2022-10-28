import styled from 'styled-components/macro';



const StyledAPIExplorer = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  align-items: center;
  gap: 18px;
  background-color: white;
  #component-title {
    font-size: 36px;
    font-weight: 500;
  }
  #component-information {
    margin-top: 45px;
    width: 100%;
    background-color: #9c9ca0;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;
  }
  
  
  table {
    tr td:first-child {
      font-weight: 500;
      width: 100px;
      text-align: right;
      height: 20px;
    }
  }
  table,
  td {
    vertical-align: middle;
    padding: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 25px;
    div {
      float: left;
    }
    label {
      display: block;
    }
    input {
      display: block;
      width: 500px;
      height: 20px;
    }
  }
  button {
    width: 500px;
    height: 40px;
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
  }
  .submit-button {
    width: 500px;
    height: 40px;
  }
  .response {
    display:flex;
    justify-items: right;
    width: 450px;
    height: 400px;
    padding: 18px 25px;
    background: #f2f5fa;
    border-radius: 5px;
    border: 1px solid #c9c9c9;
    overflow-y: auto;
  }
  #reset-button {
    width: 300px;
    height: 40px;
    margin-bottom: 50px;

  }
`;

export default StyledAPIExplorer;