import * as React from 'React';
import './toggle.css';

export class ToggleDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      checked: false,
    };
  }

  onCheck = () => {
    this.setState({checked: !this.state.checked});
  }
  render() {
    return <React.Fragment>
    <section>
      <h2 className="lab-demo-h2">Sample</h2>
      <input id="tg-demo" type="checkbox" className="tg" checked={this.state.checked} onChange={this.onCheck}/><label htmlFor="tg-demo" className="tg-label">{this.state.checked ? 'on' : 'off'}</label>
    </section>
    </React.Fragment>
  }
}

export default ToggleDemo;