import * as React from "react";
import {Suspense, lazy} from "react";
import {Route, BrowserRouter, NavLink} from 'react-router-dom';
import {ExperimentHost} from './experiments';

import './interaction-lab.css';

const Demos = lazy(() => import('./demos'));
const Experiments = lazy(() => import('./experiments'));

export class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    
  }

  render() {
    return <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={() => <div>
            <NavLink className="link" activeClassName="link--active" to="/demos">Demos</NavLink>
            <NavLink className="link" activeClassName="link--active" to="/experiments">Experiments</NavLink>
          </div>}/>
          <Route path="/demos" component={() => <Suspense fallback="loading..."><Demos/></Suspense>}/>
          <Route path="/experiments" exact component={() => <Suspense fallback="loading..."><Experiments/></Suspense>}/>
          <ExperimentHost/>
        </React.Fragment>
    </BrowserRouter>
  }
}