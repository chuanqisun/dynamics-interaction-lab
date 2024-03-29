import * as React from 'react';
import styled from 'styled-components';

import { AppShell } from '../../components/app-shell/app-shell';
import { appShellDemoProps } from '../../components/app-shell/app-shell.demo';

import { SideNav } from '../../components/side-nav/side-nav';

import { FormHeader } from '../../components/form-header/form-header';

import { formTabsDemoProps } from '../../components/form-tabs/form-tabs.demo';

import Scrollbars from 'react-custom-scrollbars';
import { BusinessProcessFlow, BusinessProcessFlowProps } from '../event-horizon/charlie.exp';

/* side nav */
import { FullMdl2 } from '../../styles/icon/full-mdl2';

/* form sections */
import Details from '../markov-chain/FormSectionMocks/Details.svg';
import RelationshipAssistant from '../markov-chain/FormSectionMocks/RelationshipAssistant.svg';
import Subgrids from '../markov-chain/FormSectionMocks/Subgrids.svg';
import Timeline from '../markov-chain/FormSectionMocks/Timeline.svg';

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
import '../../styles/fluent-for-dynamics.css';
import './form-field.css';

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
      topic: 'Cooking Appliances IOT Capable',
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
      /* side nav */
      expanded: true,
      selectedItemId: '4',
      items: [
        {id: '0', icon: FullMdl2.SummaryChart, name: 'Dashbaord'},
        {id: '1', icon: FullMdl2.AccountActivity, name: 'Activities'},
        {id: '2', icon: FullMdl2.DocumentSet, name: 'Accounts'},
        {id: '3', icon: FullMdl2.Contact, name: 'Contact'},
        {id: '4', icon: FullMdl2.CRMLead, name: 'Leads'},
        {id: '5', icon: FullMdl2.Opportunities, name: 'Opportunities'},
        {id: '6', icon: FullMdl2.GuestUser, name: 'Competitors'},
        {id: '7', icon: FullMdl2.Quotes, name: 'Quotes'},
        {id: '8', icon: FullMdl2.Query, name: 'Orders'},
        {id: '9', icon: FullMdl2.CRMInvoices, name: 'Invoices'},
        {id: '10', icon: FullMdl2.Product, name: 'Products'},
        {id: '11', icon: FullMdl2.CustomActivity, name: 'Cases'},
      ],
      onSelect: (id: string) => this.setState({selectedItemId: id}),
      onToggleExpanded: () => this.setState({expanded: !this.state.expanded}),
    };
  }

  render() {
    const {selectedTabId, ...businessProcessFlowProps} = this.state;
    const formHeaderProps = {
      showFormSwitcher: this.state.showFormSwitcher,
      fields: this.state.fields,
      formSwitcherOptions: [this.state.recordAtIndex === 0 ? 'Lead' : 'Opportunity', 'Information', 'Sales insights'], 
      entityName: this.state.recordAtIndex === 0 ? 'Lead' : 'Opportunity',
      recordName: this.state.recordAtIndex === 0 ? this.state.contact : this.state.topic,
    };
    const sideNavProps = {
      expanded: this.state.expanded,
      selectedItemId: this.state.recordAtIndex === 0 ? '4' : '5',
      items: this.state.items,
      onSelect: this.state.onSelect,
      onToggleExpanded: this.state.onToggleExpanded,
    };

    return <StyledApp>
      <div className="top"><AppShell {...appShellDemoProps}/></div>
      <div className="bottom">
        <div className="bottom-left"><SideNav {...sideNavProps}/></div>
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
              <button onClick={() => this.setState({selectedTabId: '-1'})}  className={`tab${this.state.selectedTabId === '-1' ? ' tab--selected' : ''}`}>Business process</button>
              {formTabsDemoProps.tabs.map(tab => <button onClick={() => this.setState({selectedTabId: tab.id})} key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`}>{tab.name}</button>)}
            </div>
            <div className="form-tab">
              {/*BPF: all stages*/}
              {this.state.selectedTabId === '-1' && <div className="form-section form-section--process">
                <h1 className="process-name">{this.state.stages[this.state.userSelectedIndex].name}</h1>
                {this.state.userSelectedIndex < this.state.recordAtIndex && <span className="process-attribute">Stage complete {14 - 2 * this.state.userSelectedIndex} days ago</span>}
                {this.state.userSelectedIndex === this.state.recordAtIndex && <span className="process-attribute">Stage active for {8 - this.state.userSelectedIndex} days</span>}
                {!(this.state.userSelectedIndex > this.state.recordAtIndex) && <span className="process-attribute-separator">·</span>}
                <span className="process-attribute">{this.state.processName} (<button className="switch-button">switch</button>)</span>

                <div className="process-actions">
                  {this.state.userSelectedIndex < this.state.recordAtIndex && <button className="switch-process-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>Rollback to “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                  {this.state.userSelectedIndex === this.state.recordAtIndex && <button className="switch-process-btn switch-process-btn--primary" onClick={this.onCompleteStage}>Complete stage</button>}
                  {this.state.userSelectedIndex > this.state.recordAtIndex && <button className="switch-process-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>Skip to “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                </div>
              </div>}
              {/*BPF: Qualify stage*/}              
              {this.state.selectedTabId === '-1' && this.state.userSelectedIndex === 0 && <div className="form-section">
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
                  <textarea className="ff__value" placeholder="---" value={this.state.captureSummary} onChange={e => this.setState({captureSummary: e.target.value})}/>
                </div>
              </div>}
              {/*BPF: Develop stage */}                            
              {this.state.selectedTabId === '-1' && this.state.userSelectedIndex === 1 && <div className="form-section">
                <div className="ff">
                  <label className="ff__key">Customer need</label>
                  <input className="ff__value" type="text" placeholder="---" />
                </div>
                <div className="ff">
                  <label className="ff__key">Proposed solution</label>
                  <input className="ff__value" type="text" placeholder="---" />
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
              {/* Lead form, Contact section */}
              {this.state.selectedTabId !== '-1' && this.state.recordAtIndex === 0 && <div className="form-section">
                <div className="ft">Contact</div>
                <div className="ff">
                  <label className="ff__key">Topic<span className="ff__asterisk">*</span></label>
                  <input className="ff__value" type="text" value={this.state.topic} onChange={e => this.setState({topic: e.target.value})}/>
                </div>
                <div className="ff">
                  <label className="ff__key">Type</label>
                  <select className="ff__value" defaultValue="Item based">
                    <option value="Work based">Work based</option>
                    <option value="Item based">Item based</option>
                    <option value="Service-maintenance based">Service-maintenance based</option>
                  </select>
                </div>
                <div className="ff">
                  <label className="ff__key">First name</label>
                  <input className="ff__value" type="text" defaultValue="Allison" />
                </div>
                <div className="ff">
                  <label className="ff__key">Last name</label>
                  <input className="ff__value" type="text" defaultValue="Brown" />
                </div>
                <div className="ff">
                  <label className="ff__key">Job title</label>
                  <input className="ff__value" type="text" defaultValue="Owner" />
                </div>
                <div className="ff">
                  <label className="ff__key">Business Phone></label>
                  <input className="ff__value" type="tel" defaultValue="343-555-6797" placeholder="XXX-XXX-XXXX" />
                </div>
                <div className="ff">
                  <label className="ff__key">Mobile Phone</label>
                  <input className="ff__value" type="tel" defaultValue="" placeholder="XXX-XXX-XXXX" />
                </div>
                <div className="ff">
                  <label className="ff__key">Email</label>
                  <input className="ff__value" type="email" defaultValue="allison.brown@contoso.com" placeholder="name@company.com"/>
                </div>
              </div>}
              {/* Lead form, Company section */}
              {this.state.selectedTabId !== '-1' && this.state.recordAtIndex === 0 && <div className="form-section">
                <div className="ft">Company</div>
                <div className="ff">
                  <label className="ff__key">Company</label>
                  <input className="ff__value" type="text" defaultValue="Contoso" />
                </div>
                <div className="ff">
                  <label className="ff__key">Website</label>
                  <input className="ff__value" type="url" placeholder="---" />
                </div>
                <div className="ff">
                  <label className="ff__key">Street 1</label>
                  <input className="ff__value" type="text" placeholder="---" />
                </div>
                <div className="ff">
                  <label className="ff__key">Street 2</label>
                  <input className="ff__value" type="text" placeholder="---" />
                </div>
                <div className="ff">
                  <label className="ff__key">Street 3</label>
                  <input className="ff__value" type="text" placeholder="---" />
                </div>
                <div className="ff">
                  <label className="ff__key">City</label>
                  <input className="ff__value" type="text" placeholder="---"  defaultValue="Madison"/>
                </div>
                <div className="ff">
                  <label className="ff__key">State/Province</label>
                  <input className="ff__value" type="text" placeholder="---" defaultValue="IL"/>
                </div>
                <div className="ff">
                  <label className="ff__key">ZIP/Postal code</label>
                  <input className="ff__value" type="text" placeholder="---" defaultValue="74285"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Country/Region</label>
                  <input className="ff__value" type="text" placeholder="---" defaultValue="USA"/>
                </div>
              </div>}
              {/* Opportunity, 1st section*/}
              {this.state.selectedTabId !== '-1' && this.state.recordAtIndex === 1 && <div className="form-section">
                <div className="ff">
                  <label className="ff__key">Topic<span className="ff__asterisk">*</span></label>
                  <input className="ff__value" type="text" value={this.state.topic} onChange={e => this.setState({topic: e.target.value})}/>
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
                  <a className="ff__value">US Dollar</a>
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
      column-fill: auto;
    }
  }
  
  @media screen and (min-width: 1580px) {
    .form-tab {
      column-count: 3;
      column-fill: auto;
    }
  }

  .form-section {
    border: 1px solid #CBCBCB;
    margin-bottom: 20px;
    -webkit-column-break-inside: avoid; /* Chrome, Safari */
    page-break-inside: avoid;           /* Theoretically FF 20+ */
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

  .switch-button {
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
    cursor: pointer;
    appearance: none;
    border: none;
    background: none;
    color: var(--color-primary);
    padding: 0;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default BusinessProcessExperiment;