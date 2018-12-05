import * as React from "react";
import {Suspense, lazy} from "react";
import styled from "styled-components";
import {Route, NavLink} from 'react-router-dom';

import '../design-systems/fluent-dynamics.css';

// TODO move this up to demo-app
const pages = [
  { type: 'style', name: 'Color', route: '/dynamics/color', component: lazy(() => import('../styles/color/color.fluent-dynamics.demo'))},
  { type: 'style', name: 'Depth', route: '/dynamics/depth', component: lazy(() => import('../styles/depth/depth.fluent-dynamics.demo'))},
  { type: 'style', name: 'Icon', route: '/dynamics/icon', component: lazy(() => import('../styles/icon/icon.demo'))},
  { type: 'style', name: 'Typography', route: '/dynamics/typography', component: lazy(() => import('../styles/typography/typography.fluent-dynamics.demo'))},
  { type: 'component', name: 'Button', route: '/dynamics/button', component: lazy(() => import('../components/button/button.fluent-dynamics.demo'))},
  { type: 'component', name: 'Text field', route: '/dynamics/text-field', component: lazy(() => import('../components/text-field/text-field.fluent-dynamics.demo'))},
  { type: 'component', name: 'Toggle', route: '/dynamics/toggle', component: lazy(() => import('../components/toggle/toggle.fluent-dynamics.demo'))},
  { type: 'component', name: 'Top nav', route: '/dynamics/top-nav', component: lazy(() => import('../components/top-nav/top-nav.fluent-dynamics.demo'))},
];

export class FluentDynamics extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    document.body.dataset.designLanguage = 'fluent-dynamics';
    document.body.dataset.theme = 'blue';
  }

  render() {
    return <StyledNav>
      <nav className="demos-nav">
        <NavLink className="link" activeClassName="link--active" exact to="/">Home</NavLink>
        <br/>
        {pages.filter(page => page.type==="style").map(page => <NavLink key={page.route} className="link" activeClassName="link--active" to={page.route}>{page.name}</NavLink>)}
        <br/>
        {pages.filter(page => page.type==="component").map(page => <NavLink key={page.route} className="link" activeClassName="link--active" to={page.route}>{page.name}</NavLink>)}
      </nav>
      <div className="demos-content">
        <Route exact path="/dynamics" component={() => <h1>Fluent for Dynamics</h1>}/>
        {pages.map(page => <Route key={page.route} path={page.route} component={() => <Suspense fallback="loading..."><page.component/></Suspense>}></Route>)}
      </div>
    </StyledNav>
  }
}

const StyledNav = styled.div`
  display: flex;

  .demos-nav {
    flex: 0 0 auto;
    height: 100%;
    width: 120px;
    display: flex;
    flex-direction: column;
  }

  .demos-content {
    flex: 1 1 auto;
  }

  .link {
    margin: 0 4px;
    color: grey;
    text-decoration: none;
    display: inline-block;
  }

  .link--active {
    color: black;
    font-weight: 600;
  }
  
  .link:hover {
    font-weight: 600;
  }
`;

export default FluentDynamics;