import * as React from "react";
import {Suspense} from "react";
import styled from "styled-components";
import {Route, NavLink} from 'react-router-dom';
import {demos} from './app';


export class Demos extends React.Component<any, any> {
  render() {
    return <StyledNav>
      <nav className="demos-nav">
        <NavLink className="il-link il-link--vertical-list" activeClassName="il-link--active" exact to="/">Home</NavLink>
        <br/>
        {demos.filter(demo => demo.type==="style").map(demo => <NavLink key={demo.route} className="il-link il-link--vertical-list" activeClassName="il-link--active" to={demo.route}>{demo.name}</NavLink>)}
        <br/>
        {demos.filter(demo => demo.type==="component").map(demo => <NavLink key={demo.route} className="il-link il-link--vertical-list" activeClassName="il-link--active" to={demo.route}>{demo.name}</NavLink>)}
      </nav>
      <div className="demos-content">
        {demos.map(demo => <Route key={demo.route} path={demo.route} component={() => <Suspense fallback="loading..."><demo.component/></Suspense>}></Route>)}
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
`;

export default Demos;