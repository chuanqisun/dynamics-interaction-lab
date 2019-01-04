import * as React from 'react';
import styled, {StyledComponent} from 'styled-components';
import {contentEditable} from '../../utils/content-editable';
import InfoSvg from './info.svg';


export interface FormHeaderProps {
  className?: string;
  showReadOnlyMessage?: boolean;
  showRecordImage?: boolean;
  showFormSwitcher?: boolean;
  showShadow?: boolean;
  inlineModeBreakpoint?: string;
  fields: number[];
}

export const FormHeader: React.FunctionComponent<FormHeaderProps> = props => {
  return <StyledHeader className={props.className} inlineModeBreakpoint={props.inlineModeBreakpoint}>
  {props.showReadOnlyMessage ?
  <div className="read-only-message"><InfoSvg className="message-item--icon"/><strong className="message-item--strong" ref={contentEditable}>This record is read-only.&nbsp;</strong><span ref={contentEditable}>You can’t change any field on this record because the status of this Opportunity is “closed”.</span></div>
  : null }
  <div className="title-assembly">
    {props.showRecordImage ?  
      <div className="title-assembly__left">
        <span className="record-icon" ref={contentEditable}>RN</span>
      </div>
    : null}
    <div className="title-assembly__right">
      <h1 className="form-title" ref={contentEditable}>1Q-19-Renew-NAmeric-Int-550units-3Dmaker-model-T1XX800plus</h1>
      <span className="metas">
        <span className="metas__field metas__field" ref={contentEditable}>Opportunity</span>
        {props.showFormSwitcher ?
        <React.Fragment>
        <span className="metas__field metas__field--separator">·</span>
        <span className="metas__field metas__field--select">
          <select className="view-switcher">
            <option value="record-view-1">Internal Printer Preapproval Opps</option>
            <option value="record-view-1">Internal Display All</option>
            <option value="record-view-1">External Hybrid Preapproval </option>
          </select>
        </span>
        </React.Fragment>
        : null}
      </span>
    </div>
  </div>
  <div className="fields-assembly fields-assembly--grid">
    {props.fields.map((key, index) => 
      <React.Fragment key={key}>
        <div className="field__key" ref={contentEditable}>Header field key</div>
        <div className="field__value" ref={contentEditable}>Header field value</div>
      </React.Fragment>)}
  </div>
  <div className="fields-assembly fields-assembly--card">
    {props.fields.map((key, index) => 
    <React.Fragment key={key}>
      <div className="field" >
        <div className="field__value" ref={contentEditable}>Header field value</div>
        <div className="field__key" ref={contentEditable}>Header field key</div>
      </div>
      {index + 1 < props.fields.length ? <div className="divider"><div className="divider-line"></div></div> : null}
    </React.Fragment>
    )}
  </div>
</StyledHeader>
}

const StyledHeader: StyledComponent<'header', any, any> = styled.header`
  padding: 14px 20px 4px 20px;
  background-color: #F8F8F8;
  box-shadow: var(--depth-1);

  .read-only-message {
    flex-basis: 100vw;
    background-color: #FFF4CE;
    border-bottom: 1px solid #E1DFDD;
    margin-left: -20px;
    margin-right: -20px;
    margin-top: -14px;
    margin-bottom: 14px;
    font-size: 12px;
    padding-left: 21px;
    line-height: 16px;
    padding-top: 2px;
    padding-bottom: 6px;
  }

  .message-item--icon {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    position: relative;
    top: 3px;
  }

  .message-item--strong {
    font-weight: 600;
  }

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