import * as React from "react";
import { NavLink, Route } from 'react-router-dom';
import { demos } from './app';

export class DemoBrowser extends React.Component<any, any> {
  render() {
    return <div className="lab-demo-browser">
      <nav className="lab-demo-browser__nav">
        <NavLink className="lab-link lab-link--vertical-list" activeClassName="lab-link--active" exact to="/">Lab home</NavLink>
        <br/>
        {demos.filter(demo => demo.type==="style").map(demo => <NavLink key={demo.route} className="lab-link lab-link--vertical-list" activeClassName="lab-link--active" to={demo.route}>{demo.name}</NavLink>)}
        <br/>
        {demos.filter(demo => demo.type==="component").map(demo => <NavLink key={demo.route} className="lab-link lab-link--vertical-list" activeClassName="lab-link--active" to={demo.route}>{demo.name}</NavLink>)}
      </nav>
      <div className="lab-demo-browser__content">
        {demos.map(demo => <Route key={demo.route} path={demo.route} component={() => <iframe width="100%" height="100%" frameBorder="0" src={`/embed${demo.route}`}/>}></Route>)}
      </div>
    </div>
  }
}

export default DemoBrowser;