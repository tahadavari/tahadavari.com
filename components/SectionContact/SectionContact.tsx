import React from "react";
import { sectionContact as data, social, email } from "data/data";
import styled from "@emotion/styled";
import Button from "components/Button/Button";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  position: relative;
`;
const Badge = styled.span`
  display: block;
  margin-bottom: 20px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;
`;
const Title = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
`;

const Description = styled.p`
  text-align: center;
  width: 600px;
  margin-bottom: 50px;
  font-size: var(--fz-xl);
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const ContactButton = styled(Button)``;
const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  display: none;
  transform: translateX(-50%);
  padding-bottom: 30px;
  @media (max-width: 768px) {
    display: flex;
  }
`;
const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
`;

const Social = styled.a`
  padding: 10px;

  &:hover {
    color: var(--green);
    transform: translateY(-4px);
  }
`;
const Email = styled.a`
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: var(--fz-lg);
  letter-spacing: 0.1em;
  &:hover {
    transform: translateY(-3px);
  }
`;
const SectionContact = () => {
  if (!data.show) return null;
  return (
    <Container id={data.id}>
      <Badge>{data.badge}</Badge>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <ContactButton size="lg">
        <a href={data.button.target} target="_blank">
          {data.button.text}
        </a>
      </ContactButton>
      <InfoContainer>
        <Socials>
          <Social href={social.github} target="_blank">
            <FaGithub />
          </Social>
          <Social href={social.twitter} target="_blank">
            <FaTwitter />
          </Social>
          <Social href={social.instagram} target="_blank">
            <FaInstagram />
          </Social>
          <Social href={social.linkedin} target="_blank">
            <FaLinkedinIn />
          </Social>
          <Social href={social.codepen} target="_blank">
            <FaCodepen />
          </Social>
        </Socials>
        <Email href={"mailto:" + email} target="_blank">
          {email}
        </Email>
      </InfoContainer>
    </Container>
  );
};

export default SectionContact;
