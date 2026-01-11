import React from 'react';
import './experience.scss';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  const experiences = [
    {
      id: 'nafa',
      dates: 'July 2025 - Present',
      title: 'Software Engineer',
      company: 'Nafa Financial Services',
      // location: 'Nairobi, Kenya',
      summary: 'At Nafa, I am part of the Backend Engineering team that is responsible for Architecting and building the backend infrastructure for Nafa Financial Services mobile wallet platform, delivering solutions that enable secure, scalable financial transactions for thousands of users. I architect and deliver scalable backend systems supporting growing transaction volumes, design and implement secure payment infrastructure meeting financial industry standards, and collaborate with product and engineering teams to translate business requirements into technical solutions. My work focuses on driving technical decisions that balance performance, security, and development velocity while establishing engineering practices that ensure system reliability and maintainability by adopting professional coding standards and best practices.',
      
    },
    {
      id: 'kwaju',
      dates: 'July 2024 - June 2025',
      title: 'Backend Developer',
      company: 'Kwaju Africa',
      // location: 'Nairobi, Kenya',
      summary: 'Architected and delivered the complete backend infrastructure for Kwaju Africa e-commerce platform from the ground up. As the sole backend engineer, I designed and implemented end-to-end backend architecture supporting platform expansion, delivered secure payment integration enabling seamless customer transactions, and built automated systems that streamlined operations and reduced manual overhead. Established reliable infrastructure patterns ensuring system stability and scalability while leading technical implementation decisions aligning with business objectives and growth plans.',
      
    },
    {
      id: 'adianan',
      dates: 'March 2022 - August 2024',
      title: 'Software Developer',
      company: 'Adanian Labs - Artificial Intelligence Centre of Excellence (AICE)',
      // location: 'Nairobi, Kenya',
      summary: 'Developed enterprise AI solutions that transformed how organizations interact with AI technology. Led the development of Mwalimu AI, a flagship product transforming educational technology and enhancing learning experiences for educational institutions. Delivered enterprise-grade AI platforms serving diverse organizational needs, collaborated across product, research, and design teams to ship impactful AI solutions, and architected systems that successfully integrated AI capabilities into existing workflows while contributing to product strategy and technical direction for AI initiatives.'
    }
  ];

  return (
    <>
      <div className='experience' id='experience'>
        <h1 className='py-14 foo capitalize text-[50px] font-[700] leading-[75px] text-center'>
          Professional Experience
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-1 gap-10 max-w-[80%] mx-auto pb-[100px]'>
          {experiences.map((exp) => (
            <ExperienceItem
              key={exp.id}
              dates={exp.dates}
              title={exp.title}
              company={exp.company}
              summary={exp.summary}
            />
          ))}
        </div>
      </div>
    </>
  );
};

