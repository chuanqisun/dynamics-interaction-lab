import * as React from 'React';
import styled from 'styled-components';

import {AppShell} from '../../components/app-shell/app-shell';
import {appShellDemoProps} from '../../components/app-shell/app-shell.demo';

import {SideNav} from '../../components/side-nav/side-nav';

import {FormHeader} from '../../components/form-header/form-header';

/* dialog */
import './modal-dialog.css';
import '../../components/button/button.css';

/* form tabs */
import '../../components/form-tabs/form-tabs.css';

import {BusinessProcessFlow, BusinessProcessFlowProps} from '../fast-fourier/hotel.exp';
import Scrollbars  from 'react-custom-scrollbars';

/* form sections */
import Subgrids from './FormSectionMocks/Subgrids.svg';
import RelationshipAssistant from './FormSectionMocks/RelationshipAssistant.svg';
import Timeline from './FormSectionMocks/Timeline.svg';
import Details from './FormSectionMocks/Details.svg';

/* command */
import Assign from '../markov-chain/CommandMocks/Assign.svg';
import CloseAsLost from '../markov-chain/CommandMocks/CloseAsLost.svg';
import CloseAsWon from '../markov-chain/CommandMocks/CloseAsWon.svg';
import Delete from '../markov-chain/CommandMocks/Delete.svg';
import Disqualify from '../markov-chain/CommandMocks/Disqualify.svg';
import EmailALink from '../markov-chain/CommandMocks/EmailALink.svg';
import Flow from '../markov-chain/CommandMocks/Flow.svg';
import Follow from '../markov-chain/CommandMocks/Follow.svg';
import New from '../markov-chain/CommandMocks/New.svg';
import Qualify from '../markov-chain/CommandMocks/Qualify.svg';
import RecordSet from '../markov-chain/CommandMocks/RecordSet.svg';
import Refresh from '../markov-chain/CommandMocks/Refresh.svg';

/* form fields */
import './form-field.css';
import '../../styles/fluent-for-dynamics.css';

/* side nav */
import {FullMdl2} from '../../styles/icon/full-mdl2';

export class BusinessProcessExperiment extends React.Component<any, any> {
  private estimatedBudgetRef = React.createRef<HTMLInputElement>();
  private qualifyStageFormRef = React.createRef<HTMLFormElement>();

  constructor(props: any) {
    super(props);

    this.state = {
      /* bpf */
      processName: 'Printer sales process',
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
      /* form fields */
      account: 'Commerical Kitchen Inc.',
      captureSummary: '',
      completeFinalPropsal: false,
      completeInternalReview: false,
      confirmDecisionDate: '',
      contact: 'Allison Brown',
      customerNeed: '',
      developProposal: false,
      estCloseDate: '2019-05-20',
      estimatedBudget: '',
      fileDebrief: false,
      identifyCompetitors: false,
      identifyDecisionMaker: false,
      identifySalesTeam: false,
      identifyStakeholders: false,
      presentFinalProposal: false,
      presentPropsal: false,
      proposedSolution: '',
      purchaseProcess: '',
      purchaseTimeframe: '',
      sendThankYou: false,
      topic: 'Cooking Appliances IOT Capable',
      /* form header */
      formSwitcherSelectedIndex: 0,
      onFormSwitch: (index: number) => this.setState({formSwitcherSelectedIndex: index}),
      /* form tabs */
      selectedTabId: '0',
      /* dialog */
      dialogElement: null,
      switchProcessOptions: [
        'Printer sales process',
        'Toner subscription sales process',
      ],
      dialogSelectedProcessIndex: 0,
      dialogSelectingProcessIndex: 0,
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
    const businessProcessFlowProps = {
      userSelectedIndex: this.state.userSelectedIndex,
      recordAtIndex: this.state.recordAtIndex,
      onSelectStage: this.onSelectStage,
      onMoveRecordToStage: this.onMoveRecordToStage,
      onCompleteStage: this.onCompleteStage,
    };

    const formHeaderProps = {
      showFormSwitcher: true,
      fields: this.state.recordAtIndex === 0 ? [
        {key: 'Lead source', value: 'Web'},
        {key: 'Rating', value: 'Hot'},
        {key: 'Status', value: 'Contacted'},
        {key: 'Owner', value: 'Molly Clark'},
      ] : [
        {key: 'Est. Close Date', value: '5/20/2019'},
        {key: 'Est. Revenue', value: '$290,000.00'},
        {key: 'Status', value: 'In progress'},
        {key: 'Owner', value: 'Molly Clark'},
      ],
      formSwitcherOptions: [this.state.recordAtIndex === 0 ? 'Lead' : 'Opportunity', 'Information', 'Sales insights'], 
      formSwitcherSelectedIndex: this.state.formSwitcherSelectedIndex,
      onFormSwitch: this.state.onFormSwitch,
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

    const commands = this.state.recordAtIndex === 0 ? <>
      <RecordSet/>
      <New/>
      <Delete/>
      <Refresh/>
      <Qualify/>
      <Disqualify/>
      <Assign/>
      <EmailALink/>
      <Follow/>
      <Flow/>
    </> : <>
      <RecordSet/>
      <New/>
      <Refresh/>
      <CloseAsWon/>
      <CloseAsLost/>
      <Assign/>
      <EmailALink/>
      <Delete/>
      <Follow/>
      <Flow/>
    </>

    const DialogElement: React.FunctionComponent<any> = this.state.dialogElement;

    const formTabs = this.state.recordAtIndex === 0 ? [
      {id: '0', name: 'Summary'},
      {id: '1', name: 'Details'},
      {id: '2', name: 'Related'},
    ] : [
      {id: '0', name: 'Summary'},
      {id: '1', name: 'Product line items'},
      {id: '2', name: 'Quotes'},
      {id: '3', name: 'Field service'},
      {id: '4', name: 'Related'},
    ];

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
              {commands}
            </div>
            <FormHeader inlineModeBreakpoint="600px" {...formHeaderProps}/>
          </div>
          <div className="page-center-bottom">
            <div className="tabs-container">
              {formTabs.map(tab => <button onClick={() => this.setState({selectedTabId: tab.id})} key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`}>{tab.name}</button>)}
            </div>
            <div className="form-tab">
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
                  <label className="ff__key">Business Phone</label>
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
              {this.state.selectedTabId !== '-1' && this.state.recordAtIndex !== 0 && <div className="form-section">
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
                  <input className="ff__value" type="text" defaultValue={this.state.estimatedBudget}/>
                </div>
                <div className="ff">
                  <label className="ff__key">Est. Close Date</label>
                  <input className="ff__value" type="date" defaultValue="2019-05-20"/>
                </div>
                <div className="ff">
                  <label className="ff__key">Est. Revenue</label>
                  <input className="ff__value" type="text" defaultValue="$290,000.00"/>
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
              <div className="form-section"><Details/></div>
              <div className="form-section"><Subgrids/></div>
              <div className="form-section"><RelationshipAssistant/></div>
              <div className="form-section"><Timeline/></div>
            </div>
          </div>
        </Scrollbars>
        <Scrollbars
          className="page-right"
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
        >
          <h1 className="process-title">{this.state.processName}<span className="switch-process-inline"> (<button className="switch-process-btn" onClick={this.onOpenSwitchProcessDialog}>switch</button>)</span></h1>
          <BusinessProcessFlow className="business-process-flow" {...businessProcessFlowProps as BusinessProcessFlowProps} stages={[
            {
              name: `Qualify ${this.state.recordAtIndex === 0 ? ` (active 5 days)` : ``}${0 < this.state.recordAtIndex && this.state.userSelectedIndex === 0 ? ` (completed 3 min ago)` : ''}`,
              content: this.QualifyStage
            },
            {
              name: `Develop ${this.state.recordAtIndex === 1 ? ` (active 2 min)` : ``}${1 < this.state.recordAtIndex && this.state.userSelectedIndex === 1 ? ` (completed 2 min ago)` : ''}`,
              content: this.DevelopStage,
            },
            {
              name: `Propose ${this.state.recordAtIndex === 2 ? ` (active 2 min)` : ``}${2 < this.state.recordAtIndex && this.state.userSelectedIndex === 2 ? ` (completed 1 min ago)` : ''}`, 
              content: this.ProposeStage,
            },
            {
              name: `Close ${this.state.recordAtIndex === 3 ? ` (active 1 min)` : ``}${3 < this.state.recordAtIndex && this.state.userSelectedIndex === 3 ? ` (completed just now)` : ''}`,
              content: this.CloseStage,
            },
          ]}/>
        </Scrollbars>
      </div>
      {this.state.dialogElement && <div className="dialog"><DialogElement state={this.state}/></div>}
    </StyledApp>
  }

  onSelectStage = (index: number) => this.setState({userSelectedIndex: index === this.state.userSelectedIndex ? null : index});

  onCompleteStage = () => {
    this.setState((state: any) => {
      let isValid = true;
      if (this.qualifyStageFormRef.current) {
        this.qualifyStageFormRef.current!.reportValidity();
        isValid = this.estimatedBudgetRef.current!.checkValidity();
      }

      if (isValid) {
        const recordAtIndex =  Math.min(state.stages.length, state.recordAtIndex + 1);
        const userSelectedIndex = recordAtIndex < state.stages.length ? recordAtIndex : null;
        return {recordAtIndex, userSelectedIndex}
      } else {
        return null;
      }
    });
  }

  onMoveRecordToStage = (index: number) => {
    if (index > 0 && this.state.estimatedBudget === '') {
      this.onSelectStage(0);
      window.setTimeout(() => this.onCompleteStage(), 200);
    } else {
      this.setState({recordAtIndex: index});
    }
  }

  onOpenSwitchProcessDialog = () => {
    this.setState({dialogElement: this.SwitchProcessDialog});
  }

  onSwitchProcessSubmit = (e: any) => {
    e.preventDefault();
    this.setState({dialogElement: null, dialogSelectedProcessIndex: this.state.dialogSelectingProcessIndex, processName: this.state.switchProcessOptions[this.state.dialogSelectingProcessIndex]});
  }
  
  onSwitchProcessCancel = (e: any) => {
    this.setState({dialogElement: null, dialogSelectingProcessIndex: this.state.dialogSelectedProcessIndex});
  }

  onSelectProcess = (index: number) => {
    this.setState({dialogSelectingProcessIndex: index});
  }

  SwitchProcessDialog: React.FunctionComponent<any> = (state: any) => <form className="dialog__box" onSubmit={e => this.onSwitchProcessSubmit(e)}>
  <h1 className="dialog__header">Choose a process</h1>
  <div className="dialog__main">
    {this.state.switchProcessOptions.map((option: string, index: number) => <div className="switch-process-option" key={option}>
      <label><input type="radio" checked={index === this.state.dialogSelectingProcessIndex} onChange={e => this.onSelectProcess(index)}/>{option}</label>
    </div>)}
  </div>
  <div className="dialog__footer btn-group">
    <button className="btn btn--primary">Confirm</button>
    <button className="btn btn--secondary" onClick={this.onSwitchProcessCancel}>Cancel</button>
  </div>
  </form>

  QualifyStage: React.FunctionComponent<any> = () => <form ref={this.qualifyStageFormRef}className="form-section form-section--borderless">
    <div className="ff">
      <label htmlFor="contact" className="ff__key">Existing contact</label>
      <a id="contact" className="ff__value">{this.state.contact}</a>
    </div>
    <div className="ff">
      <label htmlFor="account" className="ff__key">Existing account</label>
      <a id="account" className="ff__value">{this.state.account}</a>
    </div>
    <div className="ff">
      <label htmlFor="purchaseTimeframe" className="ff__key">Purchase timeframe</label>
      <select id="purchaseTimeframe" className="ff__value" value={this.state.purchaseTimeframe} onChange={e => this.setState({purchaseTimeframe: e.target.value})}>
        <option value="" disabled>--select--</option>
        <option value="Immediate">Immediate</option>
        <option value="This quarter">This quarter</option>
        <option value="Next quarter">Next quarter</option>
        <option value="This year">This year</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
    <div className="ff">
      <label htmlFor="estimatedBudgetRef" className="ff__key">Estimated budget<span className="ff__asterisk">*</span></label>
      <input id="estimatedBudgetRef" className="ff__value" ref={this.estimatedBudgetRef} required type="text" placeholder="---" value={this.state.estimatedBudget} onChange={e => this.setState({estimatedBudget: e.target.value})}/>
    </div>
    <div className="ff">
      <label htmlFor="purchaseProcess" className="ff__key">Purchase process</label>
      <select id="purchaseProcess" className="ff__value" value={this.state.purchaseProcess} onChange={e => this.setState({purchaseProcess: e.target.value})}>
        <option value="" disabled>--select--</option>
        <option value="Individual">Individual</option>
        <option value="Commitee">Committee</option>
        <option value="Unknown">Unknown</option>
      </select>
    </div>
    <div className="ff">
      <label htmlFor="identifyDecisionMaker" className="ff__key">Identify decision maker</label>
      <input id="identifyDecisionMaker" className="ff__value" type="checkbox" checked={this.state.identifyDecisionMaker} onChange={e => this.setState({identifyDecisionMaker: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="captureSummary" className="ff__key">Capture summary</label>
      <textarea id="captureSummary" className="ff__value" placeholder="---" value={this.state.captureSummary} onChange={e => this.setState({captureSummary: e.target.value})}/>
    </div>
  </form>

  DevelopStage: React.FunctionComponent<any> = () => <div className="form-section form-section--borderless">
    <div className="ff">
      <label htmlFor="customerNeed" className="ff__key">Customer need</label>
      <input id="customerNeed" className="ff__value" type="text" placeholder="---" value={this.state.customerNeed} onChange={e => this.setState({customerNeed: e.target.value})} />
    </div>
    <div className="ff">
      <label htmlFor="proposedSolution" className="ff__key">Proposed solution</label>
      <input id="proposedSolution" className="ff__value" type="text" placeholder="---" value={this.state.proposedSolution} onChange={e => this.setState({proposedSolution: e.target.value})} />
    </div>
    <div className="ff">
      <label htmlFor="identifyStakeholders" className="ff__key">Identify stakeholders</label>
      <input id="identifyStakeholders" className="ff__value" type="checkbox" checked={this.state.identifyStakeholders} onChange={e => this.setState({identifyStakeholders: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="identifyCompetitors" className="ff__key">Identify competitors</label>
      <input id="identifyCompetitors" className="ff__value" type="checkbox" checked={this.state.identifyCompetitors} onChange={e => this.setState({identifyCompetitors: e.target.checked})}/>
    </div>
  </div>

  ProposeStage: React.FunctionComponent<any> = () => <div className="form-section form-section--borderless">
    <div className="ff">
      <label htmlFor="identifySalesTeam" className="ff__key">Identify sales team</label>
      <input id="identifySalesTeam" className="ff__value" type="checkbox" checked={this.state.identifySalesTeam} onChange={e => this.setState({identifySalesTeam: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="developProposal" className="ff__key">Develop proposal</label>
      <input id="developProposal" className="ff__value" type="checkbox" checked={this.state.developProposal} onChange={e => this.setState({developProposal: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="completeInternalReview" className="ff__key">Complete internal review</label>
      <input id="completeInternalReview" className="ff__value" type="checkbox" checked={this.state.completeInternalReview} onChange={e => this.setState({completeInternalReview: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="presentPropsal" className="ff__key">Present proposal</label>
      <input id="presentPropsal" className="ff__value" type="checkbox" checked={this.state.presentPropsal} onChange={e => this.setState({presentPropsal: e.target.checked})}/>
    </div>
  </div>

  CloseStage: React.FunctionComponent<any> = () => <div className="form-section form-section--borderless">
    <div className="ff">
      <label htmlFor="completeFinalPropsal" className="ff__key">Complete final proposal</label>
      <input id="completeFinalPropsal" className="ff__value" type="checkbox" checked={this.state.completeFinalPropsal} onChange={e => this.setState({completeFinalPropsal: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="presentFinalProposal" className="ff__key">Present final proposal</label>
      <input id="presentFinalProposal" className="ff__value" type="checkbox" checked={this.state.presentFinalProposal} onChange={e => this.setState({presentFinalProposal: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="confirmDecisionDate" className="ff__key">Confirm decision date</label>
      <input id="confirmDecisionDate" className="ff__value" type="date" value={this.state.confirmDecisionDate} onChange={e => this.setState({confirmDecisionDate: e.target.value})}/>
    </div>
    <div className="ff">
      <label htmlFor="sendThankYou" className="ff__key">Send thank you</label>
      <input id="sendThankYou" className="ff__value" type="checkbox" checked={this.state.sendThankYou} onChange={e => this.setState({sendThankYou: e.target.checked})}/>
    </div>
    <div className="ff">
      <label htmlFor="fileDebrief" className="ff__key">File de-brief</label>
      <input id="fileDebrief" className="ff__value" type="checkbox" checked={this.state.fileDebrief} onChange={e => this.setState({fileDebrief: e.target.checked})}/>
    </div>
  </div>
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

  .form-tab {
    padding: 20px;
    column-gap: 20px;
  }

  @media screen and (min-width: 1400px) {
    .form-tab {
      column-count: 2;
    }
  }
  
  @media screen and (min-width: 1880px) {
    .form-tab {
      column-count: 3;
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

  .form-section--borderless {
    border: none;
  }

  .form-section--mock {
    padding: 0;
  }

  .form-section--process {
    padding: 4px 12px;
  }

  .process-title {
    font: var(--fw-semibold) var(--scale-20)/var(--scale-24) var(--ff-segoe-ui);
    margin: 16px 20px 20px 20px;
  }

  .tabs-container {
    padding: 16px 20px 0 20px;
    white-space: nowrap;
  }

  .thumb-vertical {
    z-index: 600;
  }

  .business-process-flow {
    margin: 0 20px 20px 20px;
  }

  .switch-process-inline {
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
  }

  .switch-process-btn {
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