import * as React from "react";
import "../label/label.css";
import "./text-field.css";

export class TextFieldDemo extends React.Component<any, any> {
  render() {
    return (
      <React.Fragment>
        <section>
          <h2 className="lab-demo-h2">Sample</h2>
          <label className="lb">Label</label>
          <input className="tf" placeholder="placeholder"></input>
          <br />
          <br />
          <label className="lb">Label</label>
          <textarea className="tf tf--multi" placeholder="placeholder"></textarea>
        </section>
      </React.Fragment>
    );
  }
}

export default TextFieldDemo;
