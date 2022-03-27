import React, {ChangeEvent, useState} from 'react';
import {Container, FormContainer, LogoContainer} from './styles';
import {Fade, Slide} from 'react-awesome-reveal';

import {Button} from '../../components/Button';
import {Input} from '../../components/Input';

import logo from '../../assets/logod.svg';

import {observer} from "mobx-react-lite";
import {Spinner} from "../../components/Spinner";

import {useAppContext} from '../../app-context';
import {useHistory} from "react-router";

import {Header} from "../../components/Header";
import {NotFounded} from "../../components/NotFounded";


export const Dashboard: React.FC = observer(() => {
    const history = useHistory();
    const {api} = useAppContext();

    const [loading, setLoading] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string>('')

    const load = async () => {
        try {
            setLoading(true);
            await api.user.getUser(username)
            await api.repository.getRepositories(username)
            await api.starred.getStarred(username)
            history.push(`/users/${username}`);
        } catch (e: any) {
            setError(e)
        } finally {
            setLoading(false);
        }
    }

    const handleSearchTest = async (event: any) => {
        event.preventDefault()
        if (username.trim() === '') {
            return;
        }
        await load()
    };

    function handleUsernameChange(e: ChangeEvent<HTMLInputElement>) {
        const {value} = e.target;
        setUsername(value);
    }


    if (loading) {
        return <Spinner style={{alignSelf: 'center'}}/>;
    }

    if (error !== '') {
        return (
            <Container>
                <Header setError={setError}/>
                <NotFounded/>
            </Container>
        );
    }

    return (
        <Container>
            <Slide direction="down" duration={500}>
                <Fade>
                    <LogoContainer>
                        <img src={logo} alt="Github Search"/>
                    </LogoContainer>
                </Fade>
            </Slide>
            <Slide direction="up" duration={500}>
                <Fade>
                    <FormContainer onSubmit={handleSearchTest}>
                        <Input
                            type="text"
                            placeholder="Enter the user name"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        <Button>Search</Button>
                    </FormContainer>
                </Fade>
            </Slide>
        </Container>
    );
})
