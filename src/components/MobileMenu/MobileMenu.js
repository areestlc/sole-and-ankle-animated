/* eslint-disable no-unused-vars */
import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  const navLinks = [
    { link: '/sale', linkText: 'Sale' },
    { link: '/new', linkText: 'New\u00A0Releases' },
    { link: '/men', linkText: 'Men' },
    { link: '/women', linkText: 'Women' },
    { link: '/kids', linkText: 'Kids' },
    { link: '/collections', linkText: 'Collections' }
  ]

  const subLinks = [
    { link: '/terms', linkText: 'Terms and Conditions' },
    { link: '/privacy', linkText: 'Privacy Policy' },
    { link: '/contact', linkText: 'Contact Us' },
  ]

  const contentBaseFadeInDelayInSeconds = 0.2;
  const perLinkDelayInSeconds = 0.125;

  return (
    <Overlay 
      isOpen={isOpen} 
      onDismiss={onDismiss}
      style={{
        backgroundColor: isOpen ? 'var(--color-backdrop)' : 'transparent'
      }}
      >
      <Content aria-label="Menu">
        <CloseButton onClick={onDismiss}>
          <Icon id="close" />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>

        </CloseButton>
        <Filler />
        <Nav>
          { navLinks.map((nav, index) => {
            const delay = contentBaseFadeInDelayInSeconds + (index * perLinkDelayInSeconds);
            return <NavLink
              style={{ animationDelay: delay + 's' }}
              key={index} 
              href={nav.link}>{nav.linkText}
            </NavLink>
          })
        }
        </Nav>
        <Footer>
          { subLinks.map((subLink, index) => {
            const delay = contentBaseFadeInDelayInSeconds + ((navLinks.length + index) * perLinkDelayInSeconds);

            return <SubLink
              style={{ animationDelay: delay + 's' }}
              key={index} 
              href={subLink.link}>{subLink.linkText}
            </SubLink> 
          })}
        </Footer>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    background-color: transparent;
  }
  to {
    background-color: var(--color-backdrop);
  }
`;

const swing = keyframes`
  to {
    transform: perspective(200px) rotateX(0deg);
  }
`;

const contentFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  transition: background-color;
  transition-timing-function: ease-in;
  transition-duration: 500ms;
  display: flex;
  justify-content: flex-end;
  animation: ${fadeIn} 0.4s ease;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Content = styled(DialogContent)`
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  //animation: ${slideIn} 0.6s cubic-bezier(.12,.94,.38,1);

  transform-origin: right; /* equivalent to 100% 50% */
  transform: perspective(200px) rotateY(-90deg);
  animation: ${swing} 1s cubic-bezier(.12,.94,.38,1) forwards;

  & * {
    animation: ${contentFadeIn} 0.6s ease;
    //animation-delay: 0.35s;
    animation-fill-mode: backwards;
  }
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;
const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const SubLink = styled.a`
  color: var(--color-gray-700);
  font-size: 0.875rem;
  text-decoration: none;
`;

export default MobileMenu;
