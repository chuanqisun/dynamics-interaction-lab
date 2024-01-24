import * as React from "react";
import styled from "styled-components";
import { FullMdl2 } from "../../styles/icon/full-mdl2";
import { SideNav, SideNavProps } from "./side-nav";

export const sideNavDemoProps = {
  expanded: true,
  selectedItemId: "5",
  items: [
    { id: "0", icon: FullMdl2.SummaryChart, name: "Dashbaord" },
    { id: "1", icon: FullMdl2.AccountActivity, name: "Activities" },
    { id: "2", icon: FullMdl2.DocumentSet, name: "Accounts" },
    { id: "3", icon: FullMdl2.Contact, name: "Contact" },
    { id: "4", icon: FullMdl2.CRMLead, name: "Leads" },
    { id: "5", icon: FullMdl2.Opportunities, name: "Opportunities" },
    { id: "6", icon: FullMdl2.GuestUser, name: "Competitors" },
    { id: "7", icon: FullMdl2.Quotes, name: "Quotes" },
    { id: "8", icon: FullMdl2.Query, name: "Orders" },
    { id: "9", icon: FullMdl2.CRMInvoices, name: "Invoices" },
    { id: "10", icon: FullMdl2.Product, name: "Products" },
    { id: "11", icon: FullMdl2.CustomActivity, name: "Cases" },
  ],
  onSelect: (id: string) => {},
  onToggleExpanded: () => {},
};

export class SideNavDemo extends React.Component<any, SideNavProps> {
  constructor(props: any) {
    super(props);

    this.state = { ...sideNavDemoProps, ...{ onSelect: this.onSelect, onToggleExpanded: this.onToggleExpanded } };
  }

  onSelect = (id: string) => {
    this.setState({ selectedItemId: id });
  };

  onToggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    return (
      <React.Fragment>
        <StyledSection>
          <SideNav
            className="no-shrink"
            expanded={this.state.expanded}
            selectedItemId={this.state.selectedItemId}
            items={this.state.items}
            onSelect={this.onSelect}
            onToggleExpanded={this.onToggleExpanded}
          ></SideNav>
          <h2 className="lab-demo-h2">Sample</h2>
        </StyledSection>
      </React.Fragment>
    );
  }
}

const StyledSection = styled.section`
  display: flex;
  height: 100%;

  .no-shrink {
    flex: 0 0 auto;
  }
`;

export default SideNavDemo;
