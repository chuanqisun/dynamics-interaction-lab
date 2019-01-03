import * as React from 'React';
import styled from 'styled-components';

import {AppShell} from '../../components/app-shell/app-shell';
import {appShellDemoProps} from '../../components/app-shell/app-shell.demo';

import {SideNav} from '../../components/side-nav/side-nav';
import {sideNavDemoProps} from '../../components/side-nav/side-nav.demo';

import {FormHeader} from '../../components/form-header/form-header';
import {formHeaderDemoProps} from '../../components/form-header/form-header.demo';

import {formTabsDemoProps} from '../../components/form-tabs/form-tabs.demo';

import {BusinessProcessFlow, BusinessProcessFlowProps} from '../fast-fourier/hotel.exp';

import MockCommandBar from './mock-command-bar.svg';
import MockFormBody from './mock-form-body.svg';
import MockForm2Column from './mock-form-2-column.svg';

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedTabId: '0',
      stages: [
        {name: 'Screen'},
        {name: 'Qualify'},
        {name: 'Develop'},
        {name: 'Connect'},
        {name: 'Propose'},
        {name: 'Close'},
        {name: 'Archive'},
      ],
      userSelectedIndex: 2,
      recordAtIndex: 2,
      onSelectStage: this.onSelectStage,
      onCompleteStage: this.onCompleteStage,
      onMoveRecordToStage: this.onMoveRecordToStage,
    };
  }

  render() {
    const {selectedTabId, ...businessProcessFlowProps} = this.state;

    return <StyledApp>
      <div className="top"><AppShell {...appShellDemoProps}/></div>
      <div className="bottom">
        <div className="bottom-left"><SideNav {...sideNavDemoProps}/></div>
        <div className="bottom-right">
          <div className="bottom-right-top">
            <div className="command-bar-container">
              <MockCommandBar className="mock-command-bar"/>
            </div>
            <FormHeader inlineModeBreakpoint="600px" {...formHeaderDemoProps}/>
          </div>
          <div className="bottom-right-bottom">
            <div className="form-left">
              <div className="tabs-container">
                {formTabsDemoProps.tabs.map(tab => <button key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`}>{tab.name}</button>)}
              </div>
              <MockForm2Column className="mock-form"/>
            </div>
            <div className="form-right">
              <h1 className="process-title">Lead to opportunity process</h1>
              <BusinessProcessFlow {...businessProcessFlowProps as BusinessProcessFlowProps}/>
            </div>
          </div>
        </div>
      </div>
    </StyledApp>
  }

  onSelectStage = (index: number) => this.setState({userSelectedIndex: index === this.state.userSelectedIndex ? null : index});

  onCompleteStage = () => {
    const recordAtIndex =  Math.min(this.state.stages.length, this.state.recordAtIndex + 1);
    const userSelectedIndex = recordAtIndex < this.state.stages.length ? recordAtIndex : null;
    this.setState({recordAtIndex, userSelectedIndex});
  }

  onMoveRecordToStage = (index: number) => this.setState({recordAtIndex: index});
}

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .top {
    flex: 0 0 auto;
  }

  .bottom {
    flex: 1 1 auto;
  }

  .bottom {
    display: flex;
  }
  
  .bottom-left {
    flex: 0 0 auto;
    position: relative;
  }

  .bottom-right {
    flex: 1 1 auto;
    overflow: auto;
    width: 100%;
  }

  .bottom-right-top {
    position: sticky;
    top: 0;
    z-index: 200;
    display: flex;
    flex-direction: column;
  }

  .bottom-right-bottom {
    flex: 1 1 auto;
    overflow: hidden;
    display: flex;
  }

  .command-bar-container {
    overflow: hidden;
  }

  .mock-command-bar {
    display: block;
  }

  .form-left {
    flex: 1 0 auto;
  }

  .form-right {
    flex: 0 0 300px;
    width: 300px;
    padding: 16px 20px 0 8px;
  }

  .mock-form {
    padding: 20px;
  }

  .process-title {
    font: var(--fw-semibold) var(--scale-20)/var(--scale-24) var(--ff-segoe-ui);
    margin: 0 0 20px 0;
  }

  .tabs-container {
    padding: 16px 20px 0 20px;
    white-space: nowrap;
  }

`;

export default BusinessProcessExperiment;