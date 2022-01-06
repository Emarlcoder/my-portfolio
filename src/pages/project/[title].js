import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { projects } from '../../constants/constants';
import { Layout } from '../../layout/Layout';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderOne,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from '../../components/Projects/ProjectsStyles';
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionText,
} from '../../styles/GlobalComponents';

export default function ProjectScreen() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const router = useRouter();
  const { title } = router.query;
  const project = projects.find((a) => a.title === title);
  if (!project) {
    return <div>Project not found</div>;
  }
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };
  return (
    <Layout>
      <Section nopadding id="projects">
        {projects.map(
          ({ id, title, description, tags, source, visit, images }) => (
            <>
              <div key={id} className="slider">
                <TitleContent>
                  <h1>{title}</h1>
                </TitleContent>
                <Slider {...settings}>
                  {images.map((image, i) => (
                    <div
                      key={i}
                      className={
                        i === imageIndex ? 'slide activeSlide' : 'slide'
                      }
                    >
                      <img src={image} />
                    </div>
                  ))}
                </Slider>
              </div>
              <p className="info">{description}</p>
              <h2>Stack</h2>
              <TagList>
                {tags.map((tag, index) => (
                  <h3 key={index} className="tag">
                    {tag}
                  </h3>
                ))}
              </TagList>
              <UtilityList>
                <ExternalLinks href={source} target="_blank">
                  Code
                </ExternalLinks>
                <ExternalLinks href={visit} target="_blank">
                  Visit
                </ExternalLinks>
              </UtilityList>
            </>
          )
        )}
      </Section>
    </Layout>
  );
}
