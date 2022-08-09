import styled from "styled-components";

export const Input = styled.input`
  @media screen and (max-width: 540px) {
    width: 266px;
    height: 38px;
    padding-left: 5px;

    background-color: #343b41;
    border-radius: 3px;
    border: 1px solid #f8f9fa;

    font-family: Inter, Helvetica, Arial;
    font-size: 13px;
    font-weight: 400;
    color: #f8f9fa;
  }

  @media screen and (min-width: 541px) {
    width: 330px;
    height: 48px;
    padding-left: 5px;

    background-color: #343b41;
    border-radius: 3px;
    border: 1px solid #f8f9fa;

    font-family: Inter, Helvetica, Arial;
    font-size: 16px;
    font-weight: 400;
    color: #f8f9fa;
  }
`;
