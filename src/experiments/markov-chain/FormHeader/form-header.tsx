import * as React from 'react';
import styled, {StyledComponent} from 'styled-components';
import {contentEditable} from '../../../utils/content-editable';

export interface Field {
  key: string;
  value: string;
}

export interface FormHeaderProps {
  className?: string;
  entityName?: string;
  fields?: Field[];
  formSwitcherOptions?: string[];
  formSwitcherSelectedIndex?: number;
  inlineModeBreakpoint?: string;
  isContentEditable?: boolean;
  recordInitials?: string;
  recordName?: string;
  showFormSwitcher?: boolean;
  showReadOnlyMessage?: boolean;
  showRecordImage?: boolean;
  showShadow?: boolean;
  onFormSwitch?: (index: number) => void;
}

export const FormHeader: React.FunctionComponent<FormHeaderProps> = props => {
  const recordName = props.recordName || 'Cooking Appliances IOT Capable';
  const recordInitials = props.recordInitials || 'CA';
  const fields = props.fields || [
    {key: 'Header field key', value: 'Header field value'},
    {key: 'Header field key', value: 'Header field value'},
    {key: 'Header field key', value: 'Header field value'},
    {key: 'Header field key', value: 'Header field value'},
  ];
  const formSwitcherOptions = props.formSwitcherOptions || [
    'Sales rep form',
    'Sales manager form',
    'Executive form',
  ];
  const formSwitcherSelectedIndex = props.formSwitcherSelectedIndex !== undefined ? props.formSwitcherSelectedIndex : 0;

  const entityName = props.entityName || 'Opportunity';

  const contentEditableRef = props.isContentEditable ? contentEditable : undefined;


  return <StyledHeader className={props.className} inlineModeBreakpoint={props.inlineModeBreakpoint}>
  <div className="title-assembly">
    {props.showRecordImage ?  
      <div className="title-assembly__left">
        <span className="record-icon" ref={contentEditableRef}>{recordInitials}</span>
      </div>
    : null}
    <div className="title-assembly__right">
      <h1 className="form-title" ref={contentEditableRef}>{recordName}</h1>
      <span className="metas">
        <span className="metas__field metas__field" ref={contentEditableRef}>{entityName}</span>
        {props.showFormSwitcher ?
        <React.Fragment>
        <span className="metas__field metas__field--separator">·</span>
        <span className="metas__field metas__field--select">
          <select className="view-switcher" value={formSwitcherOptions[formSwitcherSelectedIndex]} onChange={e => props.onFormSwitch ? props.onFormSwitch(e.target.selectedIndex) : null}>
            {formSwitcherOptions.map(option => <option key={option} value={option}>{option}</option>)}
          </select>
        </span>
        </React.Fragment>
        : null}
      </span>
    </div>
  </div>
  <div className="fields-assembly fields-assembly--grid">
    {fields.map((item, index) => 
      <React.Fragment key={index}>
        <div className="field__key" ref={contentEditableRef}>{item.key}</div>
        <div className="field__value" ref={contentEditableRef}>{item.value}</div>
      </React.Fragment>)}
  </div>
  <div className="fields-assembly fields-assembly--card">
    {fields.map((item, index) => 
    <React.Fragment key={index}>
      <div className="field" >
        <div className="field__value" ref={contentEditableRef}>{item.value}</div>
        <div className="field__key" ref={contentEditableRef}>{item.key}</div>
      </div>
      {index + 1 < fields.length ? <div className="divider"><div className="divider-line"></div></div> : null}
    </React.Fragment>
    )}
  </div>
</StyledHeader>
}

const StyledHeader: StyledComponent<'header', any, any> = styled.header`
  padding: 14px 20px 0 20px;
  background-color: white;

  .record-icon {
    width: 46px;
    height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: orangered;
    color: white;
    font-weight: 600;
    border-radius: 50%;
    margin-right: 8px;
  }

  .title-assembly {
    display: flex;
    margin-top: 0px;
    font-size: 18px;
  }

  .title-assembly__right {
    display: flex;
    flex-direction: column;
  }

  .form-title {
    display: inline;
    font-weight: 600;
    line-height: 24px;
    font-size: 20px;
    margin: 0 4px 00 0;
  }

  .fields-assembly {
    margin-top: 4px;
    margin-bottom: 10px;
    font-size: 14px;
  }

  .fields-assembly--grid {
    display: grid;
    align-items: baseline;
    grid-template-columns: minmax(100px, max-content) auto;
    grid-column-gap: 16px;
  }

  .field {
    width: 100%;
  }
  
  .field__key {
    color: #666666;
    font-size: 12px;
    line-height: 16px;
  }

  .field__value {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }

  .fields-assembly--card {
    display: none;
  }

  .metas {
    display: inline-flex;
    flex-wrap: wrap;
    margin-top: 1px;
    margin-bottom: 10px;
  }

  .metas__field {
    align-items: center;
    color: #3B3A39;
    display: inline-flex;
    font-size: 14px;
    line-height: 20px;
    height: 21px;
    font-weight: 600;
  }

  .metas__field--separator {
    width: 16px;
    margin-left: 2px;
    margin-right: 3px;
    justify-content: center;
  }

  .view-switcher {
    margin-left: -4px;
    background-color: transparent;
    border: none;
    color: #3B3A39;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
    font-family: inherit;
  }

  @media (min-width: ${(props: FormHeaderProps) => props.inlineModeBreakpoint || '400px'}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    .divider {
      flex: 0 0 auto;
      margin: 6px 12px;
    }
    
    .divider-line {
      width: 1px;
      background-color: #DDD;
      height: 100%;
    }

    .field {
      width: unset;
      flex: 1 1 auto;
    }

    .fields-assembly--grid {
      display: none;
    }

    .fields-assembly--card {
      display: flex;
    }

    .title-assembly {
      flex: 1 1 360px;
    }
  }
`;