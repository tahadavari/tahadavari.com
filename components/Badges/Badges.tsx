import styled from "@emotion/styled";
import React from "react";
import { social, email } from "data/data";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCodepen,
} from "react-icons/fa";

const line = `
    &::after{
        content: "";
        width:2px;
        height:90px;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--light-slate);
    }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  left: 0px;
  padding: inherit;
  padding-bottom: 110px;

  ${() => line}
`;

const Social = styled.a`
  padding: 10px;

  &:hover {
    color: var(--green);
    transform: translateY(-4px);
  }
`;

const Right = styled.div`
  position: fixed;
  bottom: 0;
  right: 0px;
  padding: inherit;
  padding-bottom: 90px;
  ${() => line}
`;
const Email = styled.a`
  margin: 20px auto;
  padding: 10px;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  line-height: var(--fz-lg);
  letter-spacing: 0.1em;
  writing-mode: vertical-rl;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: inherit;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const Badges = () => {
  return (
    <Container>
      <Left>
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
      </Left>
      <Right>
        <Email href={"http://mailto" + email} target="_blank">
          {email}
        </Email>
      </Right>
    </Container>
  );
};

export default Badges;
