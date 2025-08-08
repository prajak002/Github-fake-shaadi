import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";

import Logo from "../assets/Svgs/star_white_48dp.svg";
// Placeholder QR and social icons, replace with your own assets if needed

const Section = styled.footer`
  width: 100%;
  background: #222;
  color: #fff;
  padding: 2.5rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90vw;
  margin: 0 auto;
  flex-wrap: wrap;
`;

const LogoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 180px;
  img {
    width: 120px;
    margin-bottom: 0.5rem;
  }
  h3 {
    font-family: "Kaushan Script";
    font-size: 2rem;
    margin: 0;
    color: #fff;
  }
`;

const LinksCol = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 300px;
  a, span {
    color: #fff;
    font-weight: 600;
    text-decoration: none;
    font-size: 1.05rem;
    transition: color 0.2s;
    &:hover { color: #ffb700; }
  }
`;

const QRCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 160px;
  img {
    width: 90px;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }
  span {
    color: #fff;
    font-size: 0.95rem;
    margin-top: 0.2rem;
  }
`;

const SocialRow = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.2rem;
  a {
    color: #fff;
    font-size: 1.6rem;
    transition: color 0.2s;
    &:hover { color: #ffb700; }
  }
`;

const Legal = styled.div`
  width: 90vw;
  margin: 2rem auto 0 auto;
  color: #aaa;
  font-size: 0.98rem;
  text-align: left;
  padding-bottom: 1.5rem;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 10vw;
    height: auto;
  }

  h3 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontxxl};

    @media (max-width: 48em) {
      font-size: ${(props) => props.theme.fontxl};
    }
  }
`;

const FooterComponent = styled(motion.footer)`
  width: 80vw;

  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 0 1rem;
    border-top: 1px solid ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.text};

    @media (max-width: 48em) {
      justify-content: center;
    }
  }

  li {
    padding: 2rem;
    font-size: ${(props) => props.theme.fontlg};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
    }

    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;

const Bottom = styled.div`
  padding: 0.5rem 0;
  margin: 0 4rem;
  font-size: ${(props) => props.theme.fontlg};

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: underline;
  }

  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    span {
      transform: none !important;
    }
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const Footer = () => {
  const { scroll } = useLocomotiveScroll();

  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    // console.log(elem);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.25, 0.0, 0.35, 1.0],
    });
  };

  return (
    <Section>
      <TopRow>
        <LogoCol>
          <img src={Logo} alt="Fake Shaadi" />
          <h3>Fake Shaadi</h3>
        </LogoCol>
        <LinksCol>
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
          <a href="#">List your events</a>
        </LinksCol>
        <QRCol>
          <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://fakeshaadi.com/app" alt="QR Code" />
          <span>Scan to download the app</span>
          <SocialRow>
            <a href="#" aria-label="Facebook"><svg width="24" height="24" fill="currentColor"><path d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.632.771-1.632 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg width="24" height="24" fill="currentColor"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 2.25a6.25 6.25 0 1 1 0 12.5 6.25 6.25 0 0 1 0-12.5zm0 1.5a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5zm6.25 1.25a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg></a>
            <a href="#" aria-label="X"><svg width="24" height="24" fill="currentColor"><path d="M17.53 2H6.47A4.47 4.47 0 0 0 2 6.47v11.06A4.47 4.47 0 0 0 6.47 22h11.06A4.47 4.47 0 0 0 22 17.53V6.47A4.47 4.47 0 0 0 17.53 2zM8.47 7.53h1.06l2.47 3.47 2.47-3.47h1.06l-3 4.24 3.06 4.23h-1.06l-2.53-3.53-2.53 3.53H7.41l3.06-4.23-3-4.24zm9.06 10A2.53 2.53 0 0 1 15 20.06H9A2.53 2.53 0 0 1 6.47 17.53V6.47A2.53 2.53 0 0 1 9 3.94h6A2.53 2.53 0 0 1 17.53 6.47v11.06z"/></svg></a>
            <a href="#" aria-label="YouTube"><svg width="24" height="24" fill="currentColor"><path d="M21.8 8.001s-.2-1.4-.8-2.001c-.7-.8-1.5-.8-1.9-.9C16.1 5 12 5 12 5h-.1s-4.1 0-7.1.1c-.4.1-1.2.1-1.9.9-.6.6-.8 2.001-.8 2.001S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.7.8 2.1.9 1.5.1 6.9.1 6.9.1s4.1 0 7.1-.1c.4-.1 1.2-.1 1.9-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2zM9.8 15.1V8.9l6.4 3.1-6.4 3.1z"/></svg></a>
          </SocialRow>
        </QRCol>
      </TopRow>
      <Legal>
        By accessing this page, you confirm that you have read, understood, and agreed to our Terms of Service, Cookie Policy, Privacy Policy, and Content Guidelines. All rights reserved.
      </Legal>
    </Section>
  );
};

export default Footer;
