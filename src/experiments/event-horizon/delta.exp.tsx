import * as React from 'React';
import styled, {keyframes} from 'styled-components';
import { FullMdl2 } from '../../styles/icon/full-mdl2';
import '../../components/button/button.css';


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
  return <StyledNav className={props.className}>
  {props.stages.map((stage: any, index: number) => 
  <React.Fragment key={index}>
    {index < props.stages.length ? <div className={[
      `progress-bar`,
      index === 0 ? ' progress-bar--start' : '',
      index < props.recordAtIndex ? ' progress-bar--filled' : '',
      index === props.recordAtIndex ? ' progress-bar--filled' : '',
      index > props.recordAtIndex ? ' progress-bar--empty' : '',
    ].join('')}></div> : null}
    <button onClick={() => props.onSelectStage(index)} className={[
        `node`,
        index === props.userSelectedIndex ? ' node--user-selected' : '',
        index === props.recordAtIndex ? ' node--record-at' : '',
        index < props.recordAtIndex ? ' node--record-competed' : ''
      ].join('')}>
      {index < props.recordAtIndex && <span className="node__checkmark mdl2">{FullMdl2.CheckMark}</span>}
      {index === props.recordAtIndex && <span className="node__checkmark mdl2">{FullMdl2.POI}</span>}
      <span className="node__stage-name">{stage.name}</span>
    </button>      
  </React.Fragment>)}
</StyledNav>
}

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
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

  onSelectStage = (index: number) => this.setState({userSelectedIndex: index === this.state.userSelectedIndex ? null : index});

  rollBackStage = () => this.setState({recordAtIndex: Math.max(0, this.state.recordAtIndex - 1)});

  advanceStage = () => this.setState({recordAtIndex: Math.min(this.state.stages.length, this.state.recordAtIndex + 1)});

  onCompleteStage = () => {
    const recordAtIndex =  Math.min(this.state.stages.length, this.state.recordAtIndex + 1);
    const userSelectedIndex = recordAtIndex < this.state.stages.length ? recordAtIndex : null;
    this.setState({recordAtIndex, userSelectedIndex});
  }

  onMoveRecordToStage = (index: number) => this.setState({recordAtIndex: index});

  render() {

    return <StyledSection>
    <h2>Sample</h2>
    <BusinessProcessFlow {...this.state as BusinessProcessFlowProps}/>
    <h2>Design notes</h2>
    <li><button onClick={this.rollBackStage}>Roll back stage</button><button onClick={this.advanceStage}>Advance stage</button></li>
    <li>{this.state.userSelectedIndex === null ? 'User is not viewing any stage' : `User is viewing ${this.state.stages[this.state.userSelectedIndex].name}`}</li>
    <li>{this.state.recordAtIndex < this.state.stages.length ? `Record is at "${this.state.stages[this.state.recordAtIndex].name}"` : `Record has finished all stages`}</li>
    </StyledSection>
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

const StyledNav = styled.nav`
  --brand-primary: #2266E3;
  --brand-primary-darken: #1B52B6;
  --light-grey: #F8F8F9;
  --material-shadow-d1: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  --material-shadow-d2: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  --material-shadow-d3: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

  --ms-depth-4: 0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108);
  --ms-depth-8: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
  --ms-depth-16: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);

  --leading-progress-bar-width: ${(props: BusinessProcessFlowProps) => `${props.leadingProgressBarWidthInPixel ? props.leadingProgressBarWidthInPixel : '0'}px`}
  
  display: flex;
  align-items: center;

  .node {
    --border-fg: transparent;
    --checkmark-fg: white;
    --checkmark-bg: var(--brand-primary);
    --full-bg: white;
    --stage-name-padding: 0 8px;
    --text-color: var(--brand-primary);
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

  .node--record-at,
  .node--record-competed {
    .node__checkmark {
      background-color: var(--checkmark-bg);
    }
    .node__stage-name {
      margin-left: -2px;
      border-radius: 0 12px 12px 0;
    }
  }

  .node--user-selected {
    --box-shadow: var(--ms-depth-8);
    --border-fg: var(--brand-primary);

    :hover {
      --box-shadow: var(--ms-depth-8);
    }

    .node__stage-name {
      border-color: var(--border-fg);
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
    transition: background-color 200ms;
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
    margin: 0 -2px;
  }

  .progress-bar--start {
    min-width: var(--leading-progress-bar-width);
    max-width: var(--leading-progress-bar-width);
    margin: 0;
  }

  .progress-bar--filled {
    background-color: var(--brand-primary);
  }

  .progress-bar--empty {
    background-color: #CCC;
  }
`;

export default BusinessProcessExperiment;