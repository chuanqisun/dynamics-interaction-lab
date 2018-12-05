import * as React from 'React';
import './text-field.fluent-dynamics.css';
import '../label/label.fluent-dynamics.css';

export class TextFieldDemo extends React.Component<any, any> {
  render() {
    return <React.Fragment>
    <section>
      <h2>Sample</h2>
      <label className="lb">Label</label>
      <input className="tf" placeholder="placeholder"></input>
      <br/>
      <br/>
      <label className="lb">Label</label>
      <textarea className="tf tf--multi" placeholder="placeholder"></textarea>
    </section>
    </React.Fragment>
  }
}

export default TextFieldDemo;