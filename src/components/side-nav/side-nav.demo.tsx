import * as React from 'React';
import styled from 'styled-components';
import {SideNav} from './side-nav';
import {FullMdl2} from '../../styles/icon/full-mdl2';

export class SideNavDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      selectedItemId: '5',
      sitemapItems: [
        {id: '0', icon: FullMdl2.SummaryChart, name: 'Dashbaord'},
        {id: '1', icon: FullMdl2.AccountActivity, name: 'Activities'},
        {id: '2', icon: FullMdl2.DocumentSet, name: 'Accounts'},
        {id: '3', icon: FullMdl2.Contact, name: 'Contact'},
        {id: '4', icon: FullMdl2.CRMLead, name: 'Leads'},
        {id: '5', icon: FullMdl2.Opportunities, name: 'Opportunities'},
        {id: '6', icon: FullMdl2.GuestUser, name: 'Competitors'},
        {id: '7', icon: FullMdl2.Quotes, name: 'Quotes'},
        {id: '8', icon: FullMdl2.Query, name: 'Orders'},
        {id: '9', icon: FullMdl2.CRMInvoices, name: 'Invoices'},
        {id: '10', icon: FullMdl2.Product, name: 'Products'},
        {id: '11', icon: FullMdl2.CustomActivity, name: 'Cases'},
      ]
    };
  }



  onSelect = (id: string) => {
    this.setState({selectedItemId: id});
  }

  render() {
    return <React.Fragment>
    <StyledSection>
      <SideNav className="no-shrink" selectedItemId={this.state.selectedItemId} items={this.state.sitemapItems} onSelect={this.onSelect}></SideNav>
      <h2 className="lab-demo-h2">Sample</h2>
    </StyledSection>
    </React.Fragment>
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