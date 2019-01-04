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

  onSelectStage = (index: number) => this.setState({userSelectedIndex: index});

  rollBackStage = () => this.setState({recordAtIndex: Math.max(0, this.state.recordAtIndex - 1)});

  advanceStage = () => this.setState({recordAtIndex: Math.min(this.state.stages.length, this.state.recordAtIndex + 1)});

  render() {
    return <StyledSection>
    <h2>Sample</h2>
    <StyledNav>
      {this.state.stages.map((stage: any, index: number) => 
      <React.Fragment key={index}>
        <div className="node">
          <button onClick={() => this.onSelectStage(index)} className={`btn${index < this.state.recordAtIndex ? ' btn--shrinkable btn--filled' : ''}` +
            `${index === this.state.recordAtIndex ? ' btn--filled' : ''}` +
            `${index === this.state.userSelectedIndex ? ' btn--selected' : ''}` +
            `${index > this.state.recordAtIndex ? ' btn--empty' : ''}`}>
            {index < this.state.recordAtIndex ? <span className="btn__icon mdl2">{FullMdl2.CheckMark}</span> : null}
            <span className="btn__text">{stage.name}</span>
          </button>
        </div>
        {index < this.state.stages.length - 1 ? <div className={`progress-bar${index < this.state.recordAtIndex ? ' progress-bar--filled' : ''}${index === this.state.recordAtIndex ? ' progress-bar--fade' : ''}`}/> : null}
      </React.Fragment>)}
    </StyledNav>
    <h2>Design notes</h2>
    <li><button onClick={this.rollBackStage}>Roll back stage</button><button onClick={this.advanceStage}>Advance stage</button></li>
    <li>User is viewing "{this.state.stages[this.state.userSelectedIndex].name}"</li>
    <li>{this.state.recordAtIndex < this.state.stages.length ? `Record is at "${this.state.stages[this.state.recordAtIndex].name}"` : `Record has finished all stages`}</li>
    </StyledSection>
  }
}

const StyledSection = styled.section`
  padding: 24px;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;

  .node {
    position: relative;
  }

  .progress-bar {
    width: 100px;
    height: 4px;
    background-color: #CADAF8;
  }

  .progress-bar--filled {
    background-color: #2266E3;
  }

  .progress-bar--fade {
    background: linear-gradient(90deg, #2266E3 0%, #CADAF8 100%);
  }

  .btn {
    box-sizing: border-box;
    font: var(--fw-semibold) var(--scale-14)/var(--scale-20) var(--ff-segoe-ui);
    max-width: 120px;
    height: 24px;
    padding: 0;
    border-radius: 12px;
    border: none;
    color: white;
    display: flex;
    align-items: center;
    overflow: hidden;
    outline: none; /* replace with focus-visible */
    transition: all 200ms;
  }

  .btn:hover {
    position: relative;
    box-shadow: 0 5px 5px -3px rgba(0,0,0,.2), 0 8px 10px 1px rgba(0,0,0,.14), 0 3px 14px 2px rgba(0,0,0,.12);

    .btn__icon {
      transform: rotate(360deg);
    }
  }
  
  .btn--selected {
    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
    transform: scale(1.2);

    .btn__icon {
      transform: rotate(360deg);
    }
  }

  .btn__icon {
    transition: inherit;
    font-size: 16px;
  }

  .btn__text {
    margin: 0 8px;
  }

  .btn--filled {
    background-color: #2266E3;
  }

  .btn--shrinkable:not(.btn--selected):not(:hover) {
    max-width: 24px;
  }

  .btn--shrinkable {
    padding-left: 4px;
  }

  .btn--empty {
    color: #2266E3;
    border: 2px solid #2266E3;
    background-color: white;
  }
`;

export default BusinessProcessExperiment;