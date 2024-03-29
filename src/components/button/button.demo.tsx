import * as React from "react";
import "./button.css";

export class ButtonDemo extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <section>
          <h2 className="lab-demo-h2">Sample</h2>
          <button className="btn btn--primary">Primary</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn btn--secondary">Secondary</button>
        </section>
      </React.Fragment>
    );
  }
}

export default ButtonDemo;
