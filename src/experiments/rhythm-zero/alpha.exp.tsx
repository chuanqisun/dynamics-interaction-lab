import * as React from 'React';
import styled from 'styled-components';

const typographyData = [
  {name: 'landing 48 (600)', fontSize: 48, lineHeight: 60, fontWeight: 600, ascenderToTop: 14, baselineToBottom: 10},
  {name: 'subheader 34 (600)', fontSize: 34, lineHeight: 40, fontWeight: 600, ascenderToTop: 9, baselineToBottom: 6},
  {name: 'pageheader 32 (600)', fontSize: 32, lineHeight: 28, fontWeight: 600, ascenderToTop: 7, baselineToBottom: 4},
]

export class TyperampConversion extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedFromName: typographyData[0].name,
      selectedToName: typographyData[1].name,
    }
  }

  onSelectFromItem = (name: string) => {
    this.setState({selectedFromName: name});
  }

  onSelectToItem = (name: string) => {
    this.setState({selectedToName: name});
  }

  render() {
    return <StyledSection>
      {/* {typographyData.map(item => <TypographyItem {...item}/>)} */}
      <div className="legend">from \ to</div>
      <div className="labels-to">
        {typographyData.map(item => <span key={item.name} className="item item--rotated">{item.name}</span>)}
      </div>
      <div className="labels-from">
        {typographyData.map(item => <span key={item.name} className="item item--horizontal">{item.name}</span>)}
      </div>
      <div className="matrix">
        {typographyData.map(toItem => typographyData.map(fromItem => <span key={toItem.name}>-{toItem.baselineToBottom + fromItem.ascenderToTop}</span>))}  
      </div>
      <div className="type-list">
        {typographyData.map((fromItem, index) => <label><input type="radio" checked={this.state.selectedFromName === fromItem.name} onSelect={() => this.onSelectFromItem(fromItem.name)}/>{fromItem.name}</label>)}
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

  .legend {
    font-weight: 600;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  }

  .labels-from {
    display: flex;
    flex-direction: column;
    text-align: right;
  }

  .labels-to {
    align-self: end;
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