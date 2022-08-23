import styled from "styled-components";

export const DivModal = styled.div`
  display: ${({ showModal }) => (showModal ? "flex" : "none")};
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
`;
