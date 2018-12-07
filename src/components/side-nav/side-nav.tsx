import * as React from 'react';
import styled from 'styled-components';
import {FullMdl2} from '../../styles/icon/full-mdl2';

export interface SideNavItem {
  id: string;
  icon: string;
  name: string;
}

export interface SideNavProps {
  className: string;
  selectedItemId: string;
  items: SideNavItem[];
  onSelect: (id: string) => any;
}

export const SideNav = (props: SideNavProps) => <StyledNav className={props.className}>
  <div className="row">
    <button className="row__left button--main">
      <span className="button-icon">{FullMdl2.GlobalNavButton}</span>
    </button>
  </div>
  <div className="row">
    <button className="row__left button--main">
      <span className="button-icon">{FullMdl2.Home}</span>
      <span className="button-text">Home</span>
    </button>
  </div>
  <div className="row">
    <button className="row__left button--main">
      <span className="button-icon">{FullMdl2.Recent}</span>
      <span className="button-text">Recent</span>
    </button>
    <button className="row__right button--aux chevron mdl2">{FullMdl2.ChevronDownSmall}</button>
  </div>
  <div className="row">
    <button className="row__left button--main">
      <span className="button-icon">{FullMdl2.Pinned}</span>
      <span className="button-text">Pinned</span>
    </button>
    <button className="row__right button--aux chevron mdl2">{FullMdl2.ChevronDownSmall}</button>
  </div>
  {props.items.map(item => <div key={item.id} className={`row${item.id === props.selectedItemId ? ' row--selected':''}`}><button className="row__left button--main" onClick={() => props.onSelect(item.id)}><span className="button-icon">{item.icon}</span><span className="row__middle">{item.name}</span></button></div>)}
</StyledNav>;


const StyledNav = styled.nav`
  width: 199px;
  border-right: 1px solid var(--color-grey-30);
  background-color: var(--color-grey-20);
  height: 100%;

  .row {
    display: flex;
    height: var(--sn-row-height);
    font: var(--sn-row-font-rest);
  }

  .row--selected {
    background-color: var(--sn-row-background-selected);
    position: relative;
    font: var(--sn-row-font-selected);
  }

  .row:hover {
    box-shadow: var(--depth-2);
    background-color: var(--sn-row-background-hover);
    position: relative;
    z-index: var(--z-sm-row-hover);
  }

  .row--selected::before {
    content: '';
    height: 24px;
    width: 4px;
    border-radius: 2px;
    background-color: var(--sn-select-indicator-color);
    position: absolute;
    left: 4px;
    top: 8px;
  }

  .button--main {
    padding: 0;
    background: none;
    border: 0;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    display: flex;
    align-items: center;
  }

  .button-icon {
    width: var(--sn-collapsed-width);
    font-family: var(--ff-mdl2);
    font-size: 16px;
    font-weight: initial;
  }

  .button-text {
    font: inherit;
  }

  .button--aux {
    background: none;
    border: 0;
  }

  .row__left {
    display: flex;
    flex: 1 0 auto;
  }

  .row__left--solid {
    flex-grow: 0;
  }
  
  .row__right {
    width: var(--sn-right-slot-width);
    flex: 0 0 auto;
    align-self: stretch;
  }

  .chevron {
    font-size: 8px;
  }
`;