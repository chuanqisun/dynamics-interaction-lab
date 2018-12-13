import * as React from 'React';
import styled from 'styled-components';

const typographyData = [
  {name: 'landing 48 (600)', fontSize: 48, lineHeight: 60, fontWeight: 600, ascenderToTop: 14, baselineToBottom: 10},
  {name: 'subheader 34 (600)', fontSize: 34, lineHeight: 40, fontWeight: 600, ascenderToTop: 9, baselineToBottom: 6},
  {name: 'pageheader 32 (600)', fontSize: 32, lineHeight: 28, fontWeight: 600, ascenderToTop: 7, baselineToBottom: 4},
]

export class TyperampConversion extends React.Component<any, any> {
  render() {
    return <StyledSection>
      {/* {typographyData.map(item => <TypographyItem {...item}/>)} */}
      <div className="labels-from">
        {typographyData.map(item => <span key={item.name} className="item item--rotated">{item.name}</span>)}
      </div>
      <div className="labels-to">
        {typographyData.map(item => <span key={item.name} className="item item--horizontal">{item.name}</span>)}
      </div>
      <div className="matrix">
        {typographyData.map(fromItem => typographyData.map(toItem => <span key={toItem.name}>-{fromItem.baselineToBottom + toItem.ascenderToTop}</span>))}  
      </div>
    </StyledSection>
  }
}

interface TypographyItemProps {
  name: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  ascenderToTop: number;
  baselineToBottom: number;
}
export const TypographyItem = (props: TypographyItemProps) => <div style={{
  fontSize: `${props.fontSize}px`,
  lineHeight: `${props.lineHeight/props.fontSize}`,
  fontWeight: props.fontWeight,
}}>The quick brown fox jumps over the lazy dog</div>;

export default TyperampConversion;

const StyledSection = styled.section`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: 100px auto;
  grid-template-columns: max-content 400px;

  .labels-to {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .labels-from {
    align-self: end;
    grid-column-start: 2;
  }

  .item--horizontal {
    height: 32px;
    display: inline-block;
  }

  .item--rotated {
    width: 32px;
    display: inline-block;
    white-space: nowrap;
    transform: rotate(-45deg);
  }

  .matrix {
    display: grid;
    grid-template-rows: repeat(3, 32px);
    grid-template-columns: repeat(3, 32px);
  }
`