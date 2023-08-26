import React from "react";
import styled from "styled-components";

const StyledLine = styled.div`
  font-size: 24px;
  color: ${(props) => props.color || props.theme.colors.primary};

  @media ${(props) => props.theme.media.phone} {
    font-size: 14px;
  }

  @media ${(props) => props.theme.media.tablet} {
    font-size: 18px;
  }
`;

const Line = (props) => {
  return <StyledLine {...props} />;
};

export default Line;
