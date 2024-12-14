import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiShield, FiClock, FiDollarSign, FiHeart } from 'react-icons/fi';

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 40rem;
    height: 40rem;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.1;
    z-index: 1;
  }

  &::before {
    background: #60a5fa;
    top: -20rem;
    left: -20rem;
    animation: float 8s ease-in-out infinite;
  }

  &::after {
    background: #818cf8;
    bottom: -20rem;
    right: -20rem;
    animation: float 8s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
    100% { transform: translate(0, 0); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: #1e293b;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.1rem;
  color: #64748b;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
              0 10px 15px -3px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #60a5fa, #818cf8);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.1),
                0 20px 25px -5px rgba(0, 0, 0, 0.05);
    
    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #60a5fa20 0%, #818cf820 100%);
  position: relative;

  svg {
    font-size: 1.5rem;
    color: #2563eb;
    filter: drop-shadow(0 0 8px rgba(37, 99, 235, 0.2));
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: inherit;
    filter: blur(10px);
    opacity: 0.5;
    z-index: -1;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      icon: <FiShield />,
      title: 'Secure Transactions',
      description: 'Every rental transaction is protected with advanced security measures and insurance coverage.'
    },
    {
      icon: <FiClock />,
      title: 'Quick Process',
      description: 'Rent or list gadgets in minutes with our streamlined and user-friendly platform.'
    },
    {
      icon: <FiDollarSign />,
      title: 'Best Prices',
      description: 'Competitive pricing with transparent fees and no hidden charges for renters and owners.'
    },
    {
      icon: <FiHeart />,
      title: 'Quality Assured',
      description: 'All gadgets are verified and quality-checked before being listed on our platform.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <Section id="features">
      <Container>
        <Title
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose QuickRent?
        </Title>
        <Subtitle
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Experience the future of gadget rentals with our innovative platform designed for your convenience and security.
        </Subtitle>
        <Grid
          as={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
