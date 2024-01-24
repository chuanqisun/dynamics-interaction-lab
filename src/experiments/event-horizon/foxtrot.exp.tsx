import * as React from "react";
import styled, { keyframes } from "styled-components";
import "../../components/button/button.css";
import { FullMdl2 } from "../../styles/icon/full-mdl2";

export interface Stage {
  name: string;
}

export interface BusinessProcessFlowProps {
  className?: string;
  stages: Stage[];
  userSelectedIndex: number;
  recordAtIndex: number;
  leadingProgressBarWidthInPixel: number;
  onSelectStage: (stageIndex: number) => void;
  onMoveRecordToStage: (stageIndex: number) => void;
  onCompleteStage: () => void;
}

export const BusinessProcessFlow: React.FunctionComponent<BusinessProcessFlowProps> = (props) => {
  return (
    <StyledNav className={props.className} leadingProgressBarWidthInPixel={props.leadingProgressBarWidthInPixel}>
      {props.stages.map((stage: any, index: number) => (
        <React.Fragment key={index}>
          {index < props.stages.length ? (
            <div
              className={[
                `progress-bar`,
                index === 0 ? " progress-bar--start" : "",
                index < props.recordAtIndex ? " progress-bar--filled" : "",
                index === props.recordAtIndex ? " progress-bar--filled" : "",
                index > props.recordAtIndex ? " progress-bar--empty" : "",
              ].join("")}
            ></div>
          ) : null}
          <button
            onClick={() => props.onSelectStage(index)}
            className={[
              `node`,
              index === props.userSelectedIndex ? " node--user-selected" : "",
              index === props.recordAtIndex ? " node--record-at" : "",
              index < props.recordAtIndex ? " node--record-competed" : "",
            ].join("")}
          >
            {index < props.recordAtIndex && <span className="node__checkmark mdl2">{FullMdl2.CheckMark}</span>}
            {index === props.recordAtIndex && <span className="node__checkmark mdl2">{FullMdl2.POI}</span>}
            <span className="node__stage-name">{stage.name}</span>
          </button>
        </React.Fragment>
      ))}
    </StyledNav>
  );
};

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      stages: [{ name: "Screen" }, { name: "Qualify" }, { name: "Develop" }, { name: "Connect" }, { name: "Propose" }, { name: "Close" }, { name: "Archive" }],
      userSelectedIndex: 2,
      recordAtIndex: 2,
      onSelectStage: this.onSelectStage,
      onCompleteStage: this.onCompleteStage,
      onMoveRecordToStage: this.onMoveRecordToStage,
      leadingProgressBarWidthInPixel: 0,
    };
  }

  onSelectStage = (index: number) => this.setState({ userSelectedIndex: index === this.state.userSelectedIndex ? null : index });

  rollBackStage = () => this.setState({ recordAtIndex: Math.max(0, this.state.recordAtIndex - 1) });

  advanceStage = () => this.setState({ recordAtIndex: Math.min(this.state.stages.length, this.state.recordAtIndex + 1) });

  onCompleteStage = () => {
    const recordAtIndex = Math.min(this.state.stages.length, this.state.recordAtIndex + 1);
    const userSelectedIndex = recordAtIndex < this.state.stages.length ? recordAtIndex : null;
    this.setState({ recordAtIndex, userSelectedIndex });
  };

  onMoveRecordToStage = (index: number) => this.setState({ recordAtIndex: index });

  render() {
    return (
      <StyledSection>
        <h2>Sample</h2>
        <BusinessProcessFlow {...(this.state as BusinessProcessFlowProps)} />
        <h2>Design notes</h2>
        <li>
          <button onClick={this.rollBackStage}>Roll back stage</button>
          <button onClick={this.advanceStage}>Advance stage</button>
        </li>
        <li>
          {this.state.userSelectedIndex === null ? "User is not viewing any stage" : `User is viewing ${this.state.stages[this.state.userSelectedIndex].name}`}
        </li>
        <li>
          {this.state.recordAtIndex < this.state.stages.length
            ? `Record is at "${this.state.stages[this.state.recordAtIndex].name}"`
            : `Record has finished all stages`}
        </li>
        <li>
          <label>Progress bar 0th segement width</label>
          <input
            style={{ width: "64px" }}
            type="number"
            value={this.state.leadingProgressBarWidthInPixel}
            onChange={(e) => this.setState({ leadingProgressBarWidthInPixel: e.target.value })}
          />
          px
        </li>
      </StyledSection>
    );
  }
}

const pulse = keyframes`
  0% {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(34, 102, 227, 0.8);
  }
  35% {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 10px rgba(34, 102, 227, 0);
  }
  100% {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12), 0 0 0 0 rgba(34, 102, 227, 0);
  }
`;

const StyledSection = styled.section`
  padding: 24px;
`;

const StyledNav: any = styled.nav`
  --green: #107C10;
  --off-black: #3A3C42;
  --light-grey: #A4A6AC;

  --ms-depth-4: 0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108);
  --ms-depth-8: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
  --ms-depth-16: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);

  --leading-progress-bar-width: ${(props: BusinessProcessFlowProps) => `${props.leadingProgressBarWidthInPixel ? props.leadingProgressBarWidthInPixel : "0"}px`}
  
  display: flex;
  align-items: center;

  .node {
    --border-fg: transparent;
    --checkmark-fg: white;
    --checkmark-bg: var(--green);
    --full-bg: white;
    --stage-name-padding: 0 6px; /* 8px padding with 2px border width */
    --text-color: var(--off-black);
    --box-shadow: var(--ms-depth-4);

    appearance: none;
    background-color: var(--full-bg);
    border: none;
    border-radius: 12px;
    box-shadow: var(--box-shadow);
    cursor: pointer;
    display: flex;
    height: 24px;
    outline: none; /* to be replaced by focus-visible */
    padding: 0;
    position: relative;
    white-space: nowrap;
    transition: background-color 200ms, box-shadow 200ms;
  }

  .node:hover {
    --box-shadow: var(--ms-depth-16);
  }

  .node--record-competed {
    --text-color: var(--green);

    .node__checkmark {
      background-color: var(--checkmark-bg);
    }
    .node__stage-name {
      margin-left: -2px; /* offset to tuck the border under the left icon area */
      padding-left: 8px; /* increase from 6 to 8 to accommondate the offset above */
      border-radius: 0 12px 12px 0;
    }
  }

  .node--record-at {
    --text-color: var(--green);
    --checkmark-fg: var(--green);
    --checkmark-bg: white;

    .node__checkmark {
      background-color: var(--checkmark-bg);
      border: 2px solid transparent;
      box-sizing: border-box;
      border-right: none;
    }

    .node__stage-name {
      padding-left: 0;
      border-radius: 0 12px 12px 0;
      border-left: none;
    }
  }

  .node--user-selected {
    --box-shadow: var(--ms-depth-8);
    --border-fg: var(--text-color);

    :hover {
      --box-shadow: var(--ms-depth-8);
    }

    .node__stage-name {
      border-color: var(--border-fg);
    }

    .node__checkmark {
      border-color: var(--green);
    }
  }

  .node__checkmark {
    color: var(--checkmark-fg);
    display: inline-block;
    height: 24px;
    width: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px 0 0 12px;
    transition: background-color 200ms, border-color 200ms;
    font-size: 16px;
  }

  .node__stage-name {
    color: var(--text-color);
    font: var(--fw-semibold) var(--scale-14)/var(--scale-14) var(--ff-segoe-ui);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;
    height: 24px;
    box-sizing: border-box;
    border-radius: 12px;
    padding: var(--stage-name-padding);
    transition: color 200ms, background-color 200ms, border-color 200ms;
  }

  .progress-bar {
    max-width: 40px;
    min-width: 20px;
    flex: 1 0 20px;
    height: 2px;
    margin: 0 -2px; /* offset 2px so the bar joins the curved node without a gap */
  }

  .progress-bar--start {
    min-width: calc(2px + var(--leading-progress-bar-width));
    max-width: calc(2px + var(--leading-progress-bar-width));
    margin: 0 -2px 0 0;
  }

  .progress-bar--filled {
    background-color: var(--green);
  }

  .progress-bar--empty {
    background-color: var(--light-grey);
  }
`;

export default BusinessProcessExperiment;
