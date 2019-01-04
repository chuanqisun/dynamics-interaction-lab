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
  onSelectStage: (stageIndex: number) => void;
  onMoveRecordToStage: (stageIndex: number) => void;
  onCompleteStage: () => void;
}

export const BusinessProcessFlow: React.FunctionComponent<BusinessProcessFlowProps> = (props) => {
  return <StyledNav className={props.className}>
  {props.stages.map((stage: any, index: number) => 
  <React.Fragment key={index}>
    <button onClick={() => props.onSelectStage(index)} className={[
        `node`,
        index === props.userSelectedIndex ? ' node--user-selected' : '',
        index === props.recordAtIndex ? ' node--record-at' : '',
        index < props.recordAtIndex ? ' node--record-competed' : ''
      ].join('')}>
      {index < props.recordAtIndex && <span className="node__checkmark mdl2">{FullMdl2.CheckMark}</span>}
      <span className="node__stage-name">{stage.name}</span>
    </button>      
    {index < props.stages.length - 1 ? <div className="progress-bar"></div> : null}
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

const StyledSection = styled.section`
  padding: 24px;
`;

const StyledNav = styled.nav`
  --brand-primary: #2266E3;
  --material-shadow-d1: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  --material-shadow-d2: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  --material-shadow-d3: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  
  display: flex;

  .node {
    --border-fg: transparent;
    --checkmark-fg: white;
    --checkmark-bg: var(--brand-primary);
    --full-bg: white;
    --text-color: var(--brand-primary);

    appearance: none;
    border: 2px solid var(--border-fg);
    background-color: var(--full-bg);
    outline: none; /* to be replaced by focus-visible */
  }

  .node--record-at {
    --border-fg: var(--brand-primary);
  }

  .node--record-competed {
    .node__checkmark {
      background-color: var(--checkmark-bg);
    }
  }

  .node--user-selected {
    --full-bg: var(--brand-primary);
    --text-color: white;
  }

  .node__checkmark {
    color: var(--checkmark-fg);
  }

  .node__stage-name {
    color: var(--text-color);
  }
`;

export default BusinessProcessExperiment;