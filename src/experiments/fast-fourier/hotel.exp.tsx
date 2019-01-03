import * as React from 'React';
import styled, {keyframes} from 'styled-components';
import { FullMdl2 } from '../../styles/icon/full-mdl2';
import '../../components/button/button.css';

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
    <StyledNav>
      {this.state.stages.map((stage: any, index: number) => 
      <React.Fragment key={index}>
        <div className={[
          `node`,
          index === this.state.userSelectedIndex ? ' node--expanded' : '',
          index === this.state.recordAtIndex ? ' node--outlined' : '',
          index < this.state.recordAtIndex ? ' node--filled' : ''
        ].join('')}>
          <button onClick={() => this.onSelectStage(index)} className="accordion-trigger">
            <span className="checkmark mdl2">{index < this.state.recordAtIndex ? FullMdl2.CheckMark : null}</span>
            <span className="name-with-chevron">
              <span className="stage-name">{stage.name}</span>
              <span className="chevron mdl2">{FullMdl2.ChevronDownSmall}</span>
            </span>
          </button>
          {index === this.state.userSelectedIndex ? <div className="stage-content">
            {index < this.state.recordAtIndex ? <button className="stage-cta" onClick={() => this.onMoveRecordToStage(index)}>Rollback to this stage</button> : null}
            {index === this.state.recordAtIndex ? <button className="stage-cta" onClick={this.onCompleteStage}>Complete</button> : null}
            {index > this.state.recordAtIndex ? <button className="stage-cta" onClick={() => this.onMoveRecordToStage(index)}>Skip to this stage</button> : null}
          </div> : null}
          
        </div>
        {index < this.state.stages.length - 1 ? <div className="progress-bar"></div> : null}
      </React.Fragment>)}
    </StyledNav>
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
  --accordion-trigger-z: 200;
  
  display: flex;
  flex-direction: column;

  .node {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    transition: width 200ms, height 200ms;
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

  .node--filled::before {
    background-color: var(--brand-primary);
  }
  .node--filled.node--expanded::before {
    height: 24px;
  }

  .node--outlined::before {
    border-color: var(--brand-primary);
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
    transition: color 200ms;
    z-index: var(--accordion-trigger-z);
    appearance: none; /* unset the native button styles */
    -webkit-appearance: none;
    -moz-appearance: none;



    box-shadow: var(--material-shadow-d3);
  }

  .progress-bar {
    height: 18px;
    width: 2px;
    background-color: var(--brand-primary);
    margin: -2px 0 -2px 11px;
  }

  .node--filled {
    .checkmark {
      color: white;
    }

    .accordion-trigger::before {
      background-color: var(--brand-primary);
    }
  }

  .node--outlined {
  }

  .node--expanded {
    width: 300px;
    height: 420px;

    .chevron {
      transform: rotate(180deg);
    }

    .accordion-trigger {
      color: var(--brand-primary);
    }
  }

  .node--filled.node--expanded {
    .accordion-trigger {
      color: white;
    }
  }

  .checkmark {
    display: inline-flex;
    box-sizing: border-box;
    width: 24px;
    height: 24px;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .chevron {
    font-size: 8px;
    display: inline-block;
    transition: transform 200ms;
  }

  .stage-content {
    position: absolute;
    top: 22px;
    left: 8px;
    border-left: 2px solid var(--brand-primary);
    right: 8px;
    box-shadow: var(--material-shadow-d3);
    bottom: 0;
    border-radius: 0 2px 2px 2px;
    background-color: white;

    animation: ${slideIn} 200ms 150ms cubic-bezier(0.32, 1.49, 0.93, 0.87) both;
  }


  .stage-name {
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
    margin-right: 6px;
  }

  .name-with-chevron {
    position: absolute;
    display: flex;
    align-items: baseline;
    left: 32px;
  }

  .stage-content {
    .stage-cta {
      position: absolute;
      left: 32px;
      bottom: 8px;
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
    box-shadow: var(--material-shadow-d2);
    outline: none;
  }

  .stage-cta:hover {
    background-color: var(--brand-primary-darken);
  }
`;

export default BusinessProcessExperiment;