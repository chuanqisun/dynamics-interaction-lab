import * as React from "react";
import {Suspense, lazy} from "react";
import {Route, BrowserRouter, NavLink} from 'react-router-dom'
// import {} -> name import -> import some parts of the module, invented in es6
// import * -> autonamous import -> import entire module 
// require -> old world from node.js development
// so new world use export default Class not module.exports anymore
// module.exports -> we can't do name import we can just only do import *, but if we do export default class we can import name

const FluentDynamics = lazy(() => import('./fluent-dynamics'));

export class DemoApp extends React.Component<any, any> {
  // <any, any> -> type script requires you to declare the property and states 
  constructor(props: any) {
    // interit props from parent components.
    super(props);
    // call the constructor of the parent to extend or do some activity to your class.
    
  }

  render() {
    return <BrowserRouter>
        <div className="demos-content">
          <Route exact path="/" component={() => <div>
            <NavLink className="link" activeClassName="link--active" to="/library">Library</NavLink>
          </div>}/>
          <Route path="/library" component={() => <Suspense fallback="loading..."><FluentDynamics/></Suspense>}/>
        </div>
    </BrowserRouter>
  }
}