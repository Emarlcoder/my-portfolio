import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { GiStarfighter } from 'react-icons/gi';


import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px'}}>
          <GiStarfighter size='3rem'/> <Span>Ema Romero López</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      {/* <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li> */}
    </Div2>
    <Div3>
      <SocialIcons href='mailto:emarlcoder@gmail.com'>
        <AiFillMail size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://github.com/Emarlcoder'>
        <AiFillGithub size='3rem'/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/emanuel-romero-lópez/'>
        <AiFillLinkedin size='3rem'/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
