import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Container, CssBaseline } from '@mui/material'
import Footer from './components/Footer'
import styled from 'styled-components'
import Header from './components/Header'
import Education from './components/Education'
import SocialSidebar from './components/SocialSidebar'
import EmailSidebar from './components/EmailSidebar'
import About from './components/About'
import TechnicalStack from './components/TechnicalStack'
import Hero from './components/Hero'
import Projects from './components/Projects';
import Contact from './components/Contact';

const MainApp = styled.div`
background-color: #0f0a05;
color: #ccd6f6;
padding 0 45px;
`

const Section = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;



function App() {
	return (
		<MainApp>
			<CssBaseline />
			<Header />
			<Hero />
			<Container>
				<Section id="about">
					<About />
				</Section>
				<section id="technical-stack">
					<TechnicalStack />
				</section>
				<Section id="projects">
					<Projects />
				</Section>
				<section id="education">
					<Education />
				</section>
				<Section id="contact">
					<Contact />
				</Section>
			</Container>
			<SocialSidebar />
			<EmailSidebar />
			<Footer />
		</MainApp>
	)
}

export default App
