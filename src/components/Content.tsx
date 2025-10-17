import React, { useState } from 'react';
import { Section } from './Section';
import { ExperienceTimeline } from './ExperienceTimeline';
import { PDFViewer } from './PDFViewer';
import { ProjectCard } from './ProjectCard';

export const Content = () => {
  const [showPDF, setShowPDF] = useState(false);
  
  const experiences = [
    {
      year: '2025 - Present',
      title: 'Senior Software Engineer | HCLTech',
      description: 'Working on retail bank application as a java backend Engineer.',
      technologies: ['Java', 'Typescript', 'Spring-boot', 'React.js', 'SQL', 'apache camel', 'aws', 'Micro-services', 'JavaScript'],
      link: 'https://www.hcltech.com/'
    },

    {
      year: '2024 - 2024',
      title: 'Freelance Developer',
      description: 'Developed and maintained web applications while collaborating with cross-functional teams. Implemented responsive designs and optimized application performance.',
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'Redux', 'PostgreSQL', 'Java','Spring'],
      link: '#'
    },
    
    {
      year: '2022 - 2023',
      title: 'Software Engineer | Globallogic',
      description: 'Developed and maintained key components for building scalable microservices and responsive frontends across B2B products. Collaborated closely with cross-functional teams, including developers, designers, and stakeholders, to integrate third-party APIs and deliver user-centric, accessible, and high-performing solutions.',
      technologies: ['React', 'Typescript', 'Express.js', 'Redux', 'PostgreSQL', 'nodejs', 'aws', 'Micro-services'],
      link: 'https://www.globallogic.com/in/'
    },
    {
      year: '2021 - 2022',
      title: 'Software Engineer | Virtusa',
      description: 'Designed and upgraded critical application components using React.js, Java, and Spring Boot, enhancing functionality and performance. Collaborated with client stakeholders to develop tailored technical solutions for business cases. ',
      technologies: ['Java', 'React', 'JavaScript', 'Docker', 'Spring', 'SQL', 'Micro-services'],
      link: 'https://www.virtusa.com/'
    },
  ];

  const projects = [
    {
      title: 'Chat-Bot-For-Creating-Websites',
      description: 'Developed an AI-powered chatbot that assists users in creating websites effortlessly. The chatbot guides users through a series of steps to customize their websites, automating the design and content creation process. Integrated advanced AI and LLM techniques to provide seamless interactions, improving the user experience in web development.',
      link: 'https://github.com/AK-web/chat-bot-for-creating-websites'
    }, {
      title: 'T-Shirt Selling Web-Application (Ecom-Website )',
      description: 'Built a full-stack e-commerce platform for selling custom t-shirts, utilizing the MERN (MongoDB, Express.js, React, Node.js) stack. The application features product management, user authentication, a shopping cart, and payment gateway integration. The website offers a responsive and user-friendly interface, allowing customers to browse, customize, and purchase t-shirts online.',
      link: 'https://github.com/AK-web/MERN-Ecommerce'
    }, {
      title: 'Instagram video downloader',
      description: 'Created a web application for downloading Instagram videos, providing a simple and intuitive interface. Users can input the URL of the video they wish to download, and the tool generates a downloadable link. Built with web scraping techniques to retrieve video files, ensuring fast and reliable video downloads in various formats.',
      link: 'https://github.com/AK-web/Insta-downloader'
    }, {
      title: 'Blogging Web-app backend services',
      description: 'Developed the backend services for a blogging platform, focusing on scalability, security, and performance. Implemented RESTful APIs for managing posts, comments, and user authentication, while ensuring seamless communication with the frontend. Integrated database management using MongoDB to store and retrieve content efficiently, enabling users to publish and manage their blogs with ease.',
      link: 'https://github.com/AK-web/Blogger-Backend'
    }];

  return (
    <div className="ml-[480px] mr-[280px] p-8 ">
      <Section id="about" title={'About Me'} >
        <div className="prose prose-invert">
          <p className="text-gray-400">
          I’m a developer passionate about building efficient, scalable, and user-friendly applications. My expertise lies in full-stack development, with a strong focus on creating seamless user experiences and robust backend systems.
            <br /><br />These days, I find myself leaning more toward backend development, diving into areas like cloud deployment, containerization with Docker, and exploring tools to enhance scalability and performance. I enjoy solving complex problems and am constantly learning to push the boundaries of what technology can achieve.
          <br /><br />Throughout my career, I've had the chance to work across diverse sectors, including banking and risk management. These experiences have allowed me to develop secure, scalable solutions while adapting to the unique challenges of each industry.
          <br /> <br /> Outside of work, I enjoy staying active and balancing my personal interests. Badminton is one of my favorite sports, and I love playing whenever I can. I’m also an avid reader, always eager to dive into a good book when time permits. In addition, I play the <span className='custom-cursor-1 font-bold '>guitar</span> as a way to relax and unwind. I make sure to stay fit by working out at the gym regularly, which helps me maintain both physical and mental well-being.
          </p>
        </div>
      </Section>

      <Section id="experience" title={'Experience'} >
        <ExperienceTimeline 
          experiences={experiences}
          onViewResume={() => setShowPDF(true)}
        />
      </Section>

      <Section id="projects" title={'Projects'} >
        <div className="flex flex-wrap gap-6 "> {/* for grid cards = grid grid-cols-1 gap-6 md:grid-cols-2 */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </Section>

      {showPDF && (
        <PDFViewer
          pdfUrl="./assets/Anand_Kanti_CV_"
          onClose={() => setShowPDF(false)}
        />
      )}
    </div>
  );
};