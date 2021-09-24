import React from 'react';
import { Provider } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Route, useLocation } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Welcome from 'features/Welcome';
import CharacterBuild from 'features/CharacterBuild';
import Stats from 'features/Stats';
import store from 'store';

import './App.css';

const App = () => {
  const location = useLocation();
  // TODO: Figure out animation, let's focus on features for now.
  return (
    <Provider store={store}>
      <TransitionGroup component="div" className="App">
        <CSSTransition key={location.pathname} classNames="Container" timeout={500} unmountOnExit>
          <div className="Container">
            <BrowserRouter>
              <Route path="/" exact component={Welcome} />
              <Route path="/character" exact component={CharacterBuild} />
              <Route path="/stats" exact component={Stats} />
            </BrowserRouter>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Provider>
  );
}

export default App;
