import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";

const Section = styled(motion.section)`
  min-height: 100vh;
  width: 80vw;
  margin: 0 auto;
  padding: 4rem 0;
  position: relative;

  @media (max-width: 48em) {
    width: 90vw;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 300;
  color: ${(props) => props.theme.text};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const EventCard = styled(motion.div)`
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  border-radius: 20px;
  padding: 3rem;
  margin: 2rem 0;
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  h2 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";
    margin-bottom: 1rem;
  }

  p {
    font-size: ${(props) => props.theme.fontmd};
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .date-venue {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    
    @media (max-width: 48em) {
      flex-direction: column;
    }
  }

  .info-box {
    background: rgba(255, 255, 255, 0.2);
    padding: 1rem;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    
    @media (max-width: 48em) {
      margin-bottom: 1rem;
    }
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const DetailCard = styled(motion.div)`
  background: ${(props) => props.theme.body};
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid ${(props) => props.theme.text};

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

  .price {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: bold;
    color: #ff6b9d;
    margin-top: 1rem;
  }
`;

const BookButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  cursor: pointer;
  margin: 2rem auto;
  display: block;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const Shop = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    
    gsap.fromTo(element.children, 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "bottom 20%",
          scroller: ".App",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="about-event">
      <Title
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        About the Event
      </Title>
      
      <EventCard
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2>🎭 Online Fake Shaadi 2025</h2>
        <p>
          Join us for the most hilarious and entertaining virtual wedding celebration! 
          Experience all the fun of a traditional Indian wedding from the comfort of your home.
        </p>
        <p>
          Get ready for virtual baraat, online sangeet, digital mehendi, and much more! 
          Dress up in your best shaadi outfits, bring your family, and let's celebrate love, 
          laughter, and pure entertainment.
        </p>
        
        <div className="date-venue">
          <div className="info-box">
            <h4>📅 Date & Time</h4>
            <p>February 14, 2025<br/>7:00 PM IST onwards</p>
          </div>
          <div className="info-box">
            <h4>📍 Venue</h4>
            <p>Online via Zoom<br/>Link provided after booking</p>
          </div>
        </div>
      </EventCard>

      <DetailsGrid>
        <DetailCard
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>🎪 Event Highlights</h3>
          <p>
            • Virtual Baraat with background music<br/>
            • Online Sangeet dance competitions<br/>
            • Digital Mehendi ceremony<br/>
            • Hilarious wedding games<br/>
            • Costume contest with prizes<br/>
            • Photo booth sessions
          </p>
        </DetailCard>

        <DetailCard
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>🎟️ Ticket Pricing</h3>
          <p>
            Single Entry: ₹299<br/>
            Couple Entry: ₹499<br/>
            Family Pack (4 people): ₹899<br/>
            VIP Experience: ₹1299
          </p>
          <div className="price">Special Early Bird: 20% OFF</div>
        </DetailCard>

        <DetailCard
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3>🎁 What's Included</h3>
          <p>
            • Access to all ceremonies<br/>
            • Digital wedding album<br/>
            • Virtual gift exchange<br/>
            • Certificate of participation<br/>
            • Access to exclusive photo gallery<br/>
            • Post-event highlights video
          </p>
        </DetailCard>
      </DetailsGrid>

      <BookButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => document.getElementById('book-tickets')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Book Your Tickets Now! 🎟️
      </BookButton>
    </Section>
  );
};

export default Shop;
