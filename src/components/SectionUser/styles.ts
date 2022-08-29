import styled from "styled-components";

export const SectionUser = styled.section`
  @media screen and (max-width: 540px) {
    max-width: 95vw;
    height: 131px;
    margin-left: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    border-bottom: 3px solid #212529;

    font-family: Inter, Helvetica, Arial;
    font-size: 15px;
    font-weight: 700;
    color: #f8f9fa;
  }

  @media screen and (min-width: 541px) {
    height: 120px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    border-bottom: 3px solid #212529;

    font-family: Inter, Helvetica, Arial;
    font-size: 18px;
    font-weight: 700;
    color: #f8f9fa;
  }
`;
