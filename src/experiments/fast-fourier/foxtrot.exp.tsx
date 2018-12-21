import * as React from 'React';
import styled from 'styled-components';
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
      userSelectedIndex: 1,
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
        <div className={`node`+`${index === this.state.userSelectedIndex ? ' node--expanded' : ''}` +
        `${index < this.state.recordAtIndex ? ' node--filled' : ''}`}>
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

const StyledNav = styled.nav`
  --brand-primary: #2266E3;
  --brand-primary-darken: #1B52B6;
  --material-shadow-d1: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
  --material-shadow-d2: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
  --material-shadow-d3: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
  

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  .node {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    box-shadow: var(--material-shadow-d3);
    transition: width 200ms, height 200ms;
    position: relative;
  }

  /* .node::before {
    content: '';
    position: absolute;
    left: 0;
    width: 14px;
    height: 100%;
    box-sizing: border-box;
    border: 4px solid var(--brand-primary);
    border-right: none;
    border-radius: 12px 0 0 12px;
  }; */

  .accordion-trigger {
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    height: 24px;
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    outline: none; /* TODO replace with focus-visible */
    position: relative;
    transition: color 200ms;
  }

  .accordion-trigger::before {
    content: '';
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: white;
    /* border: 2px solid black; */
    border-color: var(--brand-primary);
    border-radius: 12px;
    transition: border-radius 200ms, background-color 200ms, border-color 200ms;
  }

  .progress-bar {
    height: 16px;
    width: 4px;
    background-color: var(--brand-primary);
    margin-left: 10px;
  }

  .node--filled {
    .checkmark {
      color: white;
    }

    .accordion-trigger::before {
      background-color: var(--brand-primary);
      border-color: transparent;
    }
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

    .accordion-trigger::before {
      border-radius: 12px 12px 0 0;
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