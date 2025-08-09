import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';

import img1 from '../assets/Images/1.webp';
import img2 from '../assets/Images/2.webp';
import img3 from '../assets/Images/3.webp';
import img4 from '../assets/Images/4.webp';
import img5 from '../assets/Images/5.webp';
import img6 from '../assets/Images/6.webp';
import img7 from '../assets/Images/7.webp';
import img8 from '../assets/Images/8.webp';
import img9 from '../assets/Images/9.webp';
import img10 from '../assets/Images/10.webp';
import img11 from '../assets/Images/11.webp';
import img12 from '../assets/Images/12.webp';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
`;

const Title = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: 'Kaushan Script';
  font-weight: 300;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const GalleryContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 48em) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
  }
`;

const PhotoCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
  }

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  h3 {
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 600;
    margin: 1rem 0 0.5rem;
    color: ${(props) => props.theme.text};
    text-align: center;
  }

  p {
    font-size: ${(props) => props.theme.fontsm};
    color: #666;
    text-align: center;
    margin-bottom: 1rem;
  }
`;

const ViewMoreButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b9d, #c44569);
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: ${(props) => props.theme.fontmd};
  font-weight: 600;
  cursor: pointer;
  margin: 3rem auto;
  display: block;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  }
`;

const DescriptionText = styled(motion.div)`
  width: 80%;
  margin: 0 auto 3rem;
  text-align: center;
  color: white;
  font-size: ${(props) => props.theme.fontmd};
  line-height: 1.6;
  
  @media (max-width: 48em) {
    width: 90%;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const galleryData = [
  { img: img1, title: "Virtual Baraat Entry", desc: "The most epic online entrance ever!" },
  { img: img2, title: "Sangeet Dance Battle", desc: "Epic dance moves from home!" },
  { img: img3, title: "Digital Mehendi Magic", desc: "Beautiful henna designs shared online" },
  { img: img4, title: "Zoom Haldi Ceremony", desc: "Yellow everywhere, even on screen!" },
  { img: img5, title: "Best Dressed Awards", desc: "Stunning traditional outfits" },
  { img: img6, title: "Family Fun Moments", desc: "Laughter shared across screens" },
  { img: img7, title: "Pet Wedding Guests", desc: "Our furry friends joined too!" },
  { img: img8, title: "Virtual Food Sharing", desc: "Delicious dishes from every home" },
  { img: img9, title: "Online Game Winners", desc: "Fun competitions and prizes" },
  { img: img10, title: "Couple Moments", desc: "Love celebrated virtually" },
  { img: img11, title: "Grand Finale", desc: "The perfect ending to our event" },
  { img: img12, title: "Group Celebrations", desc: "All together, yet apart!" }
];

const PhotoGallery = ({ img, title, desc, index }) => {
  return (
    <PhotoCard
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{desc}</p>
    </PhotoCard>
  );
};

const NewArrival = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    
    gsap.fromTo(element.querySelector('.gallery-container'), 
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
          trigger: element,
          start: "top 70%",
          end: "bottom 30%",
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
    <Section ref={ref} id="gallery">
      <Title
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        📸 Event Photo Gallery
      </Title>
      
      <DescriptionText
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Relive the magical moments from our Online Fake Shaadi Event! From hilarious family reactions 
        to stunning traditional outfits, every moment was captured to perfection. See the joy, 
        laughter, and celebration that made this virtual wedding unforgettable.
      </DescriptionText>

      <GalleryContainer className="gallery-container">
        {galleryData.map((item, index) => (
          <PhotoGallery 
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            index={index}
          />
        ))}
      </GalleryContainer>

      <ViewMoreButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => alert('More photos coming soon! 📷')}
      >
        View All Photos 📸
      </ViewMoreButton>
    </Section>
  );
};

export default NewArrival;
