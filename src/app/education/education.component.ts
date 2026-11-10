import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Degree {
  degree: string;
  institution: string;
  period: string;
  status?: string;
  thesisLabel: string;
  thesis: string;
  advisors: { role: string; name: string }[];
}

interface Course {
  name: string;
  institution: string;
  period: string;
  hours: string;
}

interface Language {
  name: string;
  level: string;
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  degrees: Degree[] = [
    {
      degree: 'Direct PhD in Computer Science and Computational Mathematics',
      institution:
        'University of São Paulo (USP), Institute of Mathematics and Computer Sciences (ICMC)',
      period: '2025 - present',
      status: 'In progress',
      thesisLabel: 'Research topic',
      thesis:
        'Anthropomorphism in AI and its potential harms (thesis in definition)',
      advisors: [
        { role: 'Advisor', name: 'Maria das Graças Campos Pimentel' },
        { role: 'Co-advisor', name: 'Bruna Carolina Rodrigues da Cunha' },
      ],
    },
    {
      degree: 'B.Sc. in Software Engineering',
      institution: 'Federal University of Ceará (UFC), Quixadá Campus',
      period: '2021 - 2025',
      thesisLabel: 'Final project',
      thesis:
        'Financial Inclusion in the Digital Era: A Guide for Developing Elderly-Friendly Internet Banking Interfaces',
      advisors: [{ role: 'Advisor', name: 'Antonia Diana Braga Nogueira' }],
    },
  ];

  courses: Course[] = [
    {
      name: 'General English (15 hours of tuition per week)',
      institution: 'International House, Ireland',
      period: '2023',
      hours: '60h',
    },
    {
      name: "Integration with Brazil's National Health Data Network (RNDS)",
      institution: 'Federal University of Goiás (UFG)',
      period: '2022',
      hours: '30h',
    },
    {
      name: 'Full-Stack Web Development',
      institution: 'Holberton School, United States',
      period: '2021 - 2022',
      hours: '120h',
    },
  ];

  languages: Language[] = [
    { name: 'Portuguese', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'Spanish', level: 'Intermediate (reading)' },
    { name: 'French', level: 'Intermediate (reading)' },
    { name: 'German', level: 'Basic' },
  ];
}
