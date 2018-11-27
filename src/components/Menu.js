import React from 'react';
import { NavLink } from 'react-static';
import styled from 'styled-components';
//
import StyledNavLinkInner from '../elements/StyledNavLinkInner';
//

/* TODO: put styles in a wrapper at some ancestor level */

const Nav = styled.nav`
  padding: ${props => props.theme.space.one} 0 ${props => props.theme.space.two} 0;
  background-color: ${props => props.theme.color.overlayMedium};
  border-top: solid 1px ${props => props.theme.color.overlayLight};
  border-bottom: solid 1px black;
  width: 150%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);

  ul {
    padding-left: 0;
  }
`;

const Ol = styled.ol`
  list-style-type: none;
  padding-left: 0;
`;

const Li = styled.li`
  text-align: center;
  list-style-type: none;

  font-size: ${props => props.theme.type.large.fontSize};
  font-family: ${props => props.theme.type.primary.fontFamily};
  font-weight: ${props => props.theme.type.primary.fontWeight};
  line-height: ${props => props.theme.type.primary.lineHeight};
  padding: ${props => props.theme.space.half} 0;

  &:hover {
    color: white;
    background-color: ${props => props.theme.color.overlayLight};
  }
`;

export default ({ className, ...props }) => (
  <Ol className={className}>
    <Li>
      <StyledNavLinkInner>
        <NavLink exact to="/#home">
          Home
        </NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#shows">Shows</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#music">Music</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#bio">Bio</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#newsletter">Newsletter</NavLink>
      </StyledNavLinkInner>
    </Li>
    <Li>
      <StyledNavLinkInner>
        <NavLink to="/#contact">Contact</NavLink>
      </StyledNavLinkInner>
    </Li>
  </Ol>
);
