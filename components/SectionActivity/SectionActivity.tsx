import React from "react";
import styled from "@emotion/styled";
import SectionHeader from "components/SectionHeader/SectionHeader";
import { sectionCodingActivity as data } from "data/data";
const Container = styled.div`
  width: 100%;
`;
const ChartsContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  & > figure {
    width: 70%;
  }
`;
const SectionActivity = () => {
  return (
    <Container>
      <SectionHeader number={data.number}>{data.title}</SectionHeader>
      <ChartsContainer>
        {data.src.map((src) => (
          <figure key={src}>
            <embed src={src}></embed>
          </figure>
        ))}
      </ChartsContainer>
    </Container>
  );
};

export default SectionActivity;
