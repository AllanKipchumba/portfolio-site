import React from 'react';
import './experience.scss';
import { ExperienceItem } from './ExperienceItem';

export const Experience = () => {
  const experiences = [
    {
      id: 'nafa',
      dates: 'July 2025 - Present',
      title: 'Software Engineer, Backend Developer',
      company: 'Nafa Financial Services',
      // location: 'Nairobi, Kenya',
      summary: 'Architecturing and building the backend infrastructure for Nafa Financial Services mobile wallet platform, architecting solutions that enable secure, scalable financial transactions for thousands of users. Focus on building resilient systems that drive business growth and enhance user experience.',
      details: [
        'Architect and deliver scalable backend systems that support growing transaction volumes',
        'Design and implement secure payment infrastructure meeting financial industry standards',
        'Collaborate with product and engineering teams to translate business requirements into technical solutions',
        'Drive technical decisions that balance performance, security, and development velocity',
        'Establish engineering practices that ensure system reliability and maintainability'
      ]
    },
    {
      id: 'kwaju',
      dates: 'July 2024 - June 2025',
      title: 'Backend Developer',
      company: 'Kwaju Africa',
      // location: 'Nairobi, Kenya',
      summary: 'Architected and delivered the complete backend infrastructure for an e-commerce platform from the ground up. As the sole backend engineer, established scalable foundations that enabled rapid business growth and seamless operations.',
      details: [
        'Designed and implemented end-to-end backend architecture supporting platform expansion',
        'Delivered secure payment integration enabling seamless customer transactions',
        'Built automated systems that streamlined operations and reduced manual overhead',
        'Established reliable infrastructure patterns ensuring system stability and scalability',
        'Led technical implementation decisions aligning with business objectives and growth plans'
      ]
    },
    {
      id: 'adianan',
      dates: 'March 2022 - August 2024',
      title: 'Software Developer',
      company: 'Adanian Labs - Artificial Intelligence Centre of Excellence (AICE)',
      // location: 'Nairobi, Kenya',
      summary: 'Developed enterprise AI solutions that transformed how organizations interact with AI technology. Led the development of Mwalimu AI, an innovative tutoring assistant that enhanced learning experiences for educational institutions.',
      details: [
        'Delivered enterprise-grade AI platforms serving diverse organizational needs',
        'Led development of Mwalimu AI, a flagship product transforming educational technology',
        'Collaborated across product, research, and design teams to ship impactful AI solutions',
        'Architected systems that successfully integrated AI capabilities into existing workflows',
        'Contributed to product strategy and technical direction for AI initiatives'
      ]
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
              id={exp.id}
              dates={exp.dates}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              summary={exp.summary}
              details={exp.details}
            />
          ))}
        </div>
      </div>
    </>
  );
};

