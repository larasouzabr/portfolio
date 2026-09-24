import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ProjectLink {
  label: string;
  url: string;
  icon: string;
}

interface Project {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
  publication?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      name: 'GABI',
      tagline: 'Accessible banking guide for elderly users',
      description:
        'A community-driven, research-backed set of guidelines for designing inclusive Internet Banking interfaces for older adults, grounded in interviews with 12 elderly users and a systematic review of 13 studies. The interactive guide scores a perfect 100 on Lighthouse Accessibility.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Accessibility Research'],
      links: [
        { label: 'Live demo', url: 'https://gabi-guia-idosos.vercel.app/', icon: 'bi-box-arrow-up-right' },
        { label: 'Code', url: 'https://github.com/larasouzabr/GABI', icon: 'bi-github' },
      ],
      publication: 'Distinguished Paper Award · ICSE 2026',
    },
    {
      id: 2,
      name: 'gabi-ai',
      tagline: 'Evaluating LLM assistants for elderly banking support',
      description:
        "A research pipeline testing whether short, step-by-step, plain-language responses from AI assistants better serve elderly banking users. Benchmarks multiple local LLMs (Gemma2, Mistral, Qwen2.5, DeepSeek-R1) across 18 real-world scenarios using a blind, 8-criterion jury evaluation with statistical validation (Wilcoxon, Friedman, Krippendorff's alpha).",
      tech: ['Python', 'Ollama', 'LLM Evaluation', 'Statistics'],
      links: [
        { label: 'Code', url: 'https://github.com/larasouzabr/gabi-ai', icon: 'bi-github' },
      ],
    },
    {
      id: 3,
      name: 'Kangoo',
      tagline: 'Peer-to-peer delivery, built accessibility-first',
      description:
        "A marketplace connecting people who need to send packages with travelers already headed that way. Built as a Human-Computer Interaction course project applying Nielsen's usability heuristics throughout, with a dedicated accessibility settings screen for font scaling, high contrast, colorblind support, and reduced motion.",
      tech: ['React Native', 'Expo', 'Fastify', 'Prisma', 'PostgreSQL'],
      links: [
        { label: 'Code', url: 'https://github.com/larasouzabr/kangoo', icon: 'bi-github' },
      ],
    },
    {
      id: 4,
      name: 'OBES · Sebo Online',
      tagline: 'Marketplace for used books, built with a 4-person team',
      description:
        'A full-stack platform for buying, selling, and donating used books to make reading more affordable and reduce waste. Built with a four-person software engineering team at UFC across a Vue.js web client and an Android app, backed by a Node.js/Express API with PostgreSQL.',
      tech: ['Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'Kotlin'],
      links: [
        { label: 'Web', url: 'https://github.com/larasouzabr/obes', icon: 'bi-github' },
        { label: 'Android', url: 'https://github.com/larasouzabr/obes-app', icon: 'bi-github' },
      ],
    },
    {
      id: 5,
      name: 'Selinho',
      tagline: 'Digital loyalty cards for small businesses',
      description:
        'A PWA where small businesses design custom loyalty cards and customers collect stamps by scanning a QR code, all from a mobile wallet. Includes push notifications, an analytics dashboard, and offline support.',
      tech: ['Next.js', 'Supabase', 'Tailwind CSS'],
      links: [
        { label: 'Code', url: 'https://github.com/larasouzabr/selinho', icon: 'bi-github' },
      ],
    },
  ];
}
