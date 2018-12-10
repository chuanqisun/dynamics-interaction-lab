import * as React from 'React';
import styled from 'styled-components';

import {AppShell} from '../../components/app-shell/app-shell';
import {appShellDemoProps} from '../../components/app-shell/app-shell.demo';

import {SideNav} from '../../components/side-nav/side-nav';
import {sideNavDemoProps} from '../../components/side-nav/side-nav.demo';

import {FormHeader} from '../../components/form-header/form-header';
import {formHeaderDemoProps} from '../../components/form-header/form-header.demo';

export class BusinessProcessExperiment extends React.Component<any, any> {
  render() {
    return <StyledApp>
      <div className="top"><AppShell {...appShellDemoProps}/></div>
      <div className="bottom">
        <div className="bottom-left"><SideNav {...sideNavDemoProps}/></div>
        <div className="bottom-right">
          <FormHeader {...formHeaderDemoProps}/>
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
  }

  .bottom-right {
    flex: 1 1 auto;
  }
`;

export default BusinessProcessExperiment;