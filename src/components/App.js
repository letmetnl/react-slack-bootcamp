import React from 'react';
import { SignIn, Slack } from './';
import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
}
function Some() {
  return <div>Some</div>;
}

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/some" component={Some} />
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
