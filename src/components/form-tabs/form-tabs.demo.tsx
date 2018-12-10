import * as React from 'React';
import './form-tabs.css';

export class FormTabsDemo extends React.Component<any, any> {
  render() {
    return <React.Fragment>
    <section>
      <h2 className="lab-demo-h2">Sample</h2>
      <ul>
        <li className="tab tab--selected">Summary</li>
        <li className="tab">Relationship Analytics</li>
        <li className="tab">Product line items</li>
        <li className="tab">Quotes</li>
        <li className="tab">Related</li>
      </ul>
    </section>
    </React.Fragment>
  }
}

export default FormTabsDemo;