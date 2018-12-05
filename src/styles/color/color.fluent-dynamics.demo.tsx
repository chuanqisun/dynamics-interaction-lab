import * as React from 'React';
import styled from "styled-components";

export class ColorDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedTheme: document.body.dataset.theme,
    };
  }
  onThemeChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newTheme = (e.target as any).value;
    document.body.dataset.theme = newTheme;
    this.setState({selectedTheme: newTheme});
  }

  render() {
    return <React.Fragment>
    <h2>Sample</h2>
    <section>
      <h3>Static colors</h3>
      <StyledDl>
        <Swatch cssVar="--color-grey-10"/>
        <Swatch cssVar="--color-grey-20"/>
        <Swatch cssVar="--color-grey-30"/>
        <Swatch cssVar="--color-grey-40"/>
        <Swatch cssVar="--color-grey-50"/>
        <Swatch cssVar="--color-grey-60"/>
        <Swatch cssVar="--color-grey-90"/>
        <Swatch cssVar="--color-grey-130"/>
        <Swatch cssVar="--color-grey-150"/>
        <Swatch cssVar="--color-grey-160"/>
        <Swatch cssVar="--color-grey-190"/>
      </StyledDl>
    </section>
    <section>
      <h3>Theme colors</h3>
      <form onSubmit={e => e.preventDefault()}>
        <fieldset>
        <legend>Choose a theme</legend>
        <label><input type="radio" name="theme" value="blue" checked={this.state.selectedTheme === 'blue'} onChange={this.onThemeChange}/>Blue</label>
        <label><input type="radio" name="theme" value="purple" checked={this.state.selectedTheme === 'purple'} onChange={this.onThemeChange}/>Purple</label>
        <label><input type="radio" name="theme" value="yellow" checked={this.state.selectedTheme === 'yellow'} onChange={this.onThemeChange}/>Yellow</label>
        </fieldset>
      </form>
      <StyledDl>
        <Swatch cssVar="--color-primary"/>
        <Swatch cssVar="--color-primary-contrast"/>
      </StyledDl>
    </section>
    </React.Fragment>
  }
}

class Swatch extends React.Component<any, any> {
  render() {
    return (
    <React.Fragment>
      <StyledDt>{this.props.cssVar}</StyledDt>
      <StyledDd ref={e => reflectColor(this.props.cssVar, e)}></StyledDd>
    </React.Fragment>
    );
  }
}

const reflectColor = (cssVar: string, e: any) => e && (e.innerHTML = `<span class="square" style="background: var(${cssVar})"></span><span>${getComputedStyle(document.body).getPropertyValue(cssVar)}</span>`);

const StyledDl = styled.dl`
  display: grid;
  grid-template-columns: max-content max-content;
  column-gap: 16px;
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
    margin-right: 4px;
    width: 16px;
    height: 16px;
    box-sizing:  border-box;
    border: 2px solid black;
  }
`;

export default ColorDemo;