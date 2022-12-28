import React from 'react';
import { AiFillGithub, AiFillMail, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href='tel:59899449522'>+598 (9) 9 449 522</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:emarlcoder@gmail.com'>emarlcoder@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>“Be a yardstick of quality. Some people aren’t used to an environment where excellence is expected.” Steve Jobs</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="mailto:emarlcoder@gmail.com">
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/Emarlcoder">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/emanuel-romero-lópez/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
