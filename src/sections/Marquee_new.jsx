import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  padding: 4rem 0;
  position: relative;

  @media (max-width: 48em){
    width: 90vw;
  } 
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 64em){
    justify-content: center;
    gap: 2rem;
  }
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 70em){
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em){
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const VenueCard = styled(motion.div)`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  padding: 3rem;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 600px;
  text-align: center;

  h2 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: 'Kaushan Script';
    margin-bottom: 1.5rem;
  }

  .venue-details {
    font-size: ${(props) => props.theme.fontlg};
    line-height: 1.6;
    margin-bottom: 2rem;
  }

  .tech-requirements {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    
    h3 {
      font-size: ${(props) => props.theme.fontlg};
      margin-bottom: 1rem;
    }
    
    ul {
      list-style: none;
      padding: 0;
      
      li {
        margin: 0.5rem 0;
        font-size: ${(props) => props.theme.fontmd};
        
        &:before {
          content: "✓ ";
          color: #4ade80;
          font-weight: bold;
        }
      }
    }
  }
`;

const EventDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 2rem 0;
`;

const DetailCard = styled(motion.div)`
  background: ${(props) => props.theme.body};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => props.theme.text};
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.text};
  }

  p {
    font-size: ${(props) => props.theme.fontmd};
    line-height: 1.5;
    color: ${(props) => props.theme.text};
  }

  .highlight {
    color: #ff6b9d;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontlg};
    margin-top: 1rem;
  }
`;

const ContactButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  margin-top: 2rem;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const eventDetails = [
  {
    icon: "🎭",
    title: "Event Duration",
    content: "3-4 Hours of Pure Entertainment",
    highlight: "Non-stop Fun!"
  },
  {
    icon: "👥",
    title: "Expected Guests",
    content: "200+ Virtual Attendees from Around the World",
    highlight: "Global Celebration"
  },
  {
    icon: "🎪",
    title: "Event Activities",
    content: "Baraat, Sangeet, Mehendi, Games & More",
    highlight: "Full Wedding Experience"
  },
  {
    icon: "🏆",
    title: "Prizes & Rewards",
    content: "Best Dressed, Dance Competition, Fun Games",
    highlight: "Win Amazing Prizes!"
  }
];

const Marquee = () => {
  return (
    <Section>
      <Container id="venue-details">
        <Title
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          🏰 Venue & Event Details
        </Title>

        <VenueCard
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2>🖥️ Virtual Venue Information</h2>
          <div className="venue-details">
            <p><strong>Platform:</strong> Zoom Video Conference</p>
            <p><strong>Date:</strong> February 14, 2025 (Valentine's Day Special!)</p>
            <p><strong>Time:</strong> 7:00 PM IST onwards</p>
            <p><strong>Access:</strong> Meeting link provided 24 hours before event</p>
          </div>
          
          <div className="tech-requirements">
            <h3>📱 Technical Requirements</h3>
            <ul>
              <li>Stable internet connection (minimum 5 Mbps)</li>
              <li>Zoom app installed on device</li>
              <li>Working camera and microphone</li>
              <li>Good lighting for video participation</li>
              <li>Traditional outfit for the theme!</li>
            </ul>
          </div>
        </VenueCard>

        <EventDetailsGrid>
          {eventDetails.map((detail, index) => (
            <DetailCard
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="icon">{detail.icon}</div>
              <h3>{detail.title}</h3>
              <p>{detail.content}</p>
              <div className="highlight">{detail.highlight}</div>
            </DetailCard>
          ))}
        </EventDetailsGrid>

        <ContactButton
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('mailto:contact@fakeshaadi.com', '_blank')}
        >
          Contact Us for More Info 📧
        </ContactButton>
      </Container>
    </Section>
  );
};

export default Marquee;
