import * as React from 'React';
import styled from 'styled-components';

import {AppShell} from '../../components/app-shell/app-shell';
import {appShellDemoProps} from '../../components/app-shell/app-shell.demo';

import {SideNav} from '../../components/side-nav/side-nav';
import {sideNavDemoProps} from '../../components/side-nav/side-nav.demo';

import {FormHeader} from '../../components/form-header/form-header';
import {formHeaderDemoProps} from '../../components/form-header/form-header.demo';

import {formTabsDemoProps} from '../../components/form-tabs/form-tabs.demo';

import MockCommandBar from './mock-command-bar.svg';
import MockFormBody from './mock-form-body.svg';

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedTabId: '0',
    };
  }
  render() {
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
            <div className="tabs-container">
              {formTabsDemoProps.tabs.map(tab => <button key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`}>{tab.name}</button>)}
            </div>
            <MockFormBody className="mock-form"/>
          </div>
        </div>
      </div>
    </StyledApp>
  }
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
  }

  .command-bar-container {
    overflow: hidden;
  }

  .mock-command-bar {
    display: block;
  }

  .mock-form {
    padding: 20px;
  }

  .tabs-container {
    padding: 16px 20px 0 20px;
    white-space: nowrap;
  }
`;

export default BusinessProcessExperiment;