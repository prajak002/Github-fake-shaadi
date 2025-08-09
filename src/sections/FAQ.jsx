import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 85vw;
  margin: 2rem auto;
  padding: 6rem 0;
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: ${(props) => props.theme.radiusLarge};
  box-shadow: ${(props) => props.theme.shadowHeavy};
  border: 1px solid rgba(255, 255, 255, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${(props) => props.theme.gradient2};
    border-radius: ${(props) => props.theme.radiusLarge} ${(props) => props.theme.radiusLarge} 0 0;
  }

  @media (max-width: 48em) {
    width: 90vw;
    padding: 4rem 0;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  font-weight: 400;
  background: ${(props) => props.theme.gradient2};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${(props) => props.theme.gradient2};
    border-radius: 2px;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
    margin-bottom: 3rem;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled(motion.div)`
  background: ${(props) => props.theme.glassLight};
  backdrop-filter: blur(15px);
  border-radius: 15px;
  margin-bottom: 1rem;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.4);
    box-shadow: 
      0 16px 64px 0 rgba(31, 38, 135, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }
`;

const QuestionButton = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
  }

  .icon {
    transition: transform 0.3s ease;
    font-size: 1.5rem;
  }

  &.active .icon {
    transform: rotate(45deg);
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  font-size: ${(props) => props.theme.fontmd};
  line-height: 1.6;
  color: ${(props) => props.theme.greyDark};
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const TermsSection = styled(motion.div)`
  background: ${(props) => props.theme.glassMedium};
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 3rem;
  margin-top: 3rem;
  color: ${(props) => props.theme.text};
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);

  h2 {
    font-size: ${(props) => props.theme.fontxxl};
    font-family: "Kaushan Script";
    margin-bottom: 2rem;
    text-align: center;
    color: ${(props) => props.theme.text};
  }

  .terms-content {
    font-size: ${(props) => props.theme.fontmd};
    line-height: 1.6;
    color: ${(props) => props.theme.greyDark};
    
    h3 {
      margin: 1.5rem 0 1rem;
      font-size: ${(props) => props.theme.fontlg};
      color: ${(props) => props.theme.text};
    }
    
    p {
      margin-bottom: 1rem;
    }
    
    ul {
      margin: 1rem 0;
      padding-left: 2rem;
      
      li {
        margin: 0.5rem 0;
      }
    }
  }
`;

const faqData = [
  {
    question: "🎭 What is the Online Fake Shaadi Event?",
    answer: "It's a fun virtual wedding celebration where participants can experience all the joy of an Indian wedding from their homes. It includes traditional ceremonies like baraat, sangeet, mehendi, and more - all adapted for online participation!"
  },
  {
    question: "🎟️ How do I book tickets?",
    answer: "You can book tickets through our website by clicking the 'Book Tickets' button. Choose from single entry (₹299), couple entry (₹499), family pack (₹899), or VIP experience (₹1299). Early bird discount of 20% is available!"
  },
  {
    question: "📱 What do I need to participate?",
    answer: "You need a stable internet connection (minimum 5 Mbps), Zoom app installed on your device, working camera and microphone, good lighting, and most importantly - a traditional outfit to match the theme!"
  },
  {
    question: "⏰ How long is the event?",
    answer: "The event runs for 3-4 hours of non-stop entertainment, starting at 7:00 PM IST on February 14, 2025. We'll have multiple segments including ceremonies, games, competitions, and prizes!"
  },
  {
    question: "🏆 Are there prizes and competitions?",
    answer: "Yes! We have competitions for best dressed, dance battles, fun games, and more. Prizes include gift vouchers, traditional accessories, and certificates of participation. Everyone gets a digital wedding album!"
  },
  {
    question: "👨‍👩‍👧‍👦 Can my whole family participate?",
    answer: "Absolutely! We encourage family participation. We have special family packs for 4 people at ₹899. Kids, grandparents, and even pets are welcome to join the celebration!"
  },
  {
    question: "📷 Will there be photos and videos?",
    answer: "Yes! We'll capture all the fun moments and create a digital wedding album for all participants. You'll also get access to our exclusive photo gallery and post-event highlights video."
  },
  {
    question: "🔄 What if I have technical issues?",
    answer: "We have a dedicated tech support team available throughout the event. We'll also send you the Zoom link 24 hours in advance with setup instructions and troubleshooting tips."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section id="faq-terms">
      <Title
        as={motion.h1}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        ❓ FAQ & Terms
      </Title>

      <FAQContainer>
        {faqData.map((faq, index) => (
          <FAQItem
            key={index}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <QuestionButton
              onClick={() => toggleFAQ(index)}
              className={openIndex === index ? 'active' : ''}
            >
              {faq.question}
              <span className="icon">+</span>
            </QuestionButton>
            <AnimatePresence>
              {openIndex === index && (
                <Answer
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </Answer>
              )}
            </AnimatePresence>
          </FAQItem>
        ))}
      </FAQContainer>

      <TermsSection
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>📋 Terms & Conditions</h2>
        <div className="terms-content">
          <h3>🎫 Booking & Payment</h3>
          <ul>
            <li>All ticket sales are final. No refunds will be provided.</li>
            <li>Early bird discount valid until February 1, 2025.</li>
            <li>Group discounts available for bookings of 10+ people.</li>
          </ul>

          <h3>🖥️ Event Participation</h3>
          <ul>
            <li>Participants must have a stable internet connection.</li>
            <li>Traditional attire is encouraged but not mandatory.</li>
            <li>Recording the event is prohibited without permission.</li>
            <li>Disruptive behavior may result in removal from the event.</li>
          </ul>

          <h3>📸 Media & Privacy</h3>
          <ul>
            <li>By participating, you consent to being photographed/recorded.</li>
            <li>Event photos may be used for promotional purposes.</li>
            <li>Personal information will be kept confidential.</li>
          </ul>

          <h3>⚠️ Liability</h3>
          <p>
            The organizers are not responsible for technical issues, internet connectivity problems, 
            or any other factors beyond our control that may affect your participation in the event.
          </p>

          <h3>📞 Contact</h3>
          <p>
            For any queries or support, please contact us at: <br/>
            📧 Email: contact@fakeshaadi.com <br/>
            📱 WhatsApp: +91-9876543210
          </p>
        </div>
      </TermsSection>
    </Section>
  );
};

export default FAQ;
