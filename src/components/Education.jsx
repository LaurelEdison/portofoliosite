import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SchoolIcon from '@mui/icons-material/School';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ClassIcon from '@mui/icons-material/Class';

const EducationContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #ccd6f6;
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
    content: '04.';
    margin-right: 10px;
    color: #f6f7f8;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }
`;

const EducationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 20px;
`;

const EducationItem = styled.div`
  background-color: rgb(30, 28, 25);
  padding: 1.5rem;
  width: 100%;
  border-radius: 8px;
  text-align: left;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 400px) {
    padding: 0.5rem;
  }
`;

const EducationTitle = styled.h5`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(18px, 5vw, 22px);

`;

const EducationDetails = styled.div`
  color: #8892b0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: clamp(16px, 5vw, 19px);

`;

const Education = () => {
	const [educationData, setEducationData] = useState([]);

	useEffect(() => {
		const loadEducationData = async () => {
			const response = await fetch(`/data/education.json`);
			const data = await response.json();
			setEducationData(data);
		};
		loadEducationData();
	});

	return (
		<EducationContainer id="education">
			<Title>Education</Title>
			<EducationList>
				{educationData.map((item, index) => (
					<EducationItem key={index}>
						<EducationTitle><ClassIcon />{item.degree}</EducationTitle>
						<EducationDetails><SchoolIcon />{item.institution}</EducationDetails>
						<EducationDetails><DateRangeIcon />{item.range}</EducationDetails>
					</EducationItem>
				))}
			</EducationList>
		</EducationContainer>
	);
};

export default Education;
