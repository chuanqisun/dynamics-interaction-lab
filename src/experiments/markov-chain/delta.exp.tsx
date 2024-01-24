import * as React from "react";
import styled from "styled-components";

import { AppShell } from "../../components/app-shell/app-shell";
import { appShellDemoProps } from "../../components/app-shell/app-shell.demo";

import { SideNav } from "../../components/side-nav/side-nav";
import { sideNavDemoProps } from "../../components/side-nav/side-nav.demo";

import { FormHeader } from "../../components/form-header/form-header";
import { formHeaderDemoProps } from "../../components/form-header/form-header.demo";

import { formTabsDemoProps } from "../../components/form-tabs/form-tabs.demo";

import Scrollbars from "react-custom-scrollbars";
import { BusinessProcessFlow, BusinessProcessFlowProps } from "../event-horizon/charlie.exp";

/* form sections */
import Details from "./FormSectionMocks/Details.svg";
import RelationshipAssistant from "./FormSectionMocks/RelationshipAssistant.svg";
import Subgrids from "./FormSectionMocks/Subgrids.svg";
import Summary from "./FormSectionMocks/Summary.svg";
import Timeline from "./FormSectionMocks/Timeline.svg";

/* command */
import Assign from "./CommandMocks/Assign.svg";
import CloseAsLost from "./CommandMocks/CloseAsLost.svg";
import CloseAsWon from "./CommandMocks/CloseAsWon.svg";
import EmailALink from "./CommandMocks/EmailALink.svg";
import New from "./CommandMocks/New.svg";
import Process from "./CommandMocks/Process.svg";
import RecalculateOpportunity from "./CommandMocks/RecalculateOpportunity.svg";
import RecordSet from "./CommandMocks/RecordSet.svg";
import Refresh from "./CommandMocks/Refresh.svg";

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedTabId: "-1",
      stages: [{ name: "Screen" }, { name: "Qualify" }, { name: "Develop" }, { name: "Connect" }, { name: "Propose" }, { name: "Close" }, { name: "Archive" }],
      userSelectedIndex: 2,
      recordAtIndex: 2,
      onSelectStage: this.onSelectStage,
      onCompleteStage: this.onCompleteStage,
      onMoveRecordToStage: this.onMoveRecordToStage,
    };
  }

  render() {
    const { selectedTabId, ...businessProcessFlowProps } = this.state;
    const formHeaderProps = { ...formHeaderDemoProps, isContentEditable: false };

    return (
      <StyledApp>
        <div className="top">
          <AppShell {...appShellDemoProps} />
        </div>
        <div className="bottom">
          <div className="bottom-left">
            <SideNav {...sideNavDemoProps} />
          </div>
          <Scrollbars className="page-center" autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <div className="page-center-top">
              <div className="command-bar-container">
                <RecordSet />
                <New />
                <Refresh />
                <CloseAsWon />
                <CloseAsLost />
                <RecalculateOpportunity />
                <Process />
                <Assign />
                <EmailALink />
              </div>
              <FormHeader className="form-header" inlineModeBreakpoint="600px" {...formHeaderProps} />
              <BusinessProcessFlow className="business-process-flow" {...(businessProcessFlowProps as BusinessProcessFlowProps)} />
            </div>
            <div className="page-center-bottom">
              <div className="tabs-container">
                <button onClick={() => this.setState({ selectedTabId: "-1" })} className={`tab${this.state.selectedTabId === "-1" ? " tab--selected" : ""}`}>
                  {this.state.stages[this.state.userSelectedIndex].name}
                </button>
                {formTabsDemoProps.tabs.map((tab) => (
                  <button
                    onClick={() => this.setState({ selectedTabId: tab.id })}
                    key={tab.id}
                    className={`tab${tab.id === this.state.selectedTabId ? " tab--selected" : ""}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="form-tab">
                {this.state.selectedTabId === "-1" && (
                  <div className="form-section form-section--process">
                    <h1 className="process-name">Lead to opportunity process</h1>
                    <span className="process-attribute">Process started 24 days ago</span>
                    <span className="process-attribute-separator">·</span>
                    {this.state.userSelectedIndex < this.state.recordAtIndex && (
                      <span className="process-attribute">
                        Completed “{this.state.stages[this.state.userSelectedIndex].name}” {14 - 2 * this.state.userSelectedIndex} days ago
                      </span>
                    )}
                    {this.state.userSelectedIndex === this.state.recordAtIndex && (
                      <span className="process-attribute">In “{this.state.stages[this.state.userSelectedIndex].name}” for 3 days</span>
                    )}

                    <div className="process-actions">
                      {this.state.userSelectedIndex < this.state.recordAtIndex && (
                        <button className="switch-process-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>
                          Rollback to “{this.state.stages[this.state.userSelectedIndex].name}”
                        </button>
                      )}
                      {this.state.userSelectedIndex === this.state.recordAtIndex && (
                        <button className="switch-process-btn switch-process-btn--primary" onClick={this.onCompleteStage}>
                          Complete “{this.state.stages[this.state.userSelectedIndex].name}”
                        </button>
                      )}
                      {this.state.userSelectedIndex > this.state.recordAtIndex && (
                        <button className="switch-process-btn" onClick={() => this.onMoveRecordToStage(this.state.userSelectedIndex)}>
                          Skip to “{this.state.stages[this.state.userSelectedIndex].name}”
                        </button>
                      )}
                      <button className="switch-process-btn">Switch process</button>
                    </div>
                  </div>
                )}
                <div className="form-section">
                  <Summary />
                </div>
                <div className="form-section">
                  <Details />
                </div>
                <div className="form-section">
                  <Subgrids />
                </div>
                <div className="form-section">
                  <RelationshipAssistant />
                </div>
                <div className="form-section">
                  <Timeline />
                </div>
              </div>
            </div>
          </Scrollbars>
        </div>
      </StyledApp>
    );
  }

  onSelectStage = (index: number) => this.setState({ userSelectedIndex: index, selectedTabId: "-1" });

  onCompleteStage = () => {
    const recordAtIndex = Math.min(this.state.stages.length, this.state.recordAtIndex + 1);
    const userSelectedIndex = recordAtIndex < this.state.stages.length ? recordAtIndex : null;
    this.setState({ recordAtIndex, userSelectedIndex });
  };

  onMoveRecordToStage = (index: number) => this.setState({ recordAtIndex: index });
}

const StyledApp = styled.div`
  --brand-primary: #2266e3;
  --brand-primary-darken: #1b52b6;
  --light-grey: #f8f8f9;

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
    border-bottom: 1px solid #cdcdcd;
    height: 42px;
    overflow: hidden;
    background: white;
  }

  .page-right {
    flex: 0 0 352px;
    width: 352px;
    border-left: 1px solid #cdcdcd;
    overflow: auto;
    height: 100%;
    box-sizing: border-box;
    background-color: #f8f8f8;
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
    border: 1px solid #cbcbcb;
    margin-bottom: 20px;
    break-inside: avoid-column;
  }

  .form-section--process {
    padding: 4px 12px;
  }

  .process-name {
    font: var(--fw-semibold) var(--scale-20) / var(--scale-24) var(--ff-segoe-ui);
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
    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);
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
