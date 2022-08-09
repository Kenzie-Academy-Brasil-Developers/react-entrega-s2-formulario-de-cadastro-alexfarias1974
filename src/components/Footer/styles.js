import styled from "styled-components";

export const Footer = styled.footer`
  @media screen and (max-width: 540px) {
    display: none;
  }

  @media screen and (min-width: 541px) {
    max-width: 95vw;
    height: 160px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;

    font-family: Inter, Helvetica, Arial;
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;
  }
`;
