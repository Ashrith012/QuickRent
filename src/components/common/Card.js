import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${({ padding = 'lg' }) => 
    padding === 'sm' ? theme.spacing.sm :
    padding === 'md' ? theme.spacing.md :
    theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ elevation = 'md' }) =>
    elevation === 'sm' ? theme.shadows.sm :
    elevation === 'lg' ? theme.shadows.lg :
    theme.shadows.md};
  transition: all ${({ theme }) => theme.animations.duration.normal} ${({ theme }) => theme.animations.easeInOut};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primaryLight}, ${({ theme }) => theme.colors.secondary});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform ${({ theme }) => theme.animations.duration.normal} ${({ theme }) => theme.animations.easeInOut};
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    
    &::before {
      transform: scaleX(1);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;
