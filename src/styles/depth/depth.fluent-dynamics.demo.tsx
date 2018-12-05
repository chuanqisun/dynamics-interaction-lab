import * as React from 'React';
import styled from "styled-components";

export class DepthDemo extends React.Component<any, any> {
  render() {
    return <React.Fragment>
    <section>
      <h2>Sample</h2>
      <StyledDl>
        <Tile cssVar="--depth-1"/>
        <Tile cssVar="--depth-2"/>
        <Tile cssVar="--depth-3"/>
        <Tile cssVar="--depth-4"/>
      </StyledDl>
    </section>
    </React.Fragment>
  }
}

class Tile extends React.Component<any, any> {
  render() {
    return (
    <React.Fragment>
      <StyledDt>{this.props.cssVar}</StyledDt>
      <StyledDd ref={e => reflectBoxShadow(this.props.cssVar, e)}></StyledDd>
    </React.Fragment>
    );
  }
}

const reflectBoxShadow = (cssVar: string, e: any) => e && (e.innerHTML = `<span class="square" style="box-shadow: var(${cssVar})"></span><span>${getComputedStyle(document.body).getPropertyValue(cssVar)}</span>`);

const StyledDl = styled.dl`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 24px;
  row-gap: 24px;
`;

const StyledDt = styled.dt`
  display: inline-flex;
  align-items: center;
`;
const StyledDd = styled.dd`
  margin: 0;
  display: inline-flex;
  align-items: center;

  .square {
    display: inline-block;
    margin-right: 16px;
    border-radius: 2px;
    width: 64px;
    height: 64px;
    box-sizing:  border-box;
  }
`;

export default DepthDemo;