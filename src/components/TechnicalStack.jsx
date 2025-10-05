import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import techStackData from '../data/techStack.json';
import data from '../data/Data.json';

const TechnicalStack = () => {
	const [techStack, setTechStack] = useState([]);

	useEffect(() => {
		setTechStack(techStackData);
	}, []);

	return (
		<TechnicalStackContainer id="technical-stack">
			<Title>{data.technicalStack.title}</Title>
			<StackList>
				{techStack.map((item, index) => (
					<StackItem key={index}>
						<IconWrapper>
							<img src={item.icon} alt={item.name} />
						</IconWrapper>
						<StackItemText>
							{item.name}
						</StackItemText>
					</StackItem>
				))}
			</StackList>
		</TechnicalStackContainer>
	);
};

const TechnicalStackContainer = styled.div`
  padding: 2rem;
  text-align: center;
  color: #ccd6f6;

  @media (max-width: 600px) {
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
    content: '02.';
    margin-right: 10px;
    color: #f6f7f8;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
    font-size: clamp(16px, 3vw, 20px);
    font-weight: 400;
  }
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const StackItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  background-color: rgb(30, 28, 25);
  padding: 1.5rem;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
    padding: 0.5rem;

  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`;

const StackItemText = styled.div`
  color: #ccd6f6;
  font-size: 1rem;
`;

export default TechnicalStack;
