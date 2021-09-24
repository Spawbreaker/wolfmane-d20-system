import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Welcome from 'features/Welcome';
import './App.css';
import CharacterBuild from 'features/CharacterBuild';

const App = () => {
  const location = useLocation();
  // TODO: Figure out animation, let's focus on features for now.
  return (
    <TransitionGroup component="div" className="App">
      <CSSTransition key={location.pathname} classNames="Container" timeout={500} unmountOnExit>
        <div className="Container">
          <BrowserRouter>
            <Route path="/" exact component={Welcome} />
            <Route path="/character" exact component={CharacterBuild} />
          </BrowserRouter>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
