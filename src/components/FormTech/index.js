import styled from "styled-components";

export const FormTech = styled.form`
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 275px;
    margin: auto;
    align-items: center;
    background-color: #212529;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    .divHeader {
      display: flex;
      flex-direction: row;
      height: 40px;
      width: 300px;
      align-items: center;
      justify-content: space-between;
      background-color: #343b41;
    }
  }

  @media screen and (min-width: 541px) {
    display: flex;
    flex-direction: column;
    width: 370px;
    height: 342px;
    margin: auto;
    align-items: center;
    background-color: #212529;
    border-radius: 4px;
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);

    .divHeader {
      display: flex;
      flex-direction: row;
      height: 50px;
      width: 370px;
      align-items: center;
      justify-content: space-between;
      background-color: #343b41;
    }
  }
`;
