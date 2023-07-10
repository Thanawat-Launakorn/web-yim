import styled from "styled-components";
import { Input, InputProps } from "antd";
import { FC } from "react";
import tw from "twin.macro";
const StyledInput = styled(Input)`
  width: 60%;
  border: none;
  outline: none;
  color: #333 !important;
  padding: 8px 25px !important;
  background-color: #0f1a2f !important;
  .ant-input-affix-wrapper {
    border: none;
  }
  .ant-input {
    background-color: transparent;
  }
`;

interface CInputProps extends InputProps {}

export const CInput: FC<CInputProps> = ({}) => {
  return <StyledInput />;
};
