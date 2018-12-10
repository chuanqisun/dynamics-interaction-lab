import * as React from 'React';
import './form-tabs.css';

export interface DemoTabProps {
  id: string;
  name: string;
}

export interface DemoProps {
  tabs: DemoTabProps[];
  selectedTabId: string;
}

export const demoProps = {
  tabs:[
    {id: '0', name: 'Summary'},
    {id: '1', name: 'Relationship Analytics'},
    {id: '2', name: 'Product line items'},
    {id: '3', name: 'Quotes'},
    {id: '4', name: 'Related'},
  ],
  selectedTabId: '0',
}

export class FormTabsDemo extends React.Component<any, DemoProps> {
  constructor(props: any) {
    super(props);

    this.state = demoProps;
  } 

  render() {
    return <React.Fragment>
    <section>
      <h2 className="lab-demo-h2">Sample</h2>
      <div>
        {this.state.tabs.map(tab => <button key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`} onClick={() => this.onSelect(tab.id)}>{tab.name}</button>)}
      </div>
    </section>
    </React.Fragment>
  }

  onSelect = (id: string) => {
    this.setState({selectedTabId: id});
  }
}

export default FormTabsDemo;