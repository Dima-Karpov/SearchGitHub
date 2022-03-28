import React from "react";
import { Container, Image, Title } from "./styles";

import { Fade, Slide } from "react-awesome-reveal";
import notFounded from "../../assets/no-found.png";


export const NotFounded: React.FC = () => {
  return (
    <Container>
      <Fade duration={500}>
        <Slide direction="down" duration={500}>
          <Title>User Not Founded!</Title>
          <Image src={notFounded} alt="" />
        </Slide>
      </Fade>
    </Container>
  );
}
