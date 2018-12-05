import * as React from "react";
import {Suspense, lazy} from "react";
import styled from "styled-components";
import {Route, NavLink} from 'react-router-dom';

import '../design-systems/fluent-power-platform.css';

const pages = [
  { type: 'style', name: 'Color', route: '/powerplatform/color', component: lazy(() => import('../styles/color/color.power-platform.demo'))},
  { type: 'style', name: 'Depth', route: '/powerplatform/depth', component: lazy(() => import('../styles/depth/depth.fluent-dynamics.demo'))}, // TODO implement power version
  { type: 'style', name: 'Icon', route: '/powerplatform/icon', component: lazy(() => import('../styles/icon/icon.demo'))},
  { type: 'style', name: 'Typography', route: '/powerplatform/typography', component: lazy(() => import('../styles/typography/typography.fluent-dynamics.demo'))}, // TODO implement power version
  { type: 'component', name: 'Button', route: '/powerplatform/button', component: lazy(() => import('../components/button/button.fluent-dynamics.demo'))}, // TODO implement power version
  { type: 'component', name: 'Text field', route: '/powerplatform/text-field', component: lazy(() => import('../components/text-field/text-field.fluent-dynamics.demo'))}, // TODO implement power version
  { type: 'component', name: 'Toggle', route: '/powerplatform/toggle', component: lazy(() => import('../components/toggle/toggle.fluent-dynamics.demo'))}, // TODO implement power version
  { type: 'component', name: 'Top nav', route: '/powerplatform/top-nav', component: lazy(() => import('../components/top-nav/top-nav.fluent-dynamics.demo'))}, // TODO implement power version
];

export class FluentPowerPlatform extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    document.body.dataset.designLanguage = 'fluent-power-platform';
    document.body.dataset.theme = 'powerbi';
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
        <Route exact path="/powerplatform" component={() => <h1>Fluent for Power platform</h1>}/>
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

export default FluentPowerPlatform;