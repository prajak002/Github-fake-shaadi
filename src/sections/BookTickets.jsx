import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: ${(props) => props.theme.glassLight};
  backdrop-filter: blur(30px);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: ${(props) => props.theme.gradient2};
  }

  @media (max-width: 48em) {
    padding: 3rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  background: ${(props) => props.theme.gradient2};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  margin-bottom: 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 6px;
    background: ${(props) => props.theme.gradient2};
    border-radius: 3px;
  }

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.greyDark};
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const TicketGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 2rem 0;
`;

const TicketCard = styled(motion.div)`
  background: ${(props) => props.theme.glassMedium};
  backdrop-filter: blur(25px);
  border-radius: ${(props) => props.theme.radiusLarge};
  padding: 2.5rem;
  text-align: center;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.18);
  position: relative;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 
      0 20px 60px 0 rgba(31, 38, 135, 0.6),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.popular ? props.theme.gradient2 : 'linear-gradient(135deg, #ff9a8b, #fecfef)'};
    border-radius: ${(props) => props.theme.radiusLarge} ${(props) => props.theme.radiusLarge} 0 0;
  }

  .badge {
    position: absolute;
    top: -10px;
    right: 20px;
    background: ${(props) => props.theme.gradient2};
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  h3 {
    font-size: ${(props) => props.theme.fontlg};
    font-family: 'Kaushan Script';
    color: ${(props) => props.theme.text};
    margin-bottom: 1rem;
  }

  .price {
    font-size: ${(props) => props.theme.fontxxl};
    font-weight: 700;
    color: ${(props) => props.theme.text};
    margin: 1rem 0;
    
    .currency {
      font-size: ${(props) => props.theme.fontmd};
      vertical-align: top;
    }
    
    .old-price {
      font-size: ${(props) => props.theme.fontmd};
      text-decoration: line-through;
      color: ${(props) => props.theme.greyDark};
      margin-left: 0.5rem;
    }
  }

  .features {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
    
    li {
      padding: 0.5rem 0;
      color: ${(props) => props.theme.greyDark};
      font-size: ${(props) => props.theme.fontmd};
      
      &::before {
        content: "✓ ";
        color: #4ade80;
        font-weight: bold;
        margin-right: 0.5rem;
      }
    }
  }
`;

const BookButton = styled(motion.button)`
  background: ${(props) => props.theme.gradient2};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  cursor: pointer;
  width: 100%;
  margin-top: 1.5rem;
  box-shadow: 
    0 8px 32px 0 rgba(31, 38, 135, 0.37),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 
      0 16px 64px 0 rgba(31, 38, 135, 0.5),
      inset 0 1px 0 rgba(255, 255, 255, 0.4);
  }

  &:active {
    transform: translateY(0) scale(0.98);
  }
`;

const HighlightText = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(15px);
  border-radius: ${(props) => props.theme.radiusMedium};
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-top: 2rem;

  .emoji {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: ${(props) => props.theme.fontmd};
    color: ${(props) => props.theme.text};
    font-weight: 600;
  }
`;

const ticketPlans = [
  {
    name: "Single Entry",
    price: 239,
    originalPrice: 299,
    features: [
      "Full event access",
      "Interactive participation", 
      "Digital wedding album",
      "Certificate of participation",
      "Post-event highlights"
    ],
    popular: false
  },
  {
    name: "Couple Entry",
    price: 399,
    originalPrice: 499,
    features: [
      "2 participants access",
      "Couple competition entry",
      "Premium photo package",
      "Digital wedding album",
      "Exclusive couple moments",
      "Certificate of participation"
    ],
    popular: true
  },
  {
    name: "Family Pack",
    price: 719,
    originalPrice: 899,
    features: [
      "4 family members access",
      "Family photo session",
      "Group activities access",
      "Premium digital album",
      "Family certificates",
      "Special family moments"
    ],
    popular: false
  },
  {
    name: "VIP Experience",
    price: 1039,
    originalPrice: 1299,
    features: [
      "Premium event access",
      "VIP recognition",
      "Exclusive pre-event meet",
      "Premium photo package",
      "VIP certificate",
      "Special VIP moments",
      "Priority support"
    ],
    popular: false
  }
];

const BookTickets = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleBooking = (plan) => {
    setSelectedPlan(plan);
    // Create the booking page content
    const bookingPageContent = createBookingPage(plan);
    
    // Open in new tab/window
    const newWindow = window.open('', '_blank');
    newWindow.document.write(bookingPageContent);
    newWindow.document.close();
  };

  const createBookingPage = (plan) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Book ${plan.name} - Fake Shaadi Event</title>
        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Arial', sans-serif;
                background: linear-gradient(135deg, #ff9a8b 0%, #fecfef 50%, #fecfef 100%);
                min-height: 100vh;
                padding: 2rem;
            }
            
            .container {
                max-width: 800px;
                margin: 0 auto;
                background: rgba(255, 255, 255, 0.25);
                backdrop-filter: blur(30px);
                border-radius: 20px;
                padding: 3rem;
                border: 1px solid rgba(255, 255, 255, 0.18);
                box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
            }
            
            h1 {
                font-family: 'Kaushan Script', cursive;
                font-size: 2.5rem;
                text-align: center;
                margin-bottom: 2rem;
                background: linear-gradient(135deg, #ff6b9d, #c44569);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .plan-summary {
                background: rgba(255, 255, 255, 0.3);
                padding: 2rem;
                border-radius: 15px;
                margin-bottom: 2rem;
                text-align: center;
            }
            
            .form-group {
                margin-bottom: 1.5rem;
            }
            
            label {
                display: block;
                margin-bottom: 0.5rem;
                font-weight: 600;
                color: #333;
            }
            
            input, select, textarea {
                width: 100%;
                padding: 1rem;
                border: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                background: rgba(255, 255, 255, 0.5);
                backdrop-filter: blur(10px);
                font-size: 1rem;
            }
            
            .form-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 1rem;
            }
            
            .submit-btn {
                width: 100%;
                padding: 1.5rem;
                background: linear-gradient(135deg, #ff6b9d, #c44569);
                color: white;
                border: none;
                border-radius: 50px;
                font-size: 1.1rem;
                font-weight: 600;
                cursor: pointer;
                margin-top: 1rem;
                transition: all 0.3s ease;
            }
            
            .submit-btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            @media (max-width: 768px) {
                .form-row {
                    grid-template-columns: 1fr;
                }
                .container {
                    padding: 2rem;
                }
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🎉 Book Your Spot!</h1>
            
            <div class="plan-summary">
                <h2>${plan.name}</h2>
                <p style="font-size: 2rem; font-weight: 700; color: #ff6b9d; margin: 1rem 0;">
                    ₹${plan.price} <span style="font-size: 1rem; text-decoration: line-through; color: #666;">₹${plan.originalPrice}</span>
                </p>
                <p style="color: #4ade80; font-weight: 600;">💰 Save ₹${plan.originalPrice - plan.price}!</p>
            </div>
            
            <form id="bookingForm">
                <div class="form-row">
                    <div class="form-group">
                        <label for="firstName">First Name *</label>
                        <input type="text" id="firstName" name="firstName" required>
                    </div>
                    <div class="form-group">
                        <label for="lastName">Last Name *</label>
                        <input type="text" id="lastName" name="lastName" required>
                    </div>
                </div>
                
                <div class="form-row">
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="phone">Phone Number *</label>
                        <input type="tel" id="phone" name="phone" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="participants">Number of Participants</label>
                    <select id="participants" name="participants">
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="more">More than 4</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="dietary">Special Requirements (Optional)</label>
                    <textarea id="dietary" name="dietary" rows="3" placeholder="Any special requests, dietary requirements, or accessibility needs..."></textarea>
                </div>
                
                <div class="form-group">
                    <label for="experience">What are you most excited about?</label>
                    <select id="experience" name="experience">
                        <option value="">Select your interest...</option>
                        <option value="baraat">Baraat Ceremony</option>
                        <option value="sangeet">Sangeet & Dance</option>
                        <option value="mehendi">Mehendi Ceremony</option>
                        <option value="games">Interactive Games</option>
                        <option value="competitions">Competitions & Prizes</option>
                        <option value="networking">Meeting New People</option>
                        <option value="all">Everything!</option>
                    </select>
                </div>
                
                <button type="submit" class="submit-btn" onclick="submitBooking(event)">
                    🎊 Complete Booking - ₹${plan.price}
                </button>
            </form>
        </div>
        
        <script>
            function submitBooking(event) {
                event.preventDefault();
                
                // Get form data
                const formData = new FormData(document.getElementById('bookingForm'));
                const data = Object.fromEntries(formData);
                
                // Simple validation
                if (!data.firstName || !data.lastName || !data.email || !data.phone) {
                    alert('Please fill in all required fields!');
                    return;
                }
                
                // Show success message
                alert('🎉 Booking Successful!\\n\\nThank you for booking ${plan.name}!\\n\\nYou will receive a confirmation email shortly with:\\n• Event details & Zoom link\\n• Payment instructions\\n• Preparation guidelines\\n\\nWe can\\'t wait to celebrate with you! 💖');
                
                // Redirect or close
                setTimeout(() => {
                    window.close();
                }, 2000);
            }
        </script>
    </body>
    </html>
    `;
  };

  return (
    <Section id="book-tickets">
      <Container>
        <HeroTitle
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          🎟️ Book Your Tickets Now!
        </HeroTitle>
        
        <Subtitle
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the most fun virtual wedding celebration! Choose your perfect package and 
          get ready for an unforgettable experience filled with joy, laughter, and memories.
        </Subtitle>

        <TicketGrid>
          {ticketPlans.map((plan, index) => (
            <TicketCard
              key={index}
              popular={plan.popular}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleBooking(plan)}
            >
              {plan.popular && <div className="badge">🔥 Most Popular</div>}
              
              <h3>{plan.name}</h3>
              
              <div className="price">
                <span className="currency">₹</span>{plan.price}
                <span className="old-price">₹{plan.originalPrice}</span>
              </div>
              
              <ul className="features">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <BookButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Now - Save ₹{plan.originalPrice - plan.price}
              </BookButton>
            </TicketCard>
          ))}
        </TicketGrid>

        <HighlightText
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="emoji">⚡</div>
          <p>Early Bird Offer: 20% OFF - Limited Time Only!</p>
        </HighlightText>
      </Container>
    </Section>
  );
};

export default BookTickets;
