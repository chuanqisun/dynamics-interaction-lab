import * as React from 'React';
import styled from 'styled-components';


export class BusinessProcessExperiment extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {

    };
  }
  render() {
    return <StyledNav>
      <button>Develop</button>
      <button>Qualify</button>
      <button>Propose</button>
      <button>Close</button>
    </StyledNav>
  }
}

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default BusinessProcessExperiment;