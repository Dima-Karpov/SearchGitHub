import React from "react";
import {Container, Title, Description, Info} from "./styles";

import {Fade, Slide} from "react-awesome-reveal";
import {IRepository} from "../../interfaces";

import star from "../../assets/star.svg";
import branch from "../../assets/branch.svg";
import code from "../../assets/code.svg";

interface IRepositoryProps {
    repository: IRepository;
}

export const Repository: React.FC<IRepositoryProps> = (props) => {
    const {repository,} = props;

    return (
        <Container>
            <Slide direction="down" duration={500}>
                <Fade>
                    <div className="content">
                        <div>
                            <Title>{repository.name}</Title>
                            <Description>{repository.description}</Description>
                        </div>
                        <Info>
                            <div>
                                <img src={star} alt="Stars:"/>
                                <span>{repository.stargazers_count}</span>
                            </div>
                            <div>
                                <img src={branch} alt="Forks:"/>
                                <span>{repository.forks}</span>
                            </div>
                            <div>
                                <img src={code} alt="Language:"/>
                                <span>{repository.language}</span>
                            </div>
                        </Info>
                    </div>
                </Fade>
            </Slide>
        </Container>
    );
}
