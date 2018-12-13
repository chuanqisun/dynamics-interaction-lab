import * as React from 'React';
import styled, {StyledComponent} from 'styled-components';
import ErrorIcon from './error.svg';
import WarningIcon from './warning.svg';

const typographyData = [
  {name: 'landing 48 (600)', fontSize: 48, lineHeight: 60, fontWeight: 600, topToAscender: 14, baselineToBottom: 10},
  {name: 'subheader 34 (600)', fontSize: 34, lineHeight: 40, fontWeight: 600, topToAscender: 9, baselineToBottom: 6},
  {name: 'pageheader 24 (600)', fontSize: 24, lineHeight: 28, fontWeight: 600, topToAscender: 7, baselineToBottom: 4},
  {name: 'sectiontitle 20 (600)', fontSize: 20, lineHeight: 24, fontWeight: 600, topToAscender: 5, baselineToBottom: 4},
  {name: 'smalltitle 16 (600)', fontSize: 16, lineHeight: 24, fontWeight: 600, topToAscender: 5, baselineToBottom: 7},
  {name: 'lrgbody 16 (600)', fontSize: 16, lineHeight: 24, fontWeight: 400, topToAscender: 5, baselineToBottom: 7},
  {name: 'cardtitle 14 (600)', fontSize: 14, lineHeight: 20, fontWeight: 600, topToAscender: 5, baselineToBottom: 4},
  {name: 'body 14 (600)', fontSize: 14, lineHeight: 20, fontWeight: 600, topToAscender: 5, baselineToBottom: 4},
  {name: 'cap 12 (600)', fontSize: 12, lineHeight: 16, fontWeight: 600, topToAscender: 5, baselineToBottom: 3},
  {name: 'cap 12 (400)', fontSize: 12, lineHeight: 16, fontWeight: 400, topToAscender: 5, baselineToBottom: 3},
  {name: 'densebody 14 (600)', fontSize: 14, lineHeight: 18, fontWeight: 600, topToAscender: 4, baselineToBottom: 3},
  {name: 'densebody 14 (400)', fontSize: 14, lineHeight: 18, fontWeight: 400, topToAscender: 4, baselineToBottom: 3},
  {name: 'densecap 12 (600)', fontSize: 12, lineHeight: 14, fontWeight: 600, topToAscender: 3, baselineToBottom: 2},
  {name: 'densecap 12 (400)', fontSize: 12, lineHeight: 14, fontWeight: 400, topToAscender: 3, baselineToBottom: 2},
  {name: 'object', topToAscender: 0, baselineToBottom: 0},
];

const spacingRamp = [4, 8, 12, 16, 20, 32, 40, 60, 92, 120];

export class SpacingDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      designerSpacing: 32,
      itemUpper: typographyData[0],
      itemLower: typographyData[1],
      editing: null,
      hovering: null,
    }
  }

  onSelectItemUpper = (item: any) => {
    this.setState({itemUpper: item});
  }

  onSelectItemLower = (item: any) => {
    this.setState({itemLower: item});
  }

  onChangeDesignerSpacing = (event: any) => {
    this.setState({designerSpacing: parseInt(event.target.value)});
  }

  onChangeDeveloperSpacing = (event: any) => {
    this.setState({designerSpacing: parseInt(event.target.value) + this.state.itemUpper.baselineToBottom + this.state.itemLower.topToAscender});
  }

  onSelectRampItem = (value: number) => {
    this.setState({designerSpacing: value});
  }

  onFocusDesignerSpacing = () => {
    this.setState({editing: 'designer'});
  }

  onFocusDeveloperSpacing = () => {
    this.setState({editing: 'developer'});
  }

  onBlurSpacing = () => {
    this.setState({editing: null});
  }

  onMouseOverDesignerSpacing = () => {
    this.setState({hovering: 'designer'});
  }
  
  onMouseLeaveDesignerSpacing = () => {
    this.setState({hovering: null});
  }
  
  onMouseOverDeveloperSpacing = () => {
    this.setState({hovering: 'developer'});
  }
  
  onMouseLeaveDeveloperSpacing = () => {
    this.setState({hovering: null});
  }

  render() {
    const developerSpacing = this.state.designerSpacing - this.state.itemUpper.baselineToBottom - this.state.itemLower.topToAscender;
    const showLettersOverlappingError = (this.state.designerSpacing < 0 || this.state.designerSpacing === 0) && this.state.itemUpper.name !== 'object' && this.state.itemLower.name !== 'object';
    const showBoundingBoxOverlappingError = developerSpacing < 0;
    const showRampNonStandardWarning = spacingRamp.indexOf(this.state.designerSpacing) < 0;

    return <StyledSection>
      <div className="steps">
        <div className="step">
          <h2 className="h2 h2--with-margin">1. Choose an upper element</h2>
          {typographyData.map(itemUpper => <label className="typography-option" key={itemUpper.name}><input type="radio" name="itemUpper" checked={this.state.itemUpper.name === itemUpper.name} onChange={() => this.onSelectItemUpper(itemUpper)}/>{itemUpper.name}</label>)}
        </div>
        <div className="step">
          <h2 className="h2 h2--with-margin">2. Choose a lower element</h2>
          {typographyData.map(itemLower => <label className="typography-option" key={itemLower.name}><input type="radio" name="itemLower" checked={this.state.itemLower.name === itemLower.name}  onChange={() => this.onSelectItemLower(itemLower)}/>{itemLower.name}</label>)}
        </div>
        <div className="step">
          <h2 className="h2">3. Choose desired spacing</h2>
          <span className="number-item number-item--hint">Tips: click blue/red bar to select spacer, use arrow keys to adjust the value.</span>
          <div className="number-item number-item--wrap ">
            <div className="number-prompt number-prompt--full-width">Spacing ramp</div>
            {spacingRamp.map(value => <React.Fragment key={value} >
              <input type="radio" id={'ramp-item' + value} name="ramp-item" className="ramp-item__radio" checked={this.state.designerSpacing === value} onChange={() => this.onSelectRampItem(value)}/>
              <label className="ramp-item__label" htmlFor={'ramp-item' + value}>{value}</label>
            </React.Fragment>)}
          </div>
          <label className="number-item" onMouseOver={this.onMouseOverDesignerSpacing} onMouseLeave={this.onMouseLeaveDesignerSpacing}>
            <span className="number-prompt">{`${this.state.itemUpper.name === 'object' ? 'Bounding box' : 'Baseline'} to ${this.state.itemLower.name === 'object' ? 'bounding box' : 'ascender'}`}</span>
            <input id="designer-spacing" className="number-input" type="number" step="4" onBlur={this.onBlurSpacing} onFocus={this.onFocusDesignerSpacing} value={this.state.designerSpacing} onChange={this.onChangeDesignerSpacing}/>px</label>
          <label className="number-item" onMouseOver={this.onMouseOverDeveloperSpacing} onMouseLeave={this.onMouseLeaveDeveloperSpacing}>
            <span className="number-prompt">Bounding box to bounding box</span>
            <input id="developer-spacing" className="number-input" type="number" step="4" onBlur={this.onBlurSpacing}  onFocus={this.onFocusDeveloperSpacing} value={developerSpacing} onChange={this.onChangeDeveloperSpacing}/>px</label>
          {showLettersOverlappingError ? <span className="number-item"><span className="error-message"><ErrorIcon className="error-icon"/>&nbsp;This spacing is impossible because the letters will overlap. You must to increase the spacing.</span></span> : null}
          {showBoundingBoxOverlappingError ? <span className="number-item"><span className="error-message"><ErrorIcon className="error-icon"/>&nbsp;This spacing is impossible because the bounding boxes will overlap. You must to increase the spacing.</span></span> : null}
          {showRampNonStandardWarning ? <span className="number-item"><span className="error-message"><WarningIcon className="error-icon"/>&nbsp;This spacing is not a standard ramp item. We recommend using the ramp.</span></span> : null}
        </div>
      </div>
      <div className="illustration">
        {this.state.itemUpper.name === 'object' ? <DemoItemObject/> : <DemoItemTypography className="sample-upper" {...this.state.itemUpper}/>}
        <StyledDiv {...this.state} className="sample-spacer">
          <div className="designer-spacer">
            <label htmlFor="designer-spacing" className="designer-hover-receiver" onMouseOver={this.onMouseOverDesignerSpacing} onMouseLeave={this.onMouseLeaveDesignerSpacing}></label>
          </div>
          <div className="developer-spacer">
            <label htmlFor="developer-spacing" className="developer-hover-receiver" onMouseOver={this.onMouseOverDeveloperSpacing} onMouseLeave={this.onMouseLeaveDeveloperSpacing}></label>
          </div>
        </StyledDiv>
        {this.state.itemLower.name === 'object' ? <DemoItemObject/> : <DemoItemTypography className="sample-lower" {...this.state.itemLower}/>}
        
      </div>
    </StyledSection>
  }
}

interface TypographyItemProps {
  name: string;
  className?: string;
  fontSize: number;
  lineHeight: number;
  fontWeight: number;
  topToAscender: number;
  baselineToBottom: number;
}
export const DemoItemTypography = (props: TypographyItemProps) => <div className={props.className} style={{
  position: 'relative',
  zIndex: 100,
  fontSize: `${props.fontSize}px`,
  lineHeight: `${props.lineHeight/props.fontSize}`,
  fontWeight: props.fontWeight,
}}>The quick brown fox jumps over the lazy dog</div>;

export const DemoItemObject = (props: any) => <div className={props.className} style={{
  height: '128px',
  width: '256px',
  backgroundColor: '#CCC',
  borderRadius: '2px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
}}>
  <div style={{textAlign: 'center'}}>A generic object</div>
  <div>256px × 128px</div>
</div>


const StyledSection = styled.section`
  label {
    cursor: pointer;
  }

  .designer-spacer:hover {
    background-color: pink;
  }

  .h2 {
    margin: 0;
    font-size: 20px;
  }

  .h2--with-margin {
    margin-bottom: 2px;
  }

  .error-icon {
    display: inline;
    position: relative;
    top: 2px;
  }

  .number-item {
    display: flex;
    align-items: center;
    padding: 4px 0 4px 24px;
  }

  .number-item--wrap {
    flex-wrap: wrap;
  }

  .number-item--hint {
    color: #666;
  }

  .number-prompt {
    display: inline-block;
    width: 16em;
  }

  .number-prompt--full-width {
    width: 100%;
    margin-bottom: 4px;
  }

  .number-input {
    height: 32px;
    font-size: 24px;
    width: 64px;
    padding-left: 4px;
  }

  .ramp-button {
    background-color: white;
    border: 1px solid black;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ramp-item__radio {
    width: 32px;
    height: var(--tg-track-height);
    margin: 0;
    vertical-align: bottom;
  }

  .ramp-item__label:first-of-type {
    margin-left: -32px;
  }

  .ramp-item__label {
    margin-left: -33px;
    width: 32px;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    border: 1px solid black;
  }

  .ramp-item__label:hover {
    background-color: grey;
    color: white;
  }

  .ramp-item__radio:checked + .ramp-item__label {
    background-color: black;
    color: white;
  }

  .ramp-item__radio:focus + .ramp-item__label {
    outline: 1px dashed black;
    z-index: 1;
  }

  .steps {
    display: grid;
    grid-template-columns: max-content max-content 360px;
    column-gap: 24px;
    background-color: #EEEEEE;
    padding: 12px;
    overflow: auto;
    margin-bottom: 12px;
  }

  .typography-option {
    display: block;
    padding: 2px 0 2px 4px;
  }

`;

const StyledDiv: StyledComponent<'h2', any, any>  = styled.div`
  height: ${(props: any) => props.designerSpacing - props.itemUpper.baselineToBottom - props.itemLower.topToAscender}px;
  width: 100%;
  position: relative;

  .designer-spacer {
    position: absolute;
    background-color: ${(props: any) => props.editing === 'designer' || props.hovering === 'designer' ? 'pink' : 'transparent'};
    border-top: 1px solid pink;
    border-bottom: 1px solid pink;
    left: 0;
    right: 0;
    top: -${(props: any) => props.itemUpper.baselineToBottom}px;
    bottom: -${(props: any) => props.itemLower.topToAscender}px;
  }

  .designer-hover-receiver {
    cursor: pointer;
    position: absolute;
    z-index: 200;
    left: 0;
    right: 0;
    top: -${(props: any) => props.itemUpper.baselineToBottom}px;
    bottom: -${(props: any) => props.itemLower.topToAscender}px;
  }

  .developer-spacer {
    position: absolute;
    background-color: ${(props: any) => props.editing === 'developer' || props.hovering === 'developer' ? 'lightblue' : 'transparent'};
    border-top: 1px solid lightblue;
    border-bottom: 1px solid lightblue;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .developer-hover-receiver {
    cursor: pointer;
    position: absolute;
    z-index: 300;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;

export default SpacingDemo;
