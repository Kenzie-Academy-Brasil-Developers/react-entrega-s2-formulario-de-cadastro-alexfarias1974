import styled from "styled-components";

export const FormLogin = styled.form`
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 410px;
    margin: auto;
    align-items: center;
    background-color: #212529;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 541px) {
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 500px;
    margin: auto;
    align-items: center;
    background-color: #212529;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  }
`;
