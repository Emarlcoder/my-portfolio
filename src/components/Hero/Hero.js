import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a web developer with a passion for programming. I work with a variety of technologies and languages, and I am always looking to learn new things. I work as a freelancer with the rest of Meraki Team.
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;