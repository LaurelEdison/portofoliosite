import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import data from '../data/Data.json'

const Projects = () => {
	const [projects, setProjectsData] = useState([]);
	const [showMore, setShowMore] = useState(false);


	useEffect(() => {
		const loadProjectsData = async () => {
			const response = await fetch(`/data/projects.json`);
			const data = await response.json();
			setProjectsData(data);
		};
		loadProjectsData();
	});


	const GRID_LIMIT = 6;
	const projectsToShow = showMore ? projects : projects.slice(0, GRID_LIMIT);

	return (
		<ProjectsContainer id="projects">
			<Title>{data.projects.title}</Title>
			<ProjectGrid>
				{projectsToShow.map((project, index) => (
					<ProjectCard key={index} project={project} index={index} />
				))}
			</ProjectGrid>
			<ShowMoreButton onClick={() => setShowMore(!showMore)}>
				Show {showMore ? 'Less' : 'More'}
			</ShowMoreButton>
		</ProjectsContainer>
	);
};

const ProjectsContainer = styled.div`
  padding: 2rem;
  text-align: center;

  @media (max-width: 400px) {
    padding: 0;
  }
`;

const Title = styled.h4`
  color: #64FFDB;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0 40px;
  width: 100%;
  white-space: nowrap;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 600;

  &:before {
    content: '03.';
    margin-right: 10px;
    color: #f6f7f8;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

const ShowMoreButton = styled.button`
  background-color: #64ffda;
  color: #0a192f;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background-color: #52c8b9;
  }
`;

export default Projects;
