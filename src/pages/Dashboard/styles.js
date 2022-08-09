import styled from "styled-components";

export const Dashboard = styled.section`
  @media screen and (max-width: 540px) {
    width: 95vw;
    height: 70px;
    border-bottom: 3px solid #212529;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media screen and (min-width: 541px) {
    max-width: 100%;
    height: 70px;
    border-bottom: 3px solid #212529;
    margin-top: 0;
    margin-left: auto;
    margin-right: auto;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;
