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
      position: 'Front-end Developer ',
      period: '2024 - Now',
      location: 'Remote',
      description:
        'Development of web interfaces and applications using Next.js.',
      technologies: ['Next.js', 'TypeScript', 'React'],
    },
    {
      company: 'Lead Dell',
      position: 'Front-end Developer Intern',
      period: '2022 - 2023',
      location: 'Remote',
      description:
        'Building responsive user interfaces with Angular and React.',
      technologies: ['Angular', 'React', 'TypeScript'],
    },
    {
      company: 'ThoughtWorks',
      position: 'Consultant Developer',
      period: '2022 - 2022',
      location: 'Remote',
      description:
        'Development of enterprise solutions with Spring Boot and React.',
      technologies: ['Spring Boot', 'React', 'Java'],
    },
    {
      company: 'Lead Dell',
      position: 'Front-end Developer Intern',
      period: '2021 - 2022',
      location: 'Remote',
      description: 'Development and maintenance of Angular-based applications.',
      technologies: ['Angular', 'JavaScript', 'HTML', 'CSS'],
    },
  ];
}
