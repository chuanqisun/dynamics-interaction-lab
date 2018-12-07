import * as React from 'React';
import styled from "styled-components";
import {contentEditable} from '../../utils/content-editable';
import './typography.css';

export class TypographyDemo extends React.Component<any, any> {
  render() {
    return <React.Fragment>
    <section>
      <h2 className="lab-demo-h2">Sample</h2>
      <StyledDiv>
        <SampleRow className="t-header-48">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-subheader-34">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-sectiontitle-20">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-largebodysb-16">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-largebody-16">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-cardtitle-14">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-bodysb-14">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-body-14">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-capsb-12">The quick brown fox jumps over the lazy dog</SampleRow>
        <SampleRow className="t-cap-12">The quick brown fox jumps over the lazy dog</SampleRow>
      </StyledDiv>
    </section>
    </React.Fragment>
  }
}

const SampleRow = (props: any) => {
  return (
    <div className="sample-row" ref={e => reflectSampleTextDetails(e, props.className)}>
      <div className="labels">
        <span>{props.className}</span>
        <span className="details"></span>
      </div>
      <div className={'sample ' + props.className} ref={e => contentEditable(e)}>{props.children}</div>
    </div>
  )
}

const reflectSampleTextDetails = (e: any, className: string) => {
  if (!e) return;
  const sampleElement = (e as HTMLDivElement).querySelector('.sample')! as HTMLDivElement;
  const {fontSize, lineHeight, fontWeight, letterSpacing} = getComputedStyle(sampleElement);

  const detailsElement = (e as HTMLDivElement).querySelector('.details')! as HTMLDivElement;
  detailsElement.innerHTML = `${fontSize} ${lineHeight} ${fontWeight} ${letterSpacing}`;
  e.title = `class: ${className}\nfont-size: ${fontSize}\nline-height: ${lineHeight}\nfont-weight: ${fontWeight}\nletter-spacing: ${letterSpacing}`;
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  .sample-row {
    display: flex;
    align-items: center;
    margin: 4px 0;
  }

  .labels {
    flex: 0 0 140px;
    display: flex;
    flex-direction: column;
  }

  .details {
    font-size: 12px;
  }

  .sample {
    flex: 1 1 auto;
    display: inline-block;
    box-sizing: border-box;
    word-break: break-all;
    background-color: rgba(255,0,0,0.1);
  }
`;

export default TypographyDemo;