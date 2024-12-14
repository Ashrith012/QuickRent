import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled(motion.section)`
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
  background: ${({ background, theme }) => background || theme.colors.background.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.md};
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minWidth = '280px' }) => minWidth}, 1fr)
  );
  gap: ${({ gap, theme }) => theme.spacing[gap] || theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const Flex = styled.div`
  display: flex;
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justify = 'center' }) => justify};
  gap: ${({ gap, theme }) => theme.spacing[gap] || theme.spacing.md};
  flex-direction: ${({ direction = 'row' }) => direction};
  flex-wrap: ${({ wrap = 'nowrap' }) => wrap};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: ${({ mobileStack }) => mobileStack ? 'column' : 'row'};
  }
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  width: ${({ size = '40rem' }) => size};
  height: ${({ size = '40rem' }) => size};
  border-radius: 50%;
  filter: blur(100px);
  opacity: ${({ opacity = 0.1 }) => opacity};
  background: ${({ color, theme }) => color || theme.colors.primary};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  z-index: 1;
  animation: float 8s ease-in-out infinite ${({ reverse }) => reverse ? 'reverse' : 'normal'};

  @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
    100% { transform: translate(0, 0); }
  }
`;
