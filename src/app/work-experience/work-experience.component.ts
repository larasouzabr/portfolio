import { Component } from '@angular/core';
interface Experience {
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  technologies: string[];
}
@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent {
  experiences: Experience[] = [
    {
      company:
        'Secretariat of Science, Technology, and Higher Education of Ceará - SECITECE',
      position: 'Front-end Developer',
      period: '2024 - 2025',
      location: 'Remote',
      description:
        "Led front-end development of the Government of Ceará's platform for managing programs and indicators, using Next.js. Took part in requirements elicitation and analysis, built reusable components, optimized performance, and integrated APIs to deliver an intuitive, responsive experience.",
      technologies: ['Next.js', 'TypeScript', 'React'],
    },
    {
      company: 'Lead Dell',
      position: 'Front-end Developer Intern',
      period: '2022 - 2023',
      location: 'Remote',
      description:
        'Developed front-end applications integrated with REST APIs using Angular and React, designing responsive interfaces in a multidisciplinary, international team. Researched and adopted new technologies to improve the mobile web experience, and supported QA in quickly identifying and fixing bugs.',
      technologies: ['Angular', 'React', 'TypeScript', 'REST APIs'],
    },
    {
      company: 'ThoughtWorks',
      position: 'Consultant Developer',
      period: '2022 - 2022',
      location: 'Remote',
      description:
        'Developed a web platform with TypeScript, Spring Boot, and React, delivering features from requirements definition to release and refactoring components and APIs for better performance. Worked in an agile environment (Scrum and Kanban), applied W3C accessibility guidelines, wrote unit and integration tests, and started practicing TDD and CI/CD.',
      technologies: ['Spring Boot', 'React', 'TypeScript', 'Java', 'Accessibility', 'TDD'],
    },
    {
      company: 'Lead Dell',
      position: 'Front-end Developer Intern',
      period: '2021 - 2022',
      location: 'Remote',
      description:
        "Front-end development with Angular, HTML, CSS, and TypeScript for Dell's real-time error-monitoring system, helping significantly reduce errors in the main software and improving stability and user satisfaction.",
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      company: 'Wizard by Pearson',
      position: 'English Teacher',
      period: '2017 - 2019',
      location: 'On-site & online',
      description:
        "Taught English to classes of different levels using Wizard's communicative methodology, both in person and on a digital platform. Tracked student progress, applied assessments, and gave individual feedback, strengthening my teaching, lesson planning, and interpersonal skills.",
      technologies: ['Teaching', 'English', 'Lesson Planning'],
    },
  ];
}
