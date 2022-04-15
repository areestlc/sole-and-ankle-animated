import React from "react";
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const AnimatedNavLink = (props) => {
  const NavText = styled.span`
    font-size: 1.125rem;
    text-transform: uppercase;
    font-weight: ${WEIGHTS.medium};
    color: inherit;
    transition: transform 200ms;
    display: block;
  `;

  const HoverNavText = styled(NavText)`
    position: absolute;
    font-weight: bold;
    transform: translateY(30px);
  `;

  const NavLink = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    color: var(--color-gray-900);
    text-decoration: none;
    cursor: pointer;

    &:hover ${NavText} {
      transform: translateY(-30px);
    }

    &:hover ${HoverNavText} {
      transform: translateY(0);
    }
  `;

  return <NavLink {...props}>
    <NavText>{props.children}</NavText>
    <HoverNavText>{props.children}</HoverNavText>
  </NavLink>;
}

export default AnimatedNavLink;
