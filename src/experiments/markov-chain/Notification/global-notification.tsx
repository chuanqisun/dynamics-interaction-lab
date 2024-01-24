import * as React from "react";
import styled, { StyledComponent } from "styled-components";
import { contentEditable } from "../../../utils/content-editable";
import InfoSvg from "./info.svg";

export const GlobalNotification: React.FunctionComponent<any> = () => (
  <StyledDiv>
    <InfoSvg className="message-item--icon" />
    <strong className="message-item--strong" ref={contentEditable}>
      This record is read-only.&nbsp;
    </strong>
    <span ref={contentEditable}>You can’t change any field on this record because the status of this Opportunity is “closed”.</span>
  </StyledDiv>
);

const StyledDiv: StyledComponent<"div", any, any> = styled.div`
  flex-basis: 100vw;
  background-color: #fff4ce;
  border-bottom: 1px solid #e1dfdd;
  font-size: 12px;
  padding-left: 12px;
  line-height: 16px;
  padding-top: 6px;
  padding-bottom: 6px;

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
`;
