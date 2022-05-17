import styled from "@emotion/styled";
import React, { MutableRefObject, useEffect } from "react";
import SectionHeader from "components/SectionHeader/SectionHeader";
import { sectionProjects as data } from "data/data";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useIntersect } from "lib/hooks/use-intersect";

const Container = styled.section`
  max-width: 980px;
  margin: 0px auto;
  padding: 100px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 100vw;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ProjectImageContainer = styled.div`
  grid-column: 1 / 8;
  position: relative;
  transition: var(--transition);

  & img {
    object-fit: cover;
  }
`;
const ProjectInfoContainer = styled.div`
  grid-column: 7 / -1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  position: absolute;
  right: 0;
  direction: rtl;
  @media (max-width: 768px) {
    grid-column: 1 / -1;
  }
`;
const ProjectBadge = styled.span`
  margin: 10px 0px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
  font-weight: 400;
`;
const ProjectTitle = styled.a`
  position: relative;
  z-index: 1;
  font-size: var(--fz-heading);
  margin-bottom: 15px;
  color: var(--slate);
`;
const ProjectCard = styled.div`
  box-shadow: 0 10px 30px -15px var(--navy-shadow);
  transition: var(--transition);
  position: relative;
  z-index: 2;
  padding: 25px;
  border-radius: var(--border-radius);
  background-color: var(--light-navy);
  color: var(--light-slate);
  font-size: var(--fz-md);
  text-align: left;
`;
const ProjectTags = styled.ul`
  display: flex;
  font-size: var(--fz-sm);
`;
const ProjectTag = styled.span`
  &:not(:first-of-type) {
    margin-right: 10px;
  }
`;
const ProjectLinks = styled.div`
  display: flex;
  font-size: var(--fz-xxl);
  & > *:not(:first-of-type) {
    margin-right: 20px;
  }
  & > *:hover {
    color: var(--green);
  }
`;
const Github = styled.a``;
const Link = styled.a``;
const Project = styled(motion.div)<{ direction: "ltr" | "rtl" }>`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  position: relative;
  &:not(:first-of-type) {
    margin-top: 80px;
  }
  ${(props) =>
    props.direction === "rtl" &&
    `
      ${ProjectInfoContainer} {
          direction: ltr;
          grid-column: 1 / 7;
         }
      ${ProjectImageContainer}{
          grid-column: 6  / -1
         }
      ${ProjectLinks}{
        & > *:not(:first-of-type) {
        margin-left: 20px;
        }
    }
    
        ${ProjectTag}{
            &:not(:first-of-type) {
            margin-left: 10px;
        }
      }

  `}
  @media (max-width: 1024px) {
    ${ProjectInfoContainer} {
      display: flex;
      flex-direction: column;
      gap: 5px;
      position: relative;
      direction: ltr;
      width: 100%;
    }
    ${ProjectImageContainer} {
      width: 100%;
    }
    display: flex;
    flex-direction: column;
    ${ProjectLinks} {
      & > *:not(:first-of-type) {
        margin-left: 20px;
      }
    }

    ${ProjectTag} {
      &:not(:first-of-type) {
        margin-left: 10px;
      }
    }
  }
`;
const projectVariants = {
  hidden: (val: number) => ({
    x: val + "%",
    opacity: 0,
  }),
  visible: {
    x: 0,
    opacity: 1,
  },
};
const SectionProjects = () => {
  const [ref, inView] = useIntersect<HTMLDivElement>(0.1);
  const animationControl = useAnimation();
  useEffect(() => {
    if (inView) {
      animationControl.start("visible");
    } else {
      animationControl.start("hidden");
    }
  }, [animationControl, inView]);
  if (!data.show) return null;
  return (
    <Container id={data.id}>
      <SectionHeader number={3}>{data.title}</SectionHeader>
      <ContentContainer ref={ref}>
        {data.projects.map((project) => {
          return (
            <Project
              key={project.title}
              direction={project.direction}
              custom={project.direction === "rtl" ? 100 : -100}
              variants={projectVariants}
              initial="hidden"
              animate={animationControl}
            >
              <ProjectImageContainer>
                <Image
                  src={project.image}
                  alt={project.title}
                  width="640px"
                  height="360px"
                />
              </ProjectImageContainer>
              <ProjectInfoContainer>
                <ProjectBadge>{project.badge}</ProjectBadge>
                <ProjectTitle
                  className="link"
                  href={project.link}
                  target="_blank"
                >
                  {project.title}
                </ProjectTitle>
                <ProjectCard>{project.description}</ProjectCard>
                <ProjectTags>
                  {project.tags.map((tag) => (
                    <ProjectTag key={tag}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github && (
                    <Github href={project.github} target="_blank">
                      <FaGithub />
                    </Github>
                  )}
                  {project.link && (
                    <Link href={project.link} target="_blank">
                      <FaLink />
                    </Link>
                  )}
                </ProjectLinks>
              </ProjectInfoContainer>
            </Project>
          );
        })}
      </ContentContainer>
    </Container>
  );
};

export default SectionProjects;
