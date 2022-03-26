import React from 'react';
import {Container, Repositories} from './styles';
import {Header} from '../../components/Header';

import {UserInfo} from '../../components/UserInfo';
import {useAppContext} from "../../app-context";

import {filterRepositories, sortRepositories} from './utility';
import {Repository} from "../../components/Repository";

import {IRepository} from "../../interfaces";


export const User: React.FC = () => {
    const {store} = useAppContext();

    return (
        <Container>
            <Header/>
            <UserInfo user={store.user.user} startsCount={''}/>
            <Repositories>
                {store.repositories.repositories
                    .filter(filterRepositories)
                    .sort(sortRepositories)
                    .map((repository: IRepository) => (
                        <Repository key={repository.name} repository={repository}/>
                    ))}
            </Repositories>
        </Container>
    );
}
