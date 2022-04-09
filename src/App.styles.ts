import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  color: whitesmoke;
`;

export const Conteiner = styled.div`
  background-image: radial-gradient(
    circle at 83.64% 78.23%,
    #94f1ff 0,
    #76abff 25%,
    #536ef2 50%,
    #0300ad 75%,
    #003871 100%
  );
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
export const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.124);
  border-radius: 20px;
  width: 30%;
  height: 60%;
  padding: 10px;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Search = styled.div`
  display: flex;
  margin: 0.5em;
  margin-bottom: 0.8em;
  flex-direction: row;
  justify-content: center;
  width: auto;
  height: 30px;
  border-radius: 15px 15px 15px 15px;

  input {
    font-size: 20px;
    width: 75%;
    height: 100%;
    border-radius: 15px 0px 0px 15px;
  }
  button {
    font-size: 20px;
    border-radius: 0px 15px 15px 0px;
    width: 25%;
    height: 120%;
    cursor: pointer;
    background-color: transparent;
    border-color: aqua;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }
  button:hover {
    background-color: #3dc8e0;
    color: white;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 15px 15px;
`;
export const Tasks = styled.div`
  margin: 0.5em;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.904);
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 94%;
  height: 13%;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  padding-left: 5%;
  overflow: auto;
  width: 77%;
  height: 100%;
`;

export const Buttons = styled.div`
  height: 100%;
  width: 15%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Hacer = styled.button`
  height: 45%;
  width: 95%;
  background-color: rgba(157, 28, 255, 0.968);
  color: white;
`;

export const Papelera = styled.button`
  background-color: red;
  color: white;
  height: 45%;
  width: 95%;
`;
