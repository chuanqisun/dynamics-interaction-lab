import * as React from 'React';
import styled from 'styled-components';

import {AppShell} from '../../components/app-shell/app-shell';
import {appShellDemoProps} from '../../components/app-shell/app-shell.demo';
import {SideNav} from '../../components/side-nav/side-nav';
import {FormHeader} from '../../components/form-header/form-header';
import {BusinessProcessFlow, BusinessProcessFlowProps} from '../event-horizon/charlie.exp';
import Scrollbars  from 'react-custom-scrollbars';

/* dialog */
import './modal-dialog.css';
import '../../components/button/button.css';

/* form tabs */
import '../../components/form-tabs/form-tabs.css';

/* side nav */
import {FullMdl2} from '../../styles/icon/full-mdl2';

/* form sections */
import Subgrids from '../markov-chain/FormSectionMocks/Subgrids.svg';
import RelationshipAssistant from '../markov-chain/FormSectionMocks/RelationshipAssistant.svg';
import Timeline from '../markov-chain/FormSectionMocks/Timeline.svg';
import Details from '../markov-chain/FormSectionMocks/Details.svg';

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

/* form field */
import './form-field.css';
import '../../styles/fluent-for-dynamics.css';

export class BusinessProcessExperiment extends React.Component<any, any> {

  private estimatedBudgetRef = React.createRef<HTMLInputElement>();
  private qualifyStageFormRef = React.createRef<HTMLFormElement>();

  constructor(props: any) {
    super(props);

    this.state = {
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
      /* form tabs */
      selectedTabId: '0',
      /* bpf */
      processName: 'Lead to opportunity process',
      stages: [
        {name: 'Qualify'},
        {name: 'Develop'},
        {name: 'Propose'},
        {name: 'Close'},
      ],
      userSelectedIndex: null,
      recordAtIndex: 0,
      onSelectStage: this.onSelectStage,
      onCompleteStage: this.onCompleteStage,
      onMoveRecordToStage: this.onMoveRecordToStage,
      /* form header */
      formSwitcherSelectedIndex: 0,
      onFormSwitch: (index: number) => this.setState({formSwitcherSelectedIndex: index}),
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
      /*dialog*/
      dialogElement: null,
      switchProcessOptions: [
        'Lead to opportunity process',
        'Opportunity sales process',
      ],
      dialogSelectedProcessIndex: 0,
      dialogSelectingProcessIndex: 0,
    };
  }

  render() {
    const {selectedTabId, ...businessProcessFlowProps} = this.state;
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
            <FormHeader className="form-header" inlineModeBreakpoint="600px" {...formHeaderProps}/>
            <BusinessProcessFlow className="business-process-flow" {...businessProcessFlowProps as BusinessProcessFlowProps}/>
          </div>
          <div className="page-center-bottom">
            <div className="tabs-container">
              {formTabs.map(tab => <button onClick={() => this.setState({selectedTabId: tab.id, userSelectedIndex: null})} key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? ' tab--selected' : ''}`}>{tab.name}</button>)}
            </div>
            <div className={`form-tab${this.state.selectedTabId === '-1' ? ' form-tab--process' : ''}`}>
              {/*BPF: all stages*/}
              {this.state.selectedTabId === '-1' && <div className="form-section form-section--process">
                <div className="ft">{this.state.processName}<span className="switch-process-inline"> (<button className="switch-process-btn" onClick={this.onOpenSwitchProcessDialog}>switch</button>)</span></div>
                {this.state.userSelectedIndex < this.state.recordAtIndex && <span className="process-attribute">Stage complete {14 - 2 * this.state.userSelectedIndex} days ago</span>}
                {this.state.userSelectedIndex === this.state.recordAtIndex && <span className="process-attribute">Stage active for {8 - this.state.userSelectedIndex} days</span>}

                <div className="process-actions">
                  {this.state.userSelectedIndex < this.state.recordAtIndex && <button className="process-action-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>Rollback to “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                  {this.state.userSelectedIndex === this.state.recordAtIndex && this.state.recordAtIndex < this.state.stages.length - 1 && <button className="process-action-btn process-action-btn--primary" onClick={this.onCompleteStage}>Complete stage</button>}
                  {this.state.userSelectedIndex === this.state.recordAtIndex && this.state.recordAtIndex === this.state.stages.length - 1 &&  <button className="process-action-btn process-action-btn--primary" onClick={this.onCompleteStage}>Finish process</button>}
                  {this.state.userSelectedIndex > this.state.recordAtIndex && <button className="process-action-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>Skip to “{this.state.stages[this.state.userSelectedIndex].name}”</button>}
                </div>
              </div>}
              {/*BPF: Qualify stage*/}              
              {this.state.selectedTabId === '-1' && this.state.userSelectedIndex === 0 && <form ref={this.qualifyStageFormRef}className="form-section">
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
              </form>}
              {/*BPF: Develop stage */}                            
              {this.state.selectedTabId === '-1' && this.state.userSelectedIndex === 1 && <div className="form-section">
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
              </div>}
              {/*BPF: Propose stage */}                            
              {this.state.selectedTabId === '-1' && this.state.userSelectedIndex === 2 && <div className="form-section">
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
              </div>}
              {/*BPF: Close stage */}                            
              {this.state.selectedTabId === '-1' && this.state.userSelectedIndex === 3 && <div className="form-section">
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
                  <a className="ff__value">US Dollay</a>
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
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><Details/></div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><Subgrids/></div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><RelationshipAssistant/></div>}
              {this.state.selectedTabId !== '-1' && <div className="form-section form-section--mock"><Timeline/></div>}
            </div>
          </div>
        </Scrollbars>
      </div>
      {this.state.dialogElement && <div className="dialog"><DialogElement state={this.state}/></div>}
    </StyledApp>
  }

  onSelectStage = (index: number) => this.setState((state: any) => ({userSelectedIndex: index, selectedTabId: '-1'}));

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
        const selectedTabId = userSelectedIndex === null ? '0' : state.selectedTabId;
        return {recordAtIndex, userSelectedIndex, selectedTabId}
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

  .form-tab--process {
    column-count: initial;
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
    font: var(--fw-normal) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
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

  .switch-process-inline {
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
  }

  .process-action-btn {
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

  .process-action-btn:hover {
    box-shadow: var(--depth-2);
    background-color: var(--light-grey);
  }

  .process-action-btn--primary {
    background-color: var(--brand-primary);
    color: white;
  }

  .process-action-btn--primary:hover {
    background-color: var(--brand-primary-darken);
  }

  .process-action-btn + .process-action-btn {
    margin-left: 12px;
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

  .switch-process-option {
    label {
      display: flex;
      align-items: center;
    }

    input {
      width: 18px;
      height: 18px;
    }
  }

  .switch-process-option + .switch-process-option {
    margin-top: 8px;
  } 
`;

export default BusinessProcessExperiment;