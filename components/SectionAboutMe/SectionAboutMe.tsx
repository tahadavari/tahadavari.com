import React from "react";
import { sectionAboutMe as data } from "data/data";
import styled from "@emotion/styled";
import Image from "next/image";
import SectionHeader from "components/SectionHeader/SectionHeader";

const Container = styled.section`
  max-width: 900px;
  margin: 0px auto;
  padding: 100px 0px;

  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  @media (max-width: 768px) {
    display: block;
  }
`;
const LeftContent = styled.div``;
const LeftText = styled.div``;
const LeftList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 0px 10px;
  padding: 0px;
  margin: 20px 0px 0px;
  overflow: hidden;
  list-style: none;
`;
const LeftItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  padding-left: 20px;
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  &::before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--green);
    font-size: var(--fz-sm);
    line-height: 12px;
  }
`;

const RightContent = styled.div`
  position: relative;
  max-width: 90vh;
  width: 280px;
  height: 280px;
  max-height: 90vh;
  @media (max-width: 768px) {
    margin: 50px auto 0px;
    width: 230px;
    height: 230px;
  }
`;
const RightWrapper = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  display: block;
  position: relative;
  width: 100%;
  height: 100%;

  border-radius: var(--border-radius);
  background-color: var(--green);
  & img {
    position: relative;
    border-radius: var(--border-radius);
    mix-blend-mode: multiply;
    filter: grayscale(100%) contrast(1);
    transition: var(--transition);
  }
  &::before {
    top: 0px;
    left: 0px;
    background-color: var(--navy);
    mix-blend-mode: screen;
  }
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    transition: var(--transition);
    border: 2px solid var(--green);
    top: 20px;
    left: 20px;
    z-index: -1;
  }
  &:hover {
    /* background: transparent; */
    outline: 0px;
    box-shadow: 0 20px 30px -15px var(--navy-shadow);
    &::after {
      top: 15px;
      left: 15px;
    }
    & img {
      filter: none;
      mix-blend-mode: normal;
    }
  }
`;

function SectionAboutMe() {
  if (!data.show) return null;
  return (
    <Container id={data.id}>
      <SectionHeader>{data.title}</SectionHeader>
      <ContentContainer>
        <LeftContent>
          <LeftText dangerouslySetInnerHTML={{ __html: data.desc }}></LeftText>
          <LeftList>
            {data.list.map((item: string) => {
              return <LeftItem key={item}>{item}</LeftItem>;
            })}
          </LeftList>
        </LeftContent>
        <RightContent>
          <RightWrapper>
            <Image src={data.picture} alt="" layout="fill" objectFit="cover" />
          </RightWrapper>
        </RightContent>
      </ContentContainer>
    </Container>
  );
}

export default SectionAboutMe;
