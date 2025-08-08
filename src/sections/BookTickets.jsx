import React from "react";
import styled from "styled-components";
import BookTicketsCard from "../components/BookTicketsCard";

const Section = styled.section`
  min-height: 60vh;
  width: 90vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontBig};
  font-family: "Kaushan Script";
  font-weight: 300;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  padding: 0.75rem 1rem;
  font-size: 1.1rem;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
`;

const BookTickets = () => {
  return (
    <Section className="book-tickets">
      <BookTicketsCard />
  <Title>Book Your Fake Shaadi Event</Title>
      <Form>
        {/* All form fields removed as requested */}
      </Form>
    </Section>
  );
};

export default BookTickets;
