import styled from "@emotion/styled";
import React from "react";
import { sectionOne as data } from "data/data";
import Button from "components/Button/Button";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  flex-direction: column;
  padding-top: 120px;
  @media (max-width: 768px) {
    height: auto;
    min-height: unset;
    padding-bottom: 40px;
  }
`;

const Badge = styled.h1`
  margin: 0px 0px 30px 4px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
  font-weight: 400;
`;
const H2 = styled.h2`
  margin: 0px;
  font-size: clamp(40px, 8vw, 80px);
`;
const H3 = styled.h3`
  color: var(--slate);
  line-height: 0.9;
  margin: 0px;
  margin-top: 10px;
  font-size: clamp(40px, 8vw, 80px);
`;
const Desc = styled.p`
  margin: 20px 0px 0px;
  max-width: 540px;
`;
const StyledButton = styled(Button)`
  margin-top: 50px;
`;
const TopSection = () => {
  return (
    <Container>
      <Badge>{data.badge}</Badge>
      <H2>{data.name}</H2>
      <H3>{data.slogan}</H3>
      <Desc>{data.desc}</Desc>
      <StyledButton size="xl">
        <a href={data.button.target} target="_blank" rel="noreferrer">
          {data.button.text}
        </a>
      </StyledButton>
    </Container>
  );
};

export default TopSection;
