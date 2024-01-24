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
import { BusinessProcessFlow, BusinessProcessFlowProps } from "../fast-fourier/golf.exp";

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
      selectedTabId: "0",
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
              <FormHeader inlineModeBreakpoint="600px" {...formHeaderProps} />
            </div>
            <div className="page-center-bottom">
              <div className="tabs-container">
                {formTabsDemoProps.tabs.map((tab) => (
                  <button key={tab.id} className={`tab${tab.id === this.state.selectedTabId ? " tab--selected" : ""}`}>
                    {tab.name}
                  </button>
                ))}
              </div>
              <div className="form-tab">
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
          <Scrollbars className="page-right" autoHide autoHideTimeout={1000} autoHideDuration={200}>
            <h1 className="process-title">
              Lead to opportunity process{" "}
              <span className="switch-process">
                (<button className="switch-button">switch</button>)
              </span>
            </h1>
            <BusinessProcessFlow className="business-process-flow" {...(businessProcessFlowProps as BusinessProcessFlowProps)} />
          </Scrollbars>
        </div>
      </StyledApp>
    );
  }

  onSelectStage = (index: number) => this.setState({ userSelectedIndex: index === this.state.userSelectedIndex ? null : index });

  onCompleteStage = () => {
    const recordAtIndex = Math.min(this.state.stages.length, this.state.recordAtIndex + 1);
    const userSelectedIndex = recordAtIndex < this.state.stages.length ? recordAtIndex : null;
    this.setState({ recordAtIndex, userSelectedIndex });
  };

  onMoveRecordToStage = (index: number) => this.setState({ recordAtIndex: index });
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
    border: 1px solid #cbcbcb;
    margin-bottom: 20px;
    break-inside: avoid-column;
  }

  .process-title {
    font: var(--fw-semibold) var(--scale-20) / var(--scale-24) var(--ff-segoe-ui);
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

  .switch-process {
    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);
  }

  .switch-button {
    font: var(--fw-semibold) var(--scale-14) / var(--scale-20) var(--ff-segoe-ui);
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
