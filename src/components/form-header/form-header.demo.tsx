import * as React from 'react';
import styled from 'styled-components';

import {FormHeader, FormHeaderProps} from './form-header';

export class FormHeaderDemo extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      showReadOnlyMessage: false,
      showRecordImage: false,
      showFormSwitcher: true,
      fields: [0, 1, 2, 3],
    }
  }

  onFieldCountChange = (event: any) => {
    const newArray = Array.from(Array(parseInt(event.target.value)).keys());
    this.setState({fields: newArray});
  }

  toggleRecordImage = () => {
    this.setState({showRecordImage: !this.state.showRecordImage});
  }

  toggleFormSwitcher = () => {
    this.setState({showFormSwitcher: !this.state.showFormSwitcher});
  }

  toggleShowReadOnlyMessage = () => {
    this.setState({showReadOnlyMessage: !this.state.showReadOnlyMessage});
  }

  render() {
    return (
    <StyledPage>
      <FormHeader {...this.state as FormHeaderProps} ></FormHeader>
      <StyledSection className="prototype-notes">
        <h1>Design notes</h1>
        <ul>
          <li>Show form switcher only if there are multiple forms available. <button onClick={this.toggleFormSwitcher}>Toggle form switcher</button></li>
          <li>Read-only badge is now a persistent banner message on top <button onClick={this.toggleShowReadOnlyMessage}>Toggle read-only message</button></li>
          <li>Always show entity name as a small tag.</li>
          <li>Show large image only if record has its own unique image, e.g. Contacts. We will call it record image, instead of entity image.<button onClick={this.toggleRecordImage}>Toggle record image</button></li>
          <li>
            Strictly limit field count up to 4. Currently showing:&nbsp;{this.state.fields.length} of 4
            <input type="range" min="0" max="4" value={this.state.fields.length} onChange={this.onFieldCountChange}></input>
          </li>
        </ul>
      </StyledSection>

    </StyledPage>
    );
  }
}

const StyledPage = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledSection = styled.section`
  overflow: auto;
  background-color: rgba(255, 0, 0, 0.1);
`;

export default FormHeaderDemo;
