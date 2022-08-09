import styled from "styled-components";

export const P = styled.p`
  @media screen and (max-width: 540px) {
    font-family: Inter, Helvetica, Arial;
    font-size: 12px;
    font-weight: 600;
    color: red;
    margin-top: 15px;
  }

  @media screen and (min-width: 541px) {
    font-family: Inter, Helvetica, Arial;
    font-size: 14px;
    font-weight: 600;
    color: red;
    margin-top: 15px;
  }
`;
