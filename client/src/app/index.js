import React from 'react';

import "../style/app.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TweetsUpdate } from '../pages'
import { SideBar, Explore, Home } from '../components';

import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

const Page = styled.div.attrs({
})`
  display: flex;`

export default function App() {
  return (
    <Router>
      <Page className="page">
        <SideBar />
        <Switch>
          <Route path={["/", "/tweets", "tweets/list"]} exact
            component={Home} />
          <Route
            path="/tweets/update/:id"
            exact
            component={TweetsUpdate}
          />
        </Switch>
        <Explore />
      </Page>
    </Router>
  );
}

