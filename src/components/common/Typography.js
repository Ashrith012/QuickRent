import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Title = styled(motion.h1)`
  font-size: ${({ size = '4xl' }) => theme.typography.fontSize[size]};
  font-weight: ${({ weight = 'bold' }) => theme.typography.fontWeight[weight]};
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 1.2;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  ${({ gradient }) => gradient && `
    background: linear-gradient(135deg, ${theme.colors.text.primary} 0%, ${theme.colors.text.secondary} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ size = '4xl' }) => {
      const sizes = {
        '4xl': theme.typography.fontSize['3xl'],
        '3xl': theme.typography.fontSize['2xl'],
        '2xl': theme.typography.fontSize.xl,
        xl: theme.typography.fontSize.lg,
      };
      return sizes[size] || size;
    }};
  }
`;

export const Text = styled(motion.p)`
  font-size: ${({ size = 'base' }) => theme.typography.fontSize[size]};
  font-weight: ${({ weight = 'normal' }) => theme.typography.fontWeight[weight]};
  color: ${({ color = 'secondary' }) => theme.colors.text[color]};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ size = 'base' }) => {
      const sizes = {
        lg: theme.typography.fontSize.base,
        base: theme.typography.fontSize.sm,
        sm: theme.typography.fontSize.xs,
      };
      return sizes[size] || size;
    }};
  }
`;
