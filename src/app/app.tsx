import * as React from "react";
import { lazy, Suspense } from "react";
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import '../styles/fluent-for-dynamics.css';
import './interaction-lab.css';

const DemoBrowser = lazy(() => import('./demo-browser'));

/* please sort by name A-Z, but group by type first */
export const demos = [
  { type: 'style', name: 'Color', route: '/style/color', component: lazy(() => import('../styles/color/color.demo')) as any}, /* use this cast fixes a typescript compiler issue */
  { type: 'style', name: 'Depth', route: '/style/depth', component: lazy(() => import('../styles/depth/depth.demo'))},
  { type: 'style', name: 'Icon', route: '/style/icon', component: lazy(() => import('../styles/icon/icon.demo'))},
  { type: 'style', name: 'Spacing', route: '/style/spacing', component: lazy(() => import('../styles/spacing/spacing.demo'))},
  { type: 'style', name: 'Typography', route: '/style/typography', component: lazy(() => import('../styles/typography/typography.demo'))},
  { type: 'component', name: 'App shell', route: '/component/app-shell', component: lazy(() => import('../components/app-shell/app-shell.demo'))},
  { type: 'component', name: 'Button', route: '/component/button', component: lazy(() => import('../components/button/button.demo'))},
  { type: 'component', name: 'Form header', route: '/component/form-header', component: lazy(() => import('../components/form-header/form-header.demo'))},
  { type: 'component', name: 'Form tabs', route: '/component/form-tabs', component: lazy(() => import('../components/form-tabs/form-tabs.demo'))},
  { type: 'component', name: 'Side nav', route: '/component/side-nav', component: lazy(() => import('../components/side-nav/side-nav.demo'))},
  { type: 'component', name: 'Text field', route: '/component/text-field', component: lazy(() => import('../components/text-field/text-field.demo'))},
  { type: 'component', name: 'Toggle', route: '/component/toggle', component: lazy(() => import('../components/toggle/toggle.demo'))},
];

interface Experiment {
  series: string;
  baseRoute: string;
  description: string;
  started: string;
  iterations: Iteration[];
}

interface Iteration {
  subRoute: string;
  component: React.LazyExoticComponent<any>;
  notes?: string;
}

/* Please keep new experiements on top */
export const experiments: Experiment[] = [
  { series: 'babel-ascend', baseRoute: '/experiments/babel-ascend', description: 'PowerApps Control Framework design language', started: '2019-01-04', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/babel-ascend/alpha.exp'))},
  ]},
  { series: 'event-horizon', baseRoute: '/experiments/event-horizon', description: 'Business process flow horizontal', started: '2019-01-04', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/event-horizon/alpha.exp'))},
    { subRoute: 'bravo', component: lazy(() => import('../experiments/event-horizon/bravo.exp')), notes: 'baseline'},
    { subRoute: 'charlie', component: lazy(() => import('../experiments/event-horizon/charlie.exp'))},
    { subRoute: 'delta', component: lazy(() => import('../experiments/event-horizon/delta.exp')), notes: 'visual polish'},
    { subRoute: 'echo', component: lazy(() => import('../experiments/event-horizon/echo.exp')), notes: 'color scheme change'},
    { subRoute: 'foxtrot', component: lazy(() => import('../experiments/event-horizon/foxtrot.exp')), notes: 'record-at-stage invert color'},
  ]},
  { series: 'fast-fourier', baseRoute: '/experiments/fast-fourier', description: 'Business process flow vertical', started: '2018-12-19', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/fast-fourier/alpha.exp'))},
    { subRoute: 'bravo', component: lazy(() => import('../experiments/fast-fourier/bravo.exp'))},
    { subRoute: 'charlie', component: lazy(() => import('../experiments/fast-fourier/charlie.exp'))},
    { subRoute: 'delta', component: lazy(() => import('../experiments/fast-fourier/delta.exp')), notes: 'square card'},
    { subRoute: 'echo', component: lazy(() => import('../experiments/fast-fourier/echo.exp'))},
    { subRoute: 'foxtrot', component: lazy(() => import('../experiments/fast-fourier/foxtrot.exp'))},
    { subRoute: 'golf', component: lazy(() => import('../experiments/fast-fourier/golf.exp')), notes: 'floating header'},
    { subRoute: 'hotel', component: lazy(() => import('../experiments/fast-fourier/hotel.exp')), notes: 'transcluded stage content'},
    { subRoute: 'india', component: lazy(() => import('../experiments/fast-fourier/india.exp')), notes: 'visual polish'},
  ]},
  { series: 'markov-chain', baseRoute: '/experiments/markov-chain', description: 'Business process flow integration', started: '2018-12-05', iterations: [
    { subRoute: 'alpha', component: lazy(() => import('../experiments/markov-chain/alpha.exp'))},
    { subRoute: 'bravo', component: lazy(() => import('../experiments/markov-chain/bravo.exp'))},
    { subRoute: 'charlie', component: lazy(() => import('../experiments/markov-chain/charlie.exp')), notes: 'vertical'},
    { subRoute: 'delta', component: lazy(() => import('../experiments/markov-chain/delta.exp')), notes: 'horizontal'},
    { subRoute: 'echo', component: lazy(() => import('../experiments/markov-chain/echo.exp')), notes: 'real form fields'},
    { subRoute: 'foxtrot', component: lazy(() => import('../experiments/markov-chain/foxtrot.exp')), notes: 'horizontal v1'},
    { subRoute: 'golf', component: lazy(() => import('../experiments/markov-chain/golf.exp')), notes: 'hybrid tabs'},
    { subRoute: 'hotel', component: lazy(() => import('../experiments/markov-chain/hotel.exp')), notes: 'vertical v1'},
    { subRoute: 'india', component: lazy(() => import('../experiments/markov-chain/india.exp')), notes: 'horizontal v2'},
    { subRoute: 'juliet', component: lazy(() => import('../experiments/markov-chain/juliet.exp')), notes: 'responsive studies'},
    { subRoute: 'kilo', component: lazy(() => import('../experiments/markov-chain/kilo.exp')), notes: 'green color scheme'},
  ]},
];

export class App extends React.Component<any, any> {
  render() {
    return <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={() => <main>
            <h1 className="lab-h1">Dynamics 365 Interaction Lab</h1>
            <div className="lab-s50"></div>
            <h2 className="lab-h2">Stablizing</h2>
            <div className="lab-s50"></div>
            <section className="lab-index-section">
              <h3 className='lab-h3 lab-nowrap'>Styles</h3><wbr/>{demos.filter(demo => demo.type==="style").map(demo => <NavLink key={demo.route} className="lab-link lab-link--horizontal-list" activeClassName="lab-link--active" to={demo.route}>{demo.name}<wbr/></NavLink>)}
              <br/>
              <h3 className='lab-h3 lab-nowrap'>Components</h3><wbr/>{demos.filter(demo => demo.type==="component").map(demo => <NavLink key={demo.route} className="lab-link lab-link--horizontal-list" activeClassName="lab-link--active" to={demo.route}>{demo.name}<wbr/></NavLink>)}
              <div className="lab-s100"></div>
            </section>
            <h2 className="lab-h2">Experimental</h2>
            <div className="lab-s50"></div>
            <section className="lab-index-section">
            {experiments.map(experiment => <div title={`${experiment.started}: ${experiment.description}`} key={experiment.series}>
              <h3 className='lab-h3 lab-nowrap'>{experiment.series}</h3><wbr/>
              {experiment.iterations.map(iteration => <NavLink
                target="_blank"
                title={iteration.notes}
                key={iteration.subRoute}
                className="lab-link lab-link--horizontal-list"
                activeClassName="lab-link--active" to={`${experiment.baseRoute}/${iteration.subRoute}`}>{iteration.subRoute}<wbr/></NavLink>)}
              </div>
            )}
            </section>
          </main>}/>
          <Route path="/style" component={() => <Suspense fallback="loading..."><DemoBrowser/></Suspense>}/>
          <Route path="/component" component={() => <Suspense fallback="loading..."><DemoBrowser/></Suspense>}/>
          {experiments.map(experiment => experiment.iterations.map(iteration => <Route key={iteration.subRoute} path={`${experiment.baseRoute}/${iteration.subRoute}`} component={() => <Suspense fallback="loading..."><iteration.component/></Suspense>}></Route>))}
          {demos.map(demo => <Route key={demo.route} path={`/embed${demo.route}`} component={() => <Suspense fallback="loading..."><demo.component/></Suspense>}></Route>)}
        </React.Fragment>
    </BrowserRouter>
  }
}