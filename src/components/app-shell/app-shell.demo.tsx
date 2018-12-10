import * as React from 'React';
import {AppShell} from './app-shell';
import {FullMdl2} from '../../styles/icon/full-mdl2';

export const demoProps = {
  dynamicsDisplayStack: [{icon: FullMdl2.TBX, label: "Task flow"}, {icon: FullMdl2.ToolTip, label: "Relationship Assistant"}, {icon: FullMdl2.Add, label: "Create"}],
  systemDisplayStack: [{icon: FullMdl2.Settings, label: "Settings"}, {icon: FullMdl2.Help, label: "Help"}],
  customOverflowStack: [{icon: FullMdl2.Emoji2, label: "Custom 0"}],
};

export class AppShellDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = demoProps;
  }
  addCustomItem = () => {
    const newStack = [...this.state.customOverflowStack, {icon: FullMdl2.Emoji2, label: `Custom ${this.state.customOverflowStack.length}`}];
    this.setState({customOverflowStack: newStack});
  }

  removeCustomItem = () => {
    const newStack = [...this.state.customOverflowStack];
    newStack.pop();
    this.setState({customOverflowStack: newStack});
  }

  render() {
    return <React.Fragment>
    <section>
      <h2 className="lab-demo-h2">Sample</h2>
      <AppShell avatarImgUrl="https://api.adorable.io/avatars/285/abott@adorable.png" dynamicsDisplayStack={this.state.dynamicsDisplayStack} systemDisplayStack={this.state.systemDisplayStack} customOverflowStack={this.state.customOverflowStack}></AppShell>
    </section>
    <section>
      <h2 className="lab-demo-h2">Usage</h2>
      <section style={{marginTop: "16px"}}>
        <span>Custom actions: </span>
        <button onClick={this.removeCustomItem}>-</button>
        <span> {this.state.customOverflowStack.length} </span>
        <button onClick={this.addCustomItem}>+</button>
      </section>
      <section>
        <h3>Design notes</h3>
        <ul>
          <li>This prototype only shows browser behavior. Shim experience is out of scope</li>
          <li>When viewport narrows, Dynamics actions (task flow, relationship assistance, create) collapse first, then System buttons (help, settings) next</li>
          <li>Custom actions are always collapsed except when there is only one</li>
          <li>The System buttons are either all collapsed or all expanded</li>
          <li>The Dynamics actions are either all collapsed or all expanded</li>
        </ul>
      </section>
    </section>
    </React.Fragment>
  }
}

export default AppShellDemo;