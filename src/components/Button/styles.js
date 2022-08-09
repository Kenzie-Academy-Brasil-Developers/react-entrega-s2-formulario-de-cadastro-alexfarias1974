import styled from "styled-components";

export const Button = styled.button`
  @media screen and (max-width: 540px) {
    width: 264px;
    height: 38px;
    background-color: #ff577f;
    margin-bottom: 15px;
    margin-top: 15px;

    font-family: Inter, Helvetica, Arial;
    font-size: 13px;
    font-weight: 500;
    color: #ffffff;

    border-radius: 4px;
    border: 1px solid #ff577f;

    cursor: pointer;

    :hover {
      background-color: #ff427f;
      border: 1.2182px solid #ff427f;
    }
  }

  @media screen and (min-width: 541px) {
    width: 340px;
    height: 48px;
    background-color: #ff577f;
    margin-bottom: 15px;
    margin-top: 15px;

    font-family: Inter, Helvetica, Arial;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;

    border-radius: 4px;
    border: 1px solid #ff577f;

    cursor: pointer;

    :hover {
      background-color: #ff427f;
      border: 1.2182px solid #ff427f;
    }
  }
`;
