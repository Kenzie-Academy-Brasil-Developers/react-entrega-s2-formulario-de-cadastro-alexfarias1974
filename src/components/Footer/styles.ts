import styled from "styled-components";

export const Footer = styled.footer`
  @media screen and (max-width: 540px) {
    display: flex;
    flex-direction: row;
    max-width: 94vw;
    height: 60px;

    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;

    font-family: Inter, Helvetica, Arial;
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;

    h2 {
      font-weight: 600;
      font-size: 16px;
    }

    button {
      width: 32px;
      height: 32px;
      background-color: #212529;
      border-radius: 4px;
      font-size: 15px;
      font-weight: 700;
      color: #f8f9fa;
    }
  }

  @media screen and (min-width: 541px) {
    max-width: 95vw;
    height: 60px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    font-family: Inter, Helvetica, Arial;
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;

    h2 {
      font-weight: 600;
      font-size: 16px;
    }

    button {
      width: 32px;
      height: 32px;
      background-color: #212529;
      border-radius: 4px;
      font-size: 15px;
      font-weight: 700;
      color: #f8f9fa;
    }
  }
`;
