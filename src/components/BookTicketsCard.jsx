import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  padding: 2rem 2.5rem;
  max-width: 350px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  font-family: inherit;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Info = styled.div`
  color: #222;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  svg {
    color: #888;
    font-size: 1.2rem;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #eee;
  margin: 1rem 0;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  color: #222;
  font-size: 1.1rem;
  span {
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.2rem;
  }
`;

const Button = styled.button`
  background: #111;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #333;
  }
`;

const BookTicketsCard = () => (
  <Card>
    <Title>Fake Shaadi</Title>
    <Info>🎵 Music, Nightlife</Info>
    <Info>📅 23 Aug - 24 Aug | 2 PM onwards</Info>
    <Info>📍 MAJOR DHYAN CHAND NATIONAL STADIUM, Delhi</Info>
    <Divider />
    <PriceRow>
      <Price>Starts from <span>₹699</span></Price>
      <Button onClick={() => document.querySelector('.book-tickets')?.scrollIntoView({behavior: 'smooth'})}>
        BOOK TICKETS
      </Button>
    </PriceRow>
  </Card>
);

export default BookTicketsCard;
