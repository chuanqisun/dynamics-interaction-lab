import * as React from 'react';
import styled, {StyledComponent} from 'styled-components';
import {FullMdl2} from '../../styles/icon/full-mdl2';

export interface SideNavItem {
  id: string;
  icon: string;
  name: string;
}

export interface SideNavProps {
  expanded: boolean;
  className?: string;
  selectedItemId: string;
  items: SideNavItem[];
  onSelect: (id: string) => any;
  onToggleExpanded: () => any;
}

export interface StyledNavProps extends Partial<SideNavProps> {};

export const SideNav = (props: SideNavProps) => <StyledNav className={props.className} expanded={props.expanded}>
  <div className="row">
    <button className="row__left row-button" onClick={props.onToggleExpanded}>
      <span className="row-button__icon">{FullMdl2.GlobalNavButton}</span>
    </button>
  </div>
  <div className="row">
    <button className="row__left row-button">
      <span className="row-button__icon">{FullMdl2.Home}</span>
      <span className="row-button__text">Home</span>
    </button>
  </div>
  <div className="row">
    <button className="row__left row-button">
      <span className="row-button__icon">{FullMdl2.Recent}</span>
      <span className="row-button__text">Recent</span>
      <span className="row-button__chevron">{FullMdl2.ChevronDownSmall}</span>
    </button>
  </div>
  <div className="row">
    <button className="row__left row-button">
      <span className="row-button__icon">{FullMdl2.Pinned}</span>
      <span className="row-button__text">Pinned</span>
      <span className="row-button__chevron">{FullMdl2.ChevronDownSmall}</span>
    </button>
  </div>
  {props.items.map(item => <div key={item.id} className={`row${item.id === props.selectedItemId ? ' row--selected':''}`}>
    <button className="row__left row-button" onClick={() => props.onSelect(item.id)}>
      <span className="row-button__icon">{item.icon}</span>
      <span className="row-button__text">{item.name}</span>
    </button>
  </div>)}
</StyledNav>;

const StyledNav: StyledComponent<'nav', any, StyledNavProps> = styled.nav`
  width: ${(props: StyledNavProps) => props.expanded ? 'var(--sn-expanded-width)' : 'var(--sn-collapsed-width)'};
  border-right: 1px solid var(--color-grey-30);
  background-color: var(--color-grey-20);
  height: 100%;
  overflow-y: ${(props: StyledNavProps) => props.expanded ? 'auto' : 'hidden'};

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
    height: var(--sn-select-indicator-height);
    width: var(--sn-select-indicator-width);
    border-radius: calc(var(--sn-select-indicator-width) / 2);
    background-color: var(--sn-select-indicator-color);
    position: absolute;
    left: var(--sn-select-indicator-to-left-edge-gap);
    top: calc((var(--sn-row-height) - var(--sn-select-indicator-height)) / 2);
  }

  .row-button {
    align-items: center;
    background: none;
    border: 0;
    display: flex;
    flex: 1 0 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    padding: 0;
    width: 100%;
  }

  .row-button__icon {
    width: var(--sn-collapsed-width);
    font-family: var(--ff-mdl2);
    font-size: 16px;
    font-weight: initial;
    flex: 0 0 auto;
  }

  .row-button__text {
    font: inherit;
    flex: 1 1 auto;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    display: ${(props: StyledNavProps) => props.expanded ? 'initial' : 'none'}
  }

  .row-button__text:last-child {
    padding-right: calc((var(--sn-right-slot-width) - var(--sn-chevron-font-size)) / 2); /* align with chevron right edge */
  }

  .row-button__chevron {
    flex: 0 0 auto;
    width: var(--sn-right-slot-width);
    font-family: var(--ff-mdl2);
    font-size: var(--sn-chevron-font-size);
    display: ${(props: StyledNavProps) => props.expanded ? 'initial' : 'none'}
  }
`;