import styled, { keyframes } from "styled-components";

const load = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(25, 127, 140);
  border-right: 1.1em solid rgba(25, 127, 140);
  border-bottom: 1.1em solid rgba(25, 127, 140);
  border-left: 1.1em solid #1CB5C9;
  transform: translateZ(0);
  animation: ${load} 1.1s infinite linear;
  border-radius: 50%;
  width: 10em;
  height: 10em;
  align-self: center;
  &:after {
    border-radius: 50%;
    width: 10em;
    height: 10em;
  }
`;

