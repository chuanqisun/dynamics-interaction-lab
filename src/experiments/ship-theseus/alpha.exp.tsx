import * as React from 'React';
import styled from 'styled-components';

import {AppShell} from '../../components/app-shell/app-shell';
import {appShellDemoProps} from '../../components/app-shell/app-shell.demo';

import {SideNav} from '../../components/side-nav/side-nav';
import {sideNavDemoProps} from '../../components/side-nav/side-nav.demo';

import {FormHeader} from '../../components/form-header/form-header';
import {formHeaderDemoProps} from '../../components/form-header/form-header.demo';

import {formTabsDemoProps} from '../../components/form-tabs/form-tabs.demo';

import {BusinessProcessFlow, BusinessProcessFlowProps} from '../event-horizon/charlie.exp';
import Scrollbars  from 'react-custom-scrollbars';

/* form sections */
import Summary from '../markov-chain/FormSectionMocks/Summary.svg';
import Subgrids from '../markov-chain/FormSectionMocks/Subgrids.svg';
import RelationshipAssistant from '../markov-chain/FormSectionMocks/RelationshipAssistant.svg';
import Timeline from '../markov-chain/FormSectionMocks/Timeline.svg';
import Details from '../markov-chain/FormSectionMocks/Details.svg';

/* command */
import Assign from '../markov-chain/CommandMocks/Assign.svg';
import CloseAsLost from '../markov-chain/CommandMocks/CloseAsLost.svg';
import CloseAsWon from '../markov-chain/CommandMocks/CloseAsWon.svg';
import EmailALink from '../markov-chain/CommandMocks/EmailALink.svg';
import New from '../markov-chain/CommandMocks/New.svg';
import Process from '../markov-chain/CommandMocks/Process.svg';
import RecalculateOpportunity from '../markov-chain/CommandMocks/RecalculateOpportunity.svg';
import RecordSet from '../markov-chain/CommandMocks/RecordSet.svg';
import Refresh from '../markov-chain/CommandMocks/Refresh.svg';

/* form field */
import './form-field.css';
import '../../styles/fluent-for-dynamics.css';

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      /* form fields */
      contact: 'Allison Brown',
      account: 'Commerical Kitchen Inc.',
      purchaseTimeframe: 'This quarter',
      purchaseProcess: 'Individual',
      identifyDecisionMaker: false,
      captureSummary: '',
      estCloseDate: '2019-05-20',
      /* form tabs */
      selectedTabId: '-1',
      /* bpf */
      processName: 'Lead to opportunity process',
      stages: [
        {name: 'Qualify'},
        {name: 'Develop'},
        {name: 'Propose'},
        {name: 'Close'},
      ],
      userSelectedIndex: 0,
      recordAtIndex: 0,
      onSelectStage: this.onSelectStage,
      onCompleteStage: this.onCompleteStage,
      onMoveRecordToStage: this.onMoveRecordToStage,
      /* form header */
      showFormSwitcher: true,
      fields: [
        {key: 'Est. Close Date', value: '5/20/2019'},
        {key: 'Est. Revenue', value: '$290,000.00'},
        {key: 'Status', value: 'In progress'},
        {key: 'Owner', value: 'Molly Clark'},
      ],
    };
  }

  render() {
    const {selectedTabId, ...businessProcessFlowProps} = this.state;
    const formHeaderProps = {
      showFormSwitcher: this.state.showFormSwitcher,
      fields: this.state.fields,
      formSwitcherOptions: [this.state.recordAtIndex === 0 ? 'Lead' : 'Opportunity', 'Information', 'Sales insights'], 
      entityName: this.state.recordAtIndex === 0 ? 'Lead' : 'Opportunity',
    };

    return <StyledApp>
      <div className="top"><AppShell {...appShellDemoProps}/></div>
      <div className="bottom">
        <div className="bottom-left"><SideNav {...sideNavDemoProps}/></div>
        <Scrollbars
          className="page-center"
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <div className="page-center-top">
            <div className="command-bar-container">
              <RecordSet/>
              <New/>
              <Refresh/>
              <CloseAsWon/>
              <CloseAsLost/>
              <RecalculateOpportunity/>
              <Process/>
              <Assign/>
              <EmailALink/>
            </div>
            <FormHeader className="form-header" inlineModeBreakpoint="600px" {...formHeaderProps}/>
            <BusinessProcessFlow className="business-process-flow" {...businessProcessFlowProps as BusinessProcessFlowProps}/>
          </div>
          <div className="page-center-bottom">
            <div className="tabs-container">
              <button onClick={() => this.setState({selectedTabId: '-1'})}  className={`tab${this.state.selectedTabId === '-1' ? ' tab--selected' : ''}`}>{this.state.stages[this.state.userSelectedIndex].name}</button>
              {formTabsDemoProps.tabs.map(tab => <button onClick={() => this.setState({selectedTabId: tab.id})} key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`}>{tab.name}</button>)}
            </div>
            <div className="form-tab">
              {this.state.selectedTabId === '-1' && <div className="form-section form-section--process">
                <h1 className="process-name">Lead to opportunity process</h1>
                <span className="process-attribute">Process started 24 days ago</span>
                <span className="process-attribute-separator">·</span>
                {this.state.userSelectedIndex < this.state.recordAtIndex && <span className="process-attribute">Completed “{this.state.stages[this.state.userSelectedIndex].name}” {14 - 2 * this.state.userSelectedIndex} days ago</span>}
                {this.state.userSelectedIndex === this.state.recordAtIndex && <span className="process-attribute">In “{this.state.stages[this.state.userSelectedIndex].name}” for 3 days</span>}

                <div className="process-actions">
                  {this.state.userSelectedIndex < this.state.recordAtIndex && <button className="switch-process-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>Rollback to “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                  {this.state.userSelectedIndex === this.state.recordAtIndex && <button className="switch-process-btn switch-process-btn--primary" onClick={this.onCompleteStage}>Complete “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                  {this.state.userSelectedIndex > this.state.recordAtIndex && <button className="switch-process-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>Skip to “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                  <button className="switch-process-btn">Switch process</button>
                </div>
              </div>}
              {this.state.selectedTabId === '-1' && this.state.recordAtIndex === 0 && <div className="form-section">
                <div className="ff">
                  <label className="ff__key">Existing contact</label>
                  <a className="ff__value">{this.state.contact}</a>
                </div>
                <div className="ff">
                  <label className="ff__key">Existing account</label>
                  <a className="ff__value">{this.state.account}</a>
                </div>
                <div className="ff">
                  <label className="ff__key">Purchase timeframe</label>
                  <select className="ff__value" value={this.state.purchaseTimeframe} onChange={e => this.setState({purchaseTimeframe: e.target.value})}>
                    <option value="Immediate">Immediate</option>
                    <option value="This quarter">This quarter</option>
                    <option value="Next quarter">Next quarter</option>
                    <option value="This year">This year</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="ff__key">Purchase process</label>
                  <select className="ff__value" value={this.state.purchaseProcess} onChange={e => this.setState({purchaseProcess: e.target.value})}>
                    <option value="Individual">Individual</option>
                    <option value="Commitee">Committee</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="ff__key">Identify decision maker</label>
                  <input className="ff__value" type="checkbox" checked={this.state.identifyDecisionMaker} onChange={e => this.setState({identifyDecisionMaker: e.target.checked})}/>
                </div>
                <div className="ff">
                  <label className="ff__key">Capture summary</label>
                  <textarea className="ff__value" value={this.state.captureSummary} onChange={e => this.setState({captureSummary: e.target.value})}/>
                </div>
              </div>}
              {this.state.selectedTabId === '-1' && this.state.recordAtIndex === 1 && <div className="form-section">
                <div className="ff">
                  <label className="ff__key">Customer need</label>
                  <input className="ff__value" type="text"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Proposed solution</label>
                  <input className="ff__value" type="text"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Identify stakeholders</label>
                  <input className="ff__value" type="checkbox"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Identify competitors</label>
                  <input className="ff__value" type="checkbox"/>
                </div>
              </div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section">
                <div className="ff">
                  <label className="ff__key">Topic<span className="ff__asterisk">*</span></label>
                  <input className="ff__value" type="text" value="Wants to expand"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Contact</label>
                  <a className="ff__value">Allison Brown</a>
                </div>
                <div className="ff">
                  <label className="ff__key">Account</label>
                  <a className="ff__value">Commerical Kitchen Inc.</a>
                </div>
                <div className="ff">
                  <label className="ff__key">Purchase Timeframe</label>
                  <select className="ff__value" value={this.state.purchaseTimeframe} onChange={e => this.setState({purchaseTimeframe: e.target.value})}>
                    <option value="Immediate">Immediate</option>
                    <option value="This quarter">This quarter</option>
                    <option value="Next quarter">Next quarter</option>
                    <option value="This year">This year</option>
                    <option value="Unknown">Unknown</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="ff__key">Currency<span className="ff__asterisk">*</span></label>
                  <a className="ff__value">US Dollay</a>
                </div>
                <div className="ff">
                  <label className="ff__key">Budget Amount</label>
                  <a className="ff__value">$1,389,000.00</a>
                </div>
                <div className="ff">
                  <label className="ff__key">Est. Close Date</label>
                  <input className="ff__value" type="date" value="2019-05-20"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Est. Revenue</label>
                  <input className="ff__value" type="text" value="$290,000.00"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Status</label>
                  <select className="ff__value">
                    <option>In progress</option>
                    <option>Closed</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="ff__key">Owner</label>
                  <a className="ff__value">Molly Clark</a>
                </div>
              </div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><Details/></div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><Subgrids/></div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><RelationshipAssistant/></div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><Timeline/></div>}
            </div>
          </div>
        </Scrollbars>
      </div>
    </StyledApp>
  }

  onSelectStage = (index: number) => this.setState({userSelectedIndex: index, selectedTabId: '-1'});

  onCompleteStage = () => {
    const recordAtIndex =  Math.min(this.state.stages.length, this.state.recordAtIndex + 1);
    const userSelectedIndex = recordAtIndex < this.state.stages.length ? recordAtIndex : null;
    this.setState({recordAtIndex, userSelectedIndex});
  }

  onMoveRecordToStage = (index: number) => this.setState({recordAtIndex: index});
}

const StyledApp = styled.div`
  --brand-primary: #2266E3;
  --brand-primary-darken: #1B52B6;
  --light-grey: #F8F8F9;

  display: flex;
  flex-direction: column;
  height: 100%;

  .top {
    flex: 0 0 auto;
  }

  .bottom {
    flex: 1 1 auto;
    height: 100%;
  }

  .bottom {
    display: flex;
  }
  
  .bottom-left {
    flex: 0 0 auto;
  }

  .page-center {
    flex: 1 1 auto;
    overflow: auto;
    height: 100%;
  }

  .page-center-top {
    flex: 0 0 auto;
    position: sticky;
    top: 0;
    z-index: 400;
  }  

  .page-center-bottom {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
  }

  .command-bar-container {
    border-bottom: 1px solid #CDCDCD;
    height: 42px;
    overflow: hidden;
    background: white;
  }

  .page-right {
    flex: 0 0 352px;
    width: 352px;
    border-left: 1px solid #CDCDCD;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
    background-color: #F8F8F8;
  }

  .form-header {
    padding-bottom: 14px;
  }

  .form-tab {
    padding: 20px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1100px) {
    .form-tab {
      column-count: 2;
    }
  }
  
  @media screen and (min-width: 1580px) {
    .form-tab {
      column-count: 3;
    }
  }

  .form-section {
    border: 1px solid #CBCBCB;
    margin-bottom: 20px;
    break-inside: avoid-column;
    padding: 8px 16px;
  }

  .form-section--mock {
    padding: 0;
  }

  .form-section--process {
    padding: 4px 12px;
  }

  .process-name {
    font: var(--fw-semibold) var(--scale-20)/var(--scale-24) var(--ff-segoe-ui);
    margin: 8px 0 16px 0;
  }

  .process-actions {
    margin: 16px 0 8px;
  }

  .process-attribute {
    white-space: nowrap;
    display: inline-block;
  }

  .process-attribute-separator {
    margin: 0 8px;
  }

  .tabs-container {
    padding: 16px 20px 0 20px;
    white-space: nowrap;
  }

  .thumb-vertical {
    z-index: 600;
  }

  .business-process-flow {
    margin: 0 20px;
    transform: translateY(-12px);
    margin-bottom: -12px;
  }

  .switch-process-btn {
    border-radius: 2px;
    border: none;
    height: 32px;
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
    padding: 0 1.25rem;
    box-shadow: var(--depth-1);
    color: black;
    background-color: white;
    cursor: pointer;
    outline: none; /* replace with focus-visible */
  }

  .switch-process-btn:hover {
    box-shadow: var(--depth-2);
    background-color: var(--light-grey);
  }

  .switch-process-btn--primary {
    background-color: var(--brand-primary);
    color: white;
  }

  .switch-process-btn--primary:hover {
    background-color: var(--brand-primary-darken);
  }

  .switch-process-btn + .switch-process-btn {
    margin-left: 12px;
  }
`;

export default BusinessProcessExperiment;