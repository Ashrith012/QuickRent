import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCheck, FiPlus } from 'react-icons/fi';

const Section = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(120deg, #f0f9ff 0%, #e0f2fe 50%, #f0f9ff 100%);
  position: relative;
  overflow: hidden;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    filter: blur(100px);
    opacity: 0.15;
    animation: moveGradient 10s ease infinite alternate;
  }

  &::before {
    background: #60a5fa;
    top: -10rem;
    left: -10rem;
  }

  &::after {
    background: #818cf8;
    bottom: -10rem;
    right: -10rem;
  }

  @keyframes moveGradient {
    0% { transform: translate(0, 0); }
    100% { transform: translate(50px, 50px); }
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: #1f2937;
  margin-bottom: 3rem;
`;

const GadgetGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const GadgetCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
                0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
`;

const GadgetImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const GadgetContent = styled.div`
  padding: 1.5rem;
`;

const GadgetName = styled.h3`
  font-size: 1.5rem;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const GadgetPrice = styled.div`
  font-size: 1.25rem;
  color: #2563eb;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
`;

const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #4b5563;
  margin-bottom: 0.5rem;
  
  svg {
    color: #2563eb;
    filter: drop-shadow(0 0 2px rgba(37, 99, 235, 0.3));
  }

  &:hover svg {
    transform: scale(1.2);
    transition: transform 0.3s ease;
  }
`;

const RentButton = styled(motion.button)`
  width: 100%;
  padding: 0.75rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const ListGadgetSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(96, 165, 250, 0.1),
      rgba(129, 140, 248, 0.1)
    );
    z-index: -1;
  }
`;

const ListGadgetTitle = styled.h3`
  font-size: 2rem;
  color: #1f2937;
  margin-bottom: 1rem;
`;

const ListGadgetDescription = styled.p`
  color: #4b5563;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ListGadgetButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1d4ed8;
  }
`;

const gadgets = [
  {
    id: 1,
    name: 'MacBook Pro M1',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    price: '$49/day',
    features: [
      'Latest M1 Chip',
      '16GB RAM',
      '512GB SSD',
      'AppleCare+ included',
    ]
  },
  {
    id: 2,
    name: 'Canon EOS R5',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80',
    price: '$39/day',
    features: [
      '45MP Full-Frame Sensor',
      '8K Video Recording',
      'Dual Card Slots',
      'Extra Battery Included',
    ]
  },
  {
    id: 3,
    name: 'PS5 Gaming Console',
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80',
    price: '$29/day',
    features: [
      '4K Gaming',
      'Two Controllers',
      '3 Games Included',
      'Online Gaming Access',
    ]
  }
];

const GadgetListing = () => {
  return (
    <Section id="gadgets">
      <Container>
        <Title>Available Gadgets</Title>
        <GadgetGrid>
          {gadgets.map((gadget) => (
            <GadgetCard
              key={gadget.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <GadgetImage src={gadget.image} alt={gadget.name} />
              <GadgetContent>
                <GadgetName>{gadget.name}</GadgetName>
                <GadgetPrice>{gadget.price}</GadgetPrice>
                <FeaturesList>
                  {gadget.features.map((feature, index) => (
                    <Feature key={index}>
                      <FiCheck /> {feature}
                    </Feature>
                  ))}
                </FeaturesList>
                <RentButton
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Rent Now
                </RentButton>
              </GadgetContent>
            </GadgetCard>
          ))}
        </GadgetGrid>

        <ListGadgetSection>
          <ListGadgetTitle>Have a Gadget to Rent?</ListGadgetTitle>
          <ListGadgetDescription>
            Join our community of gadget owners and start earning by renting out your devices.
            List your gadget in minutes and reach thousands of potential renters.
          </ListGadgetDescription>
          <ListGadgetButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiPlus /> List Your Gadget
          </ListGadgetButton>
        </ListGadgetSection>
      </Container>
    </Section>
  );
};

export default GadgetListing;
