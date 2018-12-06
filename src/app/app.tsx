import * as React from "react";
import {Suspense, lazy} from "react";
import {Route, BrowserRouter, NavLink} from 'react-router-dom';

import '../styles/fluent-for-dynamics.css';
import './interaction-lab.css';

const Demos = lazy(() => import('./demos'));

export const demos = [
  { type: 'style', name: 'Color', route: '/demos/color', component: lazy(() => import('../styles/color/color.demo'))},
  { type: 'style', name: 'Depth', route: '/demos/depth', component: lazy(() => import('../styles/depth/depth.demo'))},
  { type: 'style', name: 'Icon', route: '/demos/icon', component: lazy(() => import('../styles/icon/icon.demo'))},
  { type: 'style', name: 'Typography', route: '/demos/typography', component: lazy(() => import('../styles/typography/typography.demo'))},
  { type: 'component', name: 'Button', route: '/demos/button', component: lazy(() => import('../components/button/button.demo'))},
  { type: 'component', name: 'Text field', route: '/demos/text-field', component: lazy(() => import('../components/text-field/text-field.demo'))},
  { type: 'component', name: 'Toggle', route: '/demos/toggle', component: lazy(() => import('../components/toggle/toggle.demo'))},
  { type: 'component', name: 'Top nav', route: '/demos/top-nav', component: lazy(() => import('../components/top-nav/top-nav.demo'))},
];

export const experiments = [
  { series: 'markov-chain', baseRoute: '/experiments/markov-chain', description: 'Business process flow improvements', started: '2018-12-05', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/markov-chain/alpha.exp'))},
    { subRoute: 'bravo', component: lazy(() => import('../experiments/markov-chain/bravo.exp'))},
  ]},
  { series: 'nova-scotia', baseRoute: '/experiments/nova-scotia', description: 'App shell overflow studies', started: '2018-11-01', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/markov-chain/alpha.exp'))},
    { subRoute: 'bravo', component: lazy(() => import('../experiments/markov-chain/bravo.exp'))},
  ]},
];

export class App extends React.Component<any, any> {
  render() {
    return <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={() => <div>
            <h2 className="il-h2">Demos</h2>
            <h3 className='il-h3'>Styles</h3>{demos.filter(demo => demo.type==="style").map(demo => <NavLink key={demo.route} className="il-link il-link--horizontal-list" activeClassName="il-link--active" to={demo.route}>{demo.name}</NavLink>)}
            <br/>
            <h3 className='il-h3'>Components</h3>{demos.filter(demo => demo.type==="component").map(demo => <NavLink key={demo.route} className="il-link il-link--horizontal-list" activeClassName="il-link--active" to={demo.route}>{demo.name}</NavLink>)}
            <div className="il-s100"></div>
            <h2 className="il-h2">Experiments</h2>
            {experiments.map(experiment => <div title={`${experiment.started}: ${experiment.description}`} key={experiment.series}>
              <h3 className='il-h3'>{experiment.series}</h3>
              {experiment.iterations.map(iteration => <NavLink target="_blank" key={iteration.subRoute} className="il-link il-link--horizontal-list" activeClassName="il-link--active" to={`${experiment.baseRoute}/${iteration.subRoute}`}>{iteration.subRoute}</NavLink>)}
              </div>
            )}
          </div>}/>
          <Route path="/demos" component={() => <Suspense fallback="loading..."><Demos/></Suspense>}/>
          {experiments.map(experiment => experiment.iterations.map(iteration => <Route key={iteration.subRoute} path={`${experiment.baseRoute}/${iteration.subRoute}`} component={() => <Suspense fallback="loading..."><iteration.component/></Suspense>}></Route>))}
        </React.Fragment>
    </BrowserRouter>
  }
}