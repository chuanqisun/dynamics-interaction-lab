import * as React from "react";
import {Suspense, lazy} from "react";
import styled from "styled-components";
import {Route, NavLink} from 'react-router-dom';

import '../styles/fluent-for-dynamics.css';

// TODO move this up to demo-app
const pages = [
  { type: 'style', name: 'Color', route: '/demos/color', component: lazy(() => import('../styles/color/color.demo'))},
  { type: 'style', name: 'Depth', route: '/demos/depth', component: lazy(() => import('../styles/depth/depth.demo'))},
  { type: 'style', name: 'Icon', route: '/demos/icon', component: lazy(() => import('../styles/icon/icon.demo'))},
  { type: 'style', name: 'Typography', route: '/demos/typography', component: lazy(() => import('../styles/typography/typography.demo'))},
  { type: 'component', name: 'Button', route: '/demos/button', component: lazy(() => import('../components/button/button.demo'))},
  { type: 'component', name: 'Text field', route: '/demos/text-field', component: lazy(() => import('../components/text-field/text-field.demo'))},
  { type: 'component', name: 'Toggle', route: '/demos/toggle', component: lazy(() => import('../components/toggle/toggle.demo'))},
  { type: 'component', name: 'Top nav', route: '/demos/top-nav', component: lazy(() => import('../components/top-nav/top-nav.demo'))},
];

export class Experiments extends React.Component<any, any> {
  render() {
    return <StyledNav>
      <nav className="demos-nav">
        <NavLink className="link" activeClassName="link--active" exact to="/">Home</NavLink>
        <br/>
        {pages.filter(page => page.type==="style").map(page => <NavLink key={page.route} className="link" activeClassName="link--active" to={page.route}>{page.name}</NavLink>)}
        <br/>
        {pages.filter(page => page.type==="component").map(page => <NavLink key={page.route} className="link" activeClassName="link--active" to={page.route}>{page.name}</NavLink>)}
      </nav>
      {/* <div className="demos-content">
        <Route exact path="/experiments" component={() => <h1>Experiments</h1>}/>
        {pages.map(page => <Route key={page.route} path={page.route} component={() => <Suspense fallback="loading..."><page.component/></Suspense>}></Route>)}
      </div> */}
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

export default Experiments;