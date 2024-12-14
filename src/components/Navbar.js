import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiHome, FiBox, FiPhone, FiUser, FiMenu, FiX, FiSmartphone } from 'react-icons/fi';
import { useScrollEffect } from '../hooks/useScrollEffect';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { Button } from './common/Button';
import { Flex } from './common/Layout';
import { slideIn } from '../utils/animations';

const Nav = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &.scrolled {
    height: 50px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Logo = styled(motion.a)`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const NavItems = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s ease;

  svg {
    width: 1rem;
    height: 1rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MobileMenu = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  padding: 0.25rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  
  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 999;
`;

const MobileMenuContent = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: ${({ theme }) => theme.colors.background.primary};
  padding: ${({ theme }) => theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  z-index: 1000;
`;

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isScrolled = useScrollEffect(50);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 60; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { icon: <FiHome />, text: 'Home', href: '#home' },
    { icon: <FiBox />, text: 'Features', href: '#features' },
    { icon: <FiSmartphone />, text: 'Gadgets', href: '#gadgets' },
    { icon: <FiPhone />, text: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <Nav className={isScrolled ? 'scrolled' : ''}>
        <Logo href="#home" onClick={(e) => handleNavClick(e, 'home')}>
          <FiBox /> QuickRent
        </Logo>
        <NavItems>
          {navLinks.map(({ icon, text, href }) => (
            <NavLink 
              key={href} 
              href={href}
              onClick={(e) => handleNavClick(e, href.substring(1))}
              whileHover={{ y: -2 }}
            >
              {icon} {text}
            </NavLink>
          ))}
          <Button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiUser /> Sign Up
          </Button>
        </NavItems>
        {isMobile && (
          <MobileMenu onClick={() => setIsMobileMenuOpen(true)}>
            <FiMenu />
          </MobileMenu>
        )}
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <MobileMenuOverlay
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <MobileMenuContent
              variants={slideIn()}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <Flex justify="flex-end">
                <MobileMenu onClick={() => setIsMobileMenuOpen(false)}>
                  <FiX />
                </MobileMenu>
              </Flex>
              <Flex direction="column" gap="lg">
                {navLinks.map(({ icon, text, href }) => (
                  <NavLink
                    key={href}
                    href={href}
                    onClick={(e) => handleNavClick(e, href.substring(1))}
                    whileHover={{ x: 10 }}
                  >
                    {icon} {text}
                  </NavLink>
                ))}
                <Button fullWidth>
                  <FiUser /> Sign Up
                </Button>
              </Flex>
            </MobileMenuContent>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
