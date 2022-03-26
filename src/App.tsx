import React from 'react';
import {Route, Switch} from 'react-router';
import styled from 'styled-components';
import {Dashboard} from './pages/Dashboard';
import {User} from './pages/User';
import {observer} from "mobx-react-lite";


export const App = observer(() => {
    return (
    <Container>
      <Switch>
        <Route path="/users/:username" component={User} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Container>
  );
})

const Container = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;
