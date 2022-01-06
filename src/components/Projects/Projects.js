import React from 'react';
import Link from 'next/link';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => {
  
  return (
    <Section nopadding id='projects'>
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map(({ id, mainImage, title, description, tags, source, visit }) => (
          <BlogCard key={id}>
            <Img src={mainImage}/>
            <Link href={`/project/${title}`} passHref>
              <TitleContent>
                <HeaderThree title>
                  {title}
                </HeaderThree>
                <Hr />
              </TitleContent>
            </Link>
            <CardInfo>{description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source} target='_blank'>Code</ExternalLinks>
              <ExternalLinks href={visit} target='_blank'>Visit</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
}

export default Projects;