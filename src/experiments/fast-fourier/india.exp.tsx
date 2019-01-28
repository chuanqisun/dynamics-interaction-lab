import * as React from 'React';
import styled, {keyframes} from 'styled-components';
import { FullMdl2 } from '../../styles/icon/full-mdl2';
import '../../components/button/button.css';


export interface Stage {
  name: string;
  content: React.FunctionComponent<any>;
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
    <div className={[
      `node`,
      index === props.userSelectedIndex ? ' node--user-at' : '',
      index === props.recordAtIndex ? ' node--record-at' : '',
      index < props.recordAtIndex ? ' node--record-past' : ''
    ].join('')}>
      <button onClick={() => props.onSelectStage(index)} className="accordion-trigger">
        {index < props.recordAtIndex ? <span className="icon mdl2">{FullMdl2.CheckMark}</span> : null}
        {index === props.recordAtIndex ? <span className="icon mdl2">{FullMdl2.POI}</span> : null}
        <span className="name-with-chevron">
          <span className="stage-name">{stage.name}</span>
          <span className="chevron mdl2">{FullMdl2.ChevronDownSmall}</span>
        </span>
      </button>
      {index === props.userSelectedIndex && <div className="stage-content">
        {stage.content && <stage.content/>}
        {index < props.recordAtIndex && <button className="stage-cta" onClick={() => props.onMoveRecordToStage(index)}>Rollback to stage</button>}
        {index === props.recordAtIndex && index < props.stages.length - 1 && <button className="stage-cta" onClick={props.onCompleteStage}>Complete stage</button>}
        {index === props.recordAtIndex && index === props.stages.length -1 && <button className="stage-cta" onClick={props.onCompleteStage}>Finish process</button>}
        {index > props.recordAtIndex && <button className="stage-cta" onClick={() => props.onMoveRecordToStage(index)}>Skip to stage</button>}
      </div>}
      
    </div>
    {index < props.stages.length - 1 ? <div className={[
      `progress-bar`,
      index < props.recordAtIndex - 1 ? ' progress-bar--filled' : '',
      index === props.recordAtIndex - 1 ? ' progress-bar--filled' : '',
      index > props.recordAtIndex - 1 ? ' progress-bar--empty' : '',
    ].join('')}></div> : null}
  </React.Fragment>)}
</StyledNav>
}

export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      stages: [
        {name: 'Screen', content: () => <div className="fake-content"></div>},
        {name: 'Qualify', content: () => <div className="fake-content"></div>},
        {name: 'Develop', content: () => <div className="fake-content"></div>},
        {name: 'Connect', content: () => <div className="fake-content"></div>},
        {name: 'Propose', content: () => <div className="fake-content"></div>},
        {name: 'Close', content: () => <div className="fake-content"></div>},
        {name: 'Archive', content: () => <div className="fake-content"></div>},
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

const slideIn = keyframes`
  0% {
    transform: translateY(-24px) scaleY(0.5) scaleX(1);
    transform-origin: 50% 0%;
    opacity: 0;
  }
  100% {
    transform: translateY(0) scaleY(1) scaleX(1);
    transform-origin: 50% 0%;
    opacity: 1;
  }
`;


const StyledNav = styled.nav`
  --brand-primary: #2266E3;
  --brand-primary-darken: #1B52B6;
  --material-shadow-d1: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  --material-shadow-d2: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  --material-shadow-d3: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

  --ms-depth-4: 0 1.6px 3.6px 0 rgba(0,0,0,.132), 0 0.3px 0.9px 0 rgba(0,0,0,.108);
  --ms-depth-8: 0 3.2px 7.2px 0 rgba(0,0,0,.132), 0 0.6px 1.8px 0 rgba(0,0,0,.108);
  --ms-depth-16: 0 6.4px 14.4px 0 rgba(0,0,0,.132), 0 1.2px 3.6px 0 rgba(0,0,0,.108);

  --accordion-trigger-z: 200;
  
  display: flex;
  flex-direction: column;

  .node {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    transition: width 200ms;
    position: relative;
    box-sizing: border-box;
  }

  .node::before {
    content: '';
    z-index: var(--accordion-trigger-z);

    position: absolute;
    left: 0;
    right: 0;
    height: 24px;
  
    border: 2px solid transparent;
    background-color: white;
    box-sizing: border-box;
    border-radius: 12px;

    transition: all 200ms;
  }

  .node--record-past::before {
    background-color: var(--brand-primary);
  }
  .node--record-past.node--user-at::before {
    height: 24px;
  }

  .accordion-trigger {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    height: 24px;
    border-radius: 12px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    outline: none; /* TODO replace with focus-visible */
    position: relative;
    transition: color 200ms, box-shadow 200ms;
    z-index: var(--accordion-trigger-z);
    appearance: none; /* unset the native button styles */
    -webkit-appearance: none;
    -moz-appearance: none;

    box-shadow: var(--ms-depth-4);
  }

  .accordion-trigger:hover {
    box-shadow: var(--ms-depth-16);
  }

  .progress-bar {
    height: 18px;
    width: 2px;
    margin: -2px 0 -2px 11px;
  }

  .progress-bar--filled {
    background-color: var(--brand-primary);
  }

  .progress-bar--empty {
    background-color: #CCC;
  }

  .node--record-past {
    .icon {
      color: white;
    }

    .accordion-trigger::before {
      background-color: var(--brand-primary);
    }
  }

  .node--user-at {
    width: 300px;
    height: auto;

    .chevron {
      transform: rotate(180deg);
    }

    .accordion-trigger {
      color: var(--brand-primary);
      box-shadow: var(--ms-depth-8);
    }
  }

  .node--record-past.node--user-at {
    .accordion-trigger {
      color: white;
    }
  }

  .icon {
    color: var(--brand-primary);
    display: inline-flex;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    position: relative;

    transition: color 200ms;
  }

  .chevron {
    font-size: 8px;
    display: inline-block;
    transition: transform 200ms;
  }

  .fake-content {
    height: 400px;
    margin: 20px;
    background-color: lightgray;
  }

  .stage-content {
    position: relative;
    top: -4px;
    box-shadow: var(--ms-depth-4);
    bottom: 0;
    border-radius: 0 2px 2px 2px;
    background-color: white;
    margin: 0 4px;
    padding: 6px 0;
    animation: ${slideIn} 200ms 150ms cubic-bezier(0.32, 1.49, 0.93, 0.87) both;
  }


  .stage-name {
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
    margin-right: 6px;
    white-space: nowrap;
  }

  .name-with-chevron {
    position: absolute;
    display: flex;
    align-items: baseline;
    left: 32px;
  }

  .stage-content {
    .stage-cta {
      margin: 0 0 8px 32px;
    }
  }

  .stage-cta {
    border-radius: var(--btn-border-radius);
    border: none;
    cursor: pointer;
    height: 28px;
    font: var(--btn-font);
    color: var(--btn-primary-fg-rest);
    background-color: var(--btn-primary-bg-rest);
    letter-spacing: var(--btn-letter-spacing);
    padding: 0 var(--btn-padding-side);
    box-shadow: var(--ms-depth-4);
    outline: none;
  }

  .stage-cta:hover {
    background-color: var(--brand-primary-darken);
  }
`;

export default BusinessProcessExperiment;