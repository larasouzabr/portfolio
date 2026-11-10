import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ResearchProject {
  title: string;
  period: string;
  status: string;
  institution: string;
  coordinator: string;
  description: string;
  outputs: string[];
}

@Component({
  selector: 'app-research',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css'],
})
export class ResearchComponent {
  projects: ResearchProject[] = [
    {
      title:
        'A Tool for Teaching and Practicing Code Smell and Test Smell Refactoring',
      period: '2024 - 2025',
      status: 'Completed',
      institution: 'Federal University of Ceará (UFC), Quixadá',
      coordinator: 'Prof. Carla Ilane Moreira Bezerra',
      description:
        'Code and test smells harm maintainability, yet they are rarely taught in industry or academia, and few tools support teaching how to refactor them. This project built teaching materials on smells and refactoring, consolidated automated smell-detection tools, and created a methodology and infrastructure to guide instructors and students through hands-on refactoring practice, and then evaluated how effective the approach was in the classroom.',
      outputs: [
        'Distinguished Paper Award, SBES 2024',
        'Journal article in JSERD 2026',
        'WEI 2025 paper',
      ],
    },
    {
      title: 'Investigating the Impact of Test Smell Refactoring on Test Code',
      period: '2023 - 2024',
      status: 'Completed',
      institution: 'Federal University of Ceará (UFC), Quixadá',
      coordinator: 'Prof. Carla Ilane Moreira Bezerra',
      description:
        'Investigated how refactoring test smells affects internal quality attributes such as size, cohesion, coupling, and complexity. The project cataloged the most harmful test smells, gathered developers’ perceptions of them, analyzed the refactoring strategies used to remove them, and explored the relationship between test smells and flaky tests through quantitative and qualitative studies on open-source projects.',
      outputs: [
        'TERTS teaching tutor, WEI 2024',
        'Literature review and tutor proposal, 2023',
      ],
    },
  ];
}
