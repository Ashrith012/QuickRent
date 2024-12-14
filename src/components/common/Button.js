import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const buttonSizes = {
  sm: '0.5rem 1rem',
  md: '0.625rem 1.5rem',
  lg: '0.75rem 2rem'
};

const getButtonStyles = ({ variant = 'primary', theme }) => {
  const styles = {
    primary: css`
      background: linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.primaryDark} 100%);
      color: #ffffff;
    `,
    secondary: css`
      background: transparent;
      color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.primary}20;
      &:hover {
        background: ${theme.colors.primary}10;
      }
    `
  };
  return styles[variant];
};

export const Button = styled(motion.button)`
  padding: ${({ size = 'md' }) => buttonSizes[size]};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  overflow: hidden;
  transition: all ${({ theme }) => theme.animations.duration.normal} ${({ theme }) => theme.animations.easeInOut};

  ${getButtonStyles}

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
    justify-content: center;
  }
`;
