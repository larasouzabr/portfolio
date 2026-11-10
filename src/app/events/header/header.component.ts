import { Component } from '@angular/core';

interface Highlight {
  icon: string;
  title: string;
  detail: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  interests: string[] = [
    'Anthropomorphism in AI',
    'LLMs for Software Engineering',
    'Code Quality & Refactoring',
    'Human-Computer Interaction',
    'Web Accessibility',
  ];

  highlights: Highlight[] = [
    {
      icon: 'bi-trophy-fill',
      title: 'Distinguished Paper Award',
      detail: 'ICSE 2026 · SEIS Track',
    },
    {
      icon: 'bi-trophy-fill',
      title: 'Best Short Paper Award',
      detail: 'LLM4Code 2026 (IEEE/ACM)',
    },
    {
      icon: 'bi-people-fill',
      title: 'Mentor of 3 high school projects',
      detail: 'CBSoft 2026 · São Paulo',
    },
    {
      icon: 'bi-mortarboard-fill',
      title: 'Direct PhD candidate',
      detail: 'ICMC/USP · since 2025',
    },
  ];
}
