import * as React from 'React';
import styled from 'styled-components';

const typographyData = [
  {name: 'landing 48 (600)', fontSize: 48, lineHeight: 60, fontWeight: 600, ascenderToTop: 14, baselineToBottom: 10},
  {name: 'subheader 34 (600)', fontSize: 34, lineHeight: 40, fontWeight: 600, ascenderToTop: 9, baselineToBottom: 6},
  {name: 'pageheader 24 (600)', fontSize: 24, lineHeight: 28, fontWeight: 600, ascenderToTop: 7, baselineToBottom: 4},
]

export class TyperampConversion extends React.Component<any, any> {
  render() {
    return <section>
      {typographyData.map(item => <TypographyItem {...item}/>)}
      
    </section>
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