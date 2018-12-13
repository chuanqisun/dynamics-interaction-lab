import * as React from 'React';
import styled, {StyledComponent} from 'styled-components';
import ErrorIcon from './error.svg';

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
]

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

    return <StyledSection>
      <div className="steps">
        <div className="step">
          <h2 className="h2 h2--with-margin">1. Choose an upper element</h2>
          {typographyData.map(itemUpper => <label className="typography-option" key={itemUpper.name}><input type="radio" checked={this.state.itemUpper.name === itemUpper.name} onChange={() => this.onSelectItemUpper(itemUpper)}/>{itemUpper.name}</label>)}
        </div>
        <div className="step">
          <h2 className="h2 h2--with-margin">2. Choose a lower element</h2>
          {typographyData.map(itemLower => <label className="typography-option" key={itemLower.name}><input type="radio" checked={this.state.itemLower.name === itemLower.name}  onChange={() => this.onSelectItemLower(itemLower)}/>{itemLower.name}</label>)}
        </div>
        <div className="step">
          <h2 className="h2">3. Choose desired spacing</h2>
          {showLettersOverlappingError ? <span className="number-item"><ErrorIcon/>&nbsp;The letters are overlapping. You must to increase the spacing.</span> : null}
          {showBoundingBoxOverlappingError ? <span className="number-item"><ErrorIcon/>&nbsp;The bounding boxes are overlapping. You must to increase the spacing.</span> : null}
          <label className="number-item" onMouseOver={this.onMouseOverDesignerSpacing} onMouseLeave={this.onMouseLeaveDesignerSpacing}>
            <span className="number-prompt">{`${this.state.itemUpper.name === 'object' ? 'Bounding box' : 'Baseline'} to ${this.state.itemLower.name === 'object' ? 'bounding box' : 'ascender'}`}</span>
            <input id="designer-spacing" className="number-input" type="number" step="4" onBlur={this.onBlurSpacing} onFocus={this.onFocusDesignerSpacing} value={this.state.designerSpacing} onChange={this.onChangeDesignerSpacing}/>px</label>
          <label className="number-item" onMouseOver={this.onMouseOverDeveloperSpacing} onMouseLeave={this.onMouseLeaveDeveloperSpacing}>
            <span className="number-prompt">Bounding box to bounding box</span>
            <input id="developer-spacing" className="number-input" type="number" step="4" onBlur={this.onBlurSpacing}  onFocus={this.onFocusDeveloperSpacing} value={developerSpacing} onChange={this.onChangeDeveloperSpacing}/>px</label>
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

  .number-item {
    display: flex;
    align-items: center;
    padding: 4px 0 4px 24px;
  }

  .number-prompt {
    display: inline-block;
    width: 16em;
  }

  .number-input {
    height: 32px;
    font-size: 24px;
    width: 48px;
    padding-left: 4px;
  }

  .steps {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    column-gap: 24px;
    background-color: #EEEEEE;
    padding: 12px;
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
