import * as React from 'React';
import styled from 'styled-components';
import { FullMdl2 } from '../../styles/icon/full-mdl2';

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
        </div>
        {index < this.state.stages.length - 1 ? <div className={`progress-bar${index < this.state.recordAtIndex ? ' progress-bar--filled' : ''}${index === this.state.recordAtIndex ? ' progress-bar--fade' : ''}`}/> : null}
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

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  .node {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);
    margin-top: 16px;
    transition: width 200ms, height 200ms;
  }

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
    border: 2px solid black;
    border-color: var(--brand-primary);
    border-radius: 12px;
    transition: border-radius 200ms, background-color 200ms, border-color 200ms;
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
`;

export default BusinessProcessExperiment;