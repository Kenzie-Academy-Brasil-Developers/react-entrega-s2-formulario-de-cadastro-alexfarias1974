import styled from "styled-components";

export const GrayButton = styled.button`
  @media screen and (max-width: 540px) {
    width: 80px;
    height: 32px;
    background-color: #212529;

    font-family: Inter, Helvetica, Arial;
    font-size: 10px;
    font-weight: 600;
    color: #f8f9fa;

    border-radius: 4px;

    cursor: pointer;

    :hover {
      background-color: #343b41;
      border: 1.2182px solid #343b41;
    }
  }

  @media screen and (min-width: 541px) {
    width: 68px;
    height: 40px;
    background-color: #212529;

    font-family: Inter, Helvetica, Arial;
    font-size: 12px;
    font-weight: 600;
    color: #f8f9fa;

    border-radius: 4px;

    cursor: pointer;

    :hover {
      background-color: #343b41;
      border: 1.2182px solid #343b41;
    }
  }
`;
