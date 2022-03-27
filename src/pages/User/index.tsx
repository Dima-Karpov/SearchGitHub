import React from 'react';
import {Container, Repositories} from './styles';
import {Header} from '../../components/Header';

import {UserInfo} from '../../components/UserInfo';
import {useAppContext} from "../../app-context";

import {filterRepositories, getStarsCountFromResponse, sortRepositories} from './utility';
import {Repository} from "../../components/Repository";

import {IRepository} from "../../interfaces";
import {observer} from "mobx-react-lite";


export const User: React.FC = observer(() => {
    const {store} = useAppContext();
    const count = getStarsCountFromResponse(store.starred.headers)

    return (
        <Container>
            <Header/>
            {store.user.user && <UserInfo user={store.user.user} startsCount={count}/>}
            {store.repositories.repositories && <Repositories>
                {store.repositories.repositories
                    .filter(filterRepositories)
                    .sort(sortRepositories)
                    .map((repository: IRepository) => (
                        <Repository key={repository.name} repository={repository}/>
                    ))}
            </Repositories> }
        </Container>
    );
})
