import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Nate.
        </BigTitle>
        <Subtitle>I love to learn, create, and connect with people.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Find Me Here</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Spotify Playlist"
            link="https://open.spotify.com/user/214cjghp4c3lzsygqz73qvuxi"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Some playlist curated by myself.
          </ProjectCard>
          <ProjectCard
            title="Image Galleries"
            link="https://unsplash.com/@nate_228"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            Some shots I share through one of the biggest image catalog in the world.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="AgustinusNathaniel" />
          <AboutSub>
            Someone who loves Tech and Art world. Spending life to learn, create, and connect with people.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Have you ever wonder why life is so short? Why some "kingdoms" fall? Why life are changing rapidly?
          I'm that kinda person who always thought like that. I'm interested to know the story behind something.
          The "why's" and "how's", the impacts, and the consqeunces. 
          Living in the present and make the most out of it.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:hello@agustinusnathaniel.com">Hi</a> or find me on other platforms:{' '}
            <a href="https://youtube.com/AgustinusNathaniel">YouTube</a> &{' '}
            <a href="https://www.instagram.com/nate_228/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 {' '}
          <a href="https://www.instagram.com/nate_228">Agustinus Nathaniel</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
