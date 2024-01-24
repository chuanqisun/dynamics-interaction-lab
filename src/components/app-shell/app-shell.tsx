import * as React from "react";
import styled from "styled-components";
import { FullMdl2 } from "../../styles/icon/full-mdl2";

// Todo, move to the right place
const constants = {
  titleWidth: 160,
  shellHeight: 48,
  shellDividerSideMargin: 8,
  shellDividerVerticalMargin: 16,
  dividerStrokeWidth: 1,
};

interface Item {
  label: string;
  icon: string;
}

interface ReflowPlan {
  dynamicsDisplayStack: Item[];
  systemDisplayStack: Item[];
  dynamicsOverflowStack: Item[];
  systemOverflowStack: Item[];
  customOverflowStack: Item[];
}

export interface AppShellState {
  showOverflowMenu: boolean;
  dynamicsDisplayStack: Item[];
  systemDisplayStack: Item[];
  dynamicsOverflowStack: Item[];
  systemOverflowStack: Item[];
  customOverflowStack: Item[];
}

export interface AppShellProps {
  avatarImgUrl: string;
  dynamicsDisplayStack: Item[];
  systemDisplayStack: Item[];
  customOverflowStack: Item[];
}

export class AppShell extends React.Component<AppShellProps, AppShellState> {
  constructor(props: AppShellProps) {
    super(props);

    this.state = {
      showOverflowMenu: false,
      dynamicsDisplayStack: [...this.props.dynamicsDisplayStack],
      systemDisplayStack: [...this.props.systemDisplayStack],
      dynamicsOverflowStack: [],
      systemOverflowStack: [],
      customOverflowStack: [...this.props.customOverflowStack],
    };
  }

  updateDimensions = () => {
    this.reflowItems();
  };

  reflowItems = () => {
    const plan: ReflowPlan = {
      dynamicsDisplayStack: [...this.props.dynamicsDisplayStack],
      systemDisplayStack: [...this.props.systemDisplayStack],
      dynamicsOverflowStack: [],
      systemOverflowStack: [],
      customOverflowStack: [...this.props.customOverflowStack],
    };

    while (this.canReduce(plan) && this.getRemainingSpace(plan) < 0) {
      if (plan.dynamicsDisplayStack.length) {
        // 1. reflow dynamics actions
        [plan.dynamicsOverflowStack, plan.dynamicsDisplayStack] = [plan.dynamicsDisplayStack, []];
      } else {
        // 2. reflow system actions
        [plan.systemOverflowStack, plan.systemDisplayStack] = [plan.systemDisplayStack, []];
      }
    }

    this.setState(plan);
  };

  canReduce = (plan: ReflowPlan) => {
    return plan.dynamicsDisplayStack.length + plan.systemDisplayStack.length > 0;
  };

  editable = (e: any) => e && (e.contentEditable = true) && (e.spellcheck = false);

  getRemainingSpace = (plan: ReflowPlan) => {
    const waffle = constants.shellHeight;
    const titleWidth = constants.titleWidth;
    const search = constants.shellHeight;
    const dynamicsActions = constants.shellHeight * plan.dynamicsDisplayStack.length;
    const customAction =
      plan.customOverflowStack.length === 1 && !plan.dynamicsOverflowStack.length && !plan.systemOverflowStack.length ? constants.shellHeight : 0;
    const overflowMenu = plan.customOverflowStack.length + plan.dynamicsOverflowStack.length + plan.systemOverflowStack.length > 1 ? constants.shellHeight : 0;
    const divider = plan.systemDisplayStack.length ? constants.shellDividerSideMargin * 2 + constants.dividerStrokeWidth : 0;
    const systemActions = constants.shellHeight * plan.systemDisplayStack.length;
    const me = constants.shellHeight;

    return window.innerWidth - (waffle + titleWidth + search + dynamicsActions + customAction + overflowMenu + divider + systemActions + me);
  };

  getOverflowItems = (currentState: AppShellState) => [
    ...currentState.customOverflowStack,
    ...currentState.dynamicsOverflowStack,
    ...currentState.systemOverflowStack,
  ];

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  componentDidUpdate(prevProps: AppShellProps) {
    if (prevProps.customOverflowStack !== this.props.customOverflowStack) {
      this.updateDimensions();
    }
  }

  toggleOverflowMenu = () => {
    this.setState({ showOverflowMenu: !this.state.showOverflowMenu });
  };

  render() {
    return (
      <StyledHeader>
        <button className="shell-icon-button shell-icon-button--waffle">{FullMdl2.WaffleOffice365}</button>
        <div className="shell-title" ref={this.editable}>
          Sales
        </div>
        <button className="shell-icon-button">{FullMdl2.Search}</button>
        {this.state.dynamicsDisplayStack.map((item) => (
          <button key={item.label} className="shell-icon-button">
            {item.icon}
          </button>
        ))}
        {this.getOverflowItems(this.state).length > 1 ? (
          <button onClick={this.toggleOverflowMenu} className="shell-icon-button shell-icon-button--more">
            {FullMdl2.More}
            {this.state.showOverflowMenu ? (
              <div className="overflow-menu">
                {[...this.state.dynamicsOverflowStack, ...this.state.customOverflowStack].map((item) => (
                  <div key={item.label} className="menu-row">
                    <span className="menu-row__icon">{item.icon}</span>
                    <span className="menu-row__text">{item.label}</span>
                  </div>
                ))}
                {this.state.systemOverflowStack.length ? <div className="menu-divider"></div> : null}
                {this.state.systemOverflowStack.map((item) => (
                  <div key={item.label} className="menu-row">
                    <span className="menu-row__icon">{item.icon}</span>
                    <span className="menu-row__text">{item.label}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </button>
        ) : this.getOverflowItems(this.state).length > 0 ? (
          <button className="shell-icon-button">{this.state.customOverflowStack[0].icon}</button>
        ) : null}
        {this.state.systemDisplayStack.length ? <div className="shell-divider"></div> : null}
        {this.state.systemDisplayStack.map((item) => (
          <button key={item.label} className="shell-icon-button">
            {item.icon}
          </button>
        ))}
        <button className="shell-icon-button shell-icon-button--avatar">
          <img className="avatar" alt="your avatar" src={this.props.avatarImgUrl}></img>
        </button>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  color: white;
  display: flex;
  align-items: center;
  height: ${constants.shellHeight}px;
  background-color: #002050;

  .overflow-menu {
    background-color: white;
    color: black;
    font-family: var(--ff-segoe-ui);
    position: absolute;
    top: ${constants.shellHeight}px;
    right: 0;
    box-shadow: 0 3.2px 7.2px 0 rgba(0, 0, 0, 0.132), 0 0.6px 1.8px 0 rgba(0, 0, 0, 0.108);
  }

  .menu-row__text {
    white-space: nowrap;
  }

  .menu-row {
    display: flex;
    margin: 16px 16px;
    align-items: center;
  }

  .menu-row__icon {
    font-family: var(--ff-mdl2);
    flex: 0 0 16px;
    margin-right: 16px;
  }

  .menu-divider {
    height: 1px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  .shell-divider {
    align-self: stretch;
    margin: ${constants.shellDividerVerticalMargin}px ${constants.shellDividerSideMargin}px;
    width: ${constants.dividerStrokeWidth}px;
    flex: 0 0 auto;
    background-color: rgba(255, 255, 255, 0.55);
  }

  .shell-title {
    flex: 1 1 auto;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
  }

  .shell-icon-button {
    background-color: transparent;
    flex: 0 0 auto;
    color: white;
    border: none;
    font-size: 16px;
    font-family: var(--ff-mdl2);
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${constants.shellHeight}px;
    width: ${constants.shellHeight}px;
  }

  .shell-icon-button--avatar {
    height: ${constants.shellHeight}px;
    width: ${constants.shellHeight}px;
    box-sizing: border-box;

    .avatar {
      border-radius: 50%;
      height: calc(0.6 * ${constants.shellHeight}px);
      width: calc(0.6 * ${constants.shellHeight}px);
      box-sizing: border-box;
    }
  }

  .shell-icon-button--more {
    position: relative;
  }
`;
