import styled from "styled-components";

export const UlTechs = styled.ul`
  @media screen and (max-width: 540px) {
    width: 94vw;
    background-color: #212529;
    border-radius: 4px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    padding-bottom: 15px;

    li {
      width: 90vw;
      height: 48px;
      background-color: #121214;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 4px;

      margin: 10px auto 10px auto;
    }

    span {
      font-family: "Inter";
      font-size: 14px;
      font-weight: 700;
      color: #f8f9fa;
      margin-left: 15px;
    }

    p {
      font-family: "Inter";
      font-size: 12px;
      font-weight: 400;
      color: #868e96;
      margin-right: 15px;
    }

    img {
      display: none;
    }
  }

  @media screen and (min-width: 541px) {
    max-width: 95vw;
    background-color: #212529;
    border-radius: 4px;
    height: auto;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  li {
    max-width: 70vw;
    height: 48px;
    background-color: #121214;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;

    margin: 10px auto 10px auto;
  }

  span {
    width: 63vw;
    font-family: "Inter";
    font-size: 14px;
    font-weight: 700;
    color: #f8f9fa;
    margin-left: 15px;
    text-align: start;
  }

  p {
    font-family: "Inter";
    font-size: 12px;
    font-weight: 400;
    color: #868e96;
    text-align: end;
  }

  img {
    margin-right: 20px;
    margin-left: 20px;
  }
`;
