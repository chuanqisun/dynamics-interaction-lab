import * as React from "react";
import { NavLink, Route } from 'react-router-dom';
import styled from "styled-components";
import { demos } from './app';

export class DemoBrowser extends React.Component<any, any> {
  render() {
    return <StyledNav>
      <nav className="demos-nav">
        <NavLink className="lab-link lab-link--vertical-list" activeClassName="lab-link--active" exact to="/">Home</NavLink>
        <br/>
        {demos.filter(demo => demo.type==="style").map(demo => <NavLink key={demo.route} className="lab-link lab-link--vertical-list" activeClassName="lab-link--active" to={demo.route}>{demo.name}</NavLink>)}
        <br/>
        {demos.filter(demo => demo.type==="component").map(demo => <NavLink key={demo.route} className="lab-link lab-link--vertical-list" activeClassName="lab-link--active" to={demo.route}>{demo.name}</NavLink>)}
      </nav>
      <div className="demos-content">
        {demos.map(demo => <Route key={demo.route} path={demo.route} component={() => <iframe width="100%" height="100%" frameBorder="0" src={`/embed${demo.route}`}/>}></Route>)}
      </div>
    </StyledNav>
  }
}

const StyledNav = styled.div`
  display: flex;

  .demos-nav {
    flex: 0 0 auto;
    height: 100vh;
    overflow-y: auto;
    width: 120px;
    display: flex;
    flex-direction: column;
  }

  .demos-content {
    flex: 1 1 auto;
    height: 100vh;
    overflow: hidden;
  }
`;

export default DemoBrowser;