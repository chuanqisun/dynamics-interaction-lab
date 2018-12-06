import * as React from "react";
import {Suspense, lazy} from "react";
import {Route, NavLink} from 'react-router-dom';

import '../styles/fluent-for-dynamics.css';

export const experiments = [
  { series: 'markov-chain', baseRoute: '/experiments/markov-chain', description: 'Business process flow improvements', started: '2018-12-05', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/markov-chain/alpha.exp'))},
    { subRoute: 'bravo', component: lazy(() => import('../experiments/markov-chain/bravo.exp'))},
  ]},
];

export class Experiments extends React.Component<any, any> {
  render() {
    return <nav className="demos-nav">
      <NavLink className="link" activeClassName="link--active" exact to="/">Home</NavLink>
      <br/>
      {experiments.map(experiment => <React.Fragment key={experiment.series}>
        <span>{experiment.series}</span>
        {experiment.iterations.map(iteration => <NavLink target="_blank" key={iteration.subRoute} className="link" activeClassName="link--active" to={`${experiment.baseRoute}/${iteration.subRoute}`}>{iteration.subRoute}</NavLink>)}
        </React.Fragment>
      )}
    </nav>
  }
}

export const ExperimentHost = () => {
  return <React.Fragment>
    {experiments.map(experiment => experiment.iterations.map(iteration => <Route key={iteration.subRoute} path={`${experiment.baseRoute}/${iteration.subRoute}`} component={() => <Suspense fallback="loading..."><iteration.component/></Suspense>}></Route>))}
  </React.Fragment>
}

export default Experiments;