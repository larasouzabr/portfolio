import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Recognition {
  id: number;
  title: string;
  event: string;
  relatedWork?: string;
  year: number;
}

@Component({
  selector: 'app-recognition',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recognition.component.html',
  styleUrls: ['./recognition.component.css'],
})
export class RecognitionComponent {
  recognitions: Recognition[] = [
    {
      id: 1,
      title: 'Distinguished Paper Award',
      event:
        'IEEE/ACM 48th International Conference on Software Engineering (ICSE) — the premier Software Engineering conference worldwide',
      relatedWork:
        'Connecting Generations Through Code: GABI, A Community-Driven Framework for Engineering Inclusive Financial Software for the Elderly',
      year: 2026,
    },
    {
      id: 2,
      title: 'Best Short Paper Award',
      event:
        'LLM4Code — 3rd International Workshop on Large Language Models For Code (IEEE/ACM)',
      relatedWork:
        "Evaluating LLMs-Driven Java Code Refactoring from a Developer's Perspective",
      year: 2026,
    },
    {
      id: 3,
      title: 'Diversity & Inclusion Student Travel Grant',
      event:
        'IEEE International Symposium on Software Reliability Engineering (ISSRE) 2025',
      relatedWork:
        'Awarded for underrepresented identity, socioeconomic need, and contributions to diversity and community engagement in software engineering',
      year: 2025,
    },
    {
      id: 4,
      title: 'Honorable Mention',
      event: 'WASHES 2025',
      relatedWork:
        'Investigating software developers perceptions of the adoption of LLMs in code smell refactoring',
      year: 2025,
    },
    {
      id: 5,
      title: 'Distinguished Paper Award',
      event:
        '38th Brazilian Symposium on Software Engineering (SBES) — the leading Software Engineering conference in Latin America',
      relatedWork:
        'Contributing to open-source projects in refactoring code smells: A practical experience in teaching Software Maintenance',
      year: 2024,
    },
    {
      id: 6,
      title: 'Distinguished Paper Award',
      event: 'Academic Meetings 2024',
      relatedWork: 'Investigating test code refactored by LLMs',
      year: 2024,
    },
  ];
}
