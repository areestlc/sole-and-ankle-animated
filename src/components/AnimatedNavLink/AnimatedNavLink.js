import React from "react";
import styled from 'styled-components/macro';
import { WEIGHTS } from '../../constants';

const AnimatedNavLink = ({ children, ...delegated}) => {
  const Wrapper = styled.a`
    position: relative;
    display: flex;
    flex-direction: column;

    /* Used to hide the text being moved in/out */
    overflow: hidden;
    color: var(--color-gray-900);
    text-decoration: none;
    cursor: pointer;

    &:first-of-type {
      color: var(--color-secondary);
    }
  `;

  const Text = styled.span`
    font-size: 1.125rem;
    text-transform: uppercase;
    display: block;
    transition: transform 500ms;
    transform: translateY(
      var(--translate-from)
    );

    @media (prefers-reduced-motion: no-preference) {
      ${Wrapper}:hover & {
        transition: transform 250ms;
        transform: translateY(
          var(--translate-to)
        );
      }
    }
  `;

  const MainText = styled(Text)`
    --translate-from: 0%;
    --translate-to: -100%;
    font-weight: ${WEIGHTS.medium};
  `;

  const HoverText = styled(Text)`
    --translate-from: 100%;
    --translate-to: 0%;
    position: absolute;
    top: 0;
    left: 0;
    font-weight: ${WEIGHTS.bold};
  `;

  return <Wrapper {...delegated}>
    <MainText>{children}</MainText>
    <HoverText>{children}</HoverText>
  </Wrapper>;
}

export default AnimatedNavLink;
