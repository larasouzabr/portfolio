import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

export interface Publication {
  id: number;
  name?: string;
  category: 'Conference' | 'Event Summary';
  citationHTML: string;
  abstract: string;
  keywords: string[];
  award?: string;
  isPortuguese: boolean;
  year: number;
  pdfAction?: {
    type: 'download' | 'link';
    value: string;
    note?: string;
  };
  metrics?: {
    citations?: { count: number };
  };
  fullArticleLink?: string;
}
@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  imports: [AccordionModule, CommonModule],
  standalone: true,
})
export class PublicationsComponent {
  handleDownload(ArticleName: string) {
    let link = document.createElement('a');
    link.download = ArticleName;
    link.href = `../../assets/publications/${ArticleName}`;
    link.click();
  }

  getCategoryBadgeClass(category: string): string {
    switch (category) {
      case 'Conference':
        return 'badge-purple-dark'; // Roxo escuro para conferências
      case 'Event Summary':
        return 'badge-purple-light'; // Roxo claro para resumos
      default:
        return 'bg-secondary'; // Mantém o cinza como padrão
    }
  }

  publications: Publication[] = [
    {
      id: 1,
      category: 'Conference',
      name: 'Contributing to open-source projects in refactoring code smells: A practical experience in teaching Software Maintenance',
      award:
        'Distinguished Paper Award 2024 - 38th Brazilian Symposium on Software Engineering, the premier conference on Software Engineering in Latin America;',
      isPortuguese: false,
      citationHTML: `Bezerra, C., Alves, V., Lobo, A., Queiroz, J., <strong>Lima, L.</strong>, & Meirelles, P. (2024). Contributing to open-source projects in refactoring code smells: A practical experience in teaching Software Maintenance. In <em>Proceedings of the 38th Brazilian Symposium on Software Engineering</em>, (pp. 399-409). Porto Alegre: SBC. doi:10.5753/sbes.2024.3507`,
      abstract: `Code smells are inadequate code structures that can harm quality and maintainability. To remove these deficient structures, developers use refactoring techniques. Refactoring helps code be easier to understand and modify by eliminating potential problems and improving internal quality attributes. Most refactoring activities are usually performed manually and undisciplined, which can cause code degradation. Concepts, practices, software refactoring tools, and code smells are rarely discussed in undergraduate computing courses. This problem is reflected in the software industry, which generally does not use refactoring practices to improve code readability and maintainability. In this context, we present in this paper an experience report on teaching the practice of code smell refactoring and the impact on internal quality attributes through contribution to Open Source Software (OSS) projects. The study was carried out in two undergraduate classes in Software Quality and Software Maintenance courses, and our main results were that: (i) students observed improvements in code quality after refactoring smells; (ii) they noted connections between refactoring, testing, and debugging; (iii) they felt less confident refactoring code spread across multiple files; (iv) code complexity hindered their ability to refactor; (v) the choice of refactoring techniques depended on factors like project structure and personal preference, with techniques often used in combination to address a single smell; (vi) most refactorings decrease internal quality attributes; (vii) contributing to OSS projects fostered a sense of programmer growth; and, (viii) project clarity was linked to its potential for collaboration.`,
      keywords: [
        'code smells',
        'refactoring',
        'software engineering education',
        'open-source software',
      ],
      pdfAction: {
        type: 'download',
        value: 'Contributing to open-source.pdf',
      },
      fullArticleLink:
        'https://sol.sbc.org.br/index.php/sbes/article/view/30380',
      year: 2024,
      metrics: { citations: { count: 1 } },
    },
    {
      id: 2,
      category: 'Conference',
      name: 'TERTS: A Teaching Tutor for Refactoring Test Smells',
      isPortuguese: true,
      citationHTML: `Rufino, A., Alves, V., <strong>Lima, L.</strong>, Queiroz, J., Bezerra, C., Machado, I., & Coutinho, E. (2024). TERTS: Um tutor de ensino para refatoração de test smells. In Anais do XXXII Workshop sobre Educação em Computação, (pp. 564-575). Porto Alegre: SBC. doi:10.5753/wei.2024.2371`,
      abstract: `Teaching test smells refactoring has been a challenging practice in the academic context. This paper introduces TERTS, a tutor for teaching and practicing test smells refactoring developed for technology students on a web platform. The article describes the development of the platform and its acceptance by students. Validation of the tool included measuring (i) acceptance and use, (ii) students’ acquisition of skills during and after use, and (iii) students’ level of knowledge about identifying and refactoring test smells before and after using the tool. The results indicate that TERTS is an effective and promising tool to be implemented in the educational environment.`,
      keywords: ['Teaching Tutor', 'Refactoring', 'Test Smells'],
      pdfAction: {
        type: 'download',
        value: 'terts.pdf',
      },
      year: 2024,
      fullArticleLink:
        'https://sol.sbc.org.br/index.php/wei/article/view/29657',
      metrics: { citations: { count: 0 } },
    },
    {
      id: 3,
      category: 'Conference',
      isPortuguese: false,
      name: 'Accessibility Evaluation of Web Systems for People with Visual Impairments: Findings from a Literature Survey',
      year: 2024,
      metrics: { citations: { count: 3 } },
      citationHTML: `Souza, A., de Souza Filho, J. C., Bezerra, C., Alves, V. A., <strong>Lima, L.</strong>, Marques, A. B., & Teixeira Monteiro, I. (2024, October). Accessibility Evaluation of Web Systems for People with Visual Impairments: Findings from a Literature Survey. In Proceedings of the XXIII Brazilian Symposium on Human Factors in Computing Systems (pp. 1-13).`,
      abstract: `Accessibility evaluation is essential to determine how accessible a Web system is so that any user can access its content regardless of their limitations. In this context, this work presents a literature survey focused on the accessibility of Web systems, targeting users with visual impairments, emphasizing the importance of including accessibility from the initial phases to the completion of system development. Based on systematic procedures, we seek to provide a current view of the resources available in the technical literature for evaluating Web accessibility, with the primary goal of identifying and bringing together a variety of attributes, methods, metrics, and tools for accessibility improvement of Web systems. We analyzed 1245 papers in the literature; among them, 52 studies demonstrated available resources for evaluating systems by developers. We found that manual evaluation, evaluation with expert users, evaluation with end-users, and heuristic evaluation are the most recurrent accessibility evaluation types. We also cataloged 22 automatic tools, 16 attributes, 15 manual or automatic approaches, and seven heuristics for evaluating accessibility in Web systems. From our findings, it is possible to observe which resources have been used to maintain compliance with accessibility standards, helping professionals to include accessibility in their projects.`,
      keywords: [
        'web accessibility',
        'evaluation of web systems',
        'visual impairment',
      ],
      pdfAction: {
        type: 'download',
        value: 'Accessibility-Evaluation-of-Web-Systems.pdf',
      },
      fullArticleLink: 'https://dl.acm.org/doi/abs/10.1145/3702038.3702090',
    },
    {
      id: 4,
      category: 'Event Summary',
      isPortuguese: true,
      name: 'Tutor de ensino para a refatoração de test smells: uma proposta de extensão do TERTS',
      year: 2024,
      citationHTML: `Tutor de ensino para a refatoração de test smells: uma proposta de extensão do TERTS - Caio Rian R. de Sousa, <strong>Lara Gabrielly S. B. Lima</strong>, Edivar C. Carvalho Filho, Guilherme P. Borges, Victor Anthony P. Alves, Carla Ilane Moreira Bezerra (2024)`,
      abstract: `In this work, we present a proposal to extend the Teaching Tutor for Test Smell Refactoring (TERTS), designed to enhance user experience through a renewed and responsive interface, internationalization support, and the addition of two new types of test smells: Magic Number Test and Sleepy Test. These new features, along with practical exercises, aim to address the increasing complexity of software development, emphasizing the importance of effectively identifying and resolving issues in tests. The tutor provides practical activities in Java, consisting of unit test code, to help students understand and solve these problems, fostering a deeper learning of software testing best practices.`,
      keywords: ['TERTS', 'Refactoring', 'Test Smells'],
      pdfAction: {
        type: 'link',
        value:
          'https://drive.google.com/file/d/1CAtj5-86Gndlk7vhU4qsIIENxy5D0w55/view',
        note: 'navigate to page 324',
      },
      metrics: { citations: { count: 0 } },
    },
    {
      id: 5,
      category: 'Event Summary',
      name: 'Investigating test code refactored by LLMs',
      year: 2024,
      award: 'Distinguished Paper Award - Academic Meetings 2024',
      isPortuguese: true,
      citationHTML: `Investigando o código de teste refatorado por LLMs - Guilherme Pereira Borges, Victor Anthony Alves, Edivar Cruz Carvalho Filho, Caio Rian Reinaldo de Sousa, <strong>Lara Gabrielly Souza Batista Lima</strong>, Carla Ilane Moreira Bezerra (2024)`,
      abstract: `This study explores the use of Large Language Models (LLMs) Gemini, Microsoft Copilot, and o1-Preview in the refactoring of test code, using test smells as an evaluation metric. To this end, a repository containing tests that already exhibited smells in their structure was used, and each model performed the refactoring. Subsequently, a quantitative analysis of test smells occurrences was conducted before and after the refactoring. The results show that, despite quantitative differences in detection, all three LLMs were effective in refactoring and removing most of the test smells present in the tests.`,
      keywords: ['Large Language Models', 'Refactoring', 'Test Smells'],
      pdfAction: {
        type: 'link',
        value:
          'https://drive.google.com/file/d/1CAtj5-86Gndlk7vhU4qsIIENxy5D0w55/view',
        note: 'navigate to page 383',
      },
      metrics: { citations: { count: 0 } },
    },
    {
      id: 6,
      category: 'Event Summary',
      name: 'A proposal for developing a teaching tutor for refactoring test smells',
      isPortuguese: true,
      year: 2023,
      citationHTML: `Uma proposta de desenvolvimento de um tutor de ensino para refatoração de test smells - João Paulo F. Queiroz, <strong>Lara Gabrielly S. B. Lima</strong>, Antonia Deigela L. Rufino, Victor Anthony P. Alves, Carla Ilane Moreira Bezerra (2023)`,
      abstract: `In this work, we propose the development of a teaching tutor for refactoring test smells, with the aim of improving the teaching of this practice. The increasing complexity of software development requires effective identification and correction of testing problems. The tutor will offer practical exercises in Java, consisting of unit test code, to help students understand and solve these problems.`,
      keywords: ['Teaching Tutor', 'Refactoring', 'Test Smells'],
      pdfAction: {
        type: 'link',
        value:
          'https://drive.google.com/file/d/139NQ64hBONoyEsbZB5kbAR_r-awaOdN8/view',
        note: 'navigate to page 368',
      },
      metrics: { citations: { count: 0 } },
    },
    {
      id: 7,
      category: 'Event Summary',
      name: 'A literature review on teaching and practicing refactoring test smells',
      isPortuguese: true,
      year: 2023,
      citationHTML: `Uma revisão da literatura sobre o ensino e prática de refatoração de test smells - João Paulo F. Queiroz, <strong>Lara Gabrielly S. B. Lima</strong>, Antonia Deigela L. Rufino, Victor Anthony P. Alves, Carla Ilane Moreira Bezerra (2023)`,
      abstract: `This paper conducts a review of studies related to teaching refactoring of test smells in software engineering. The results are derived from a comparative analysis of the themes addressed in the selected studies, allowing for the identification of potential gaps and limitations in existing research, as well as pointing out promising directions for future investigations. Thus, this review serves as a valuable source of information for researchers and professionals seeking to deepen their understanding and contribute to the advancement of studies on refactoring test smells.`,
      keywords: ['Test Smells', 'Teaching Tutor', 'Software Testing'],
      pdfAction: {
        type: 'link',
        value:
          'https://drive.google.com/file/d/139NQ64hBONoyEsbZB5kbAR_r-awaOdN8/view',
        note: 'navigate to page 383',
      },
      metrics: { citations: { count: 0 } },
    },
    {
      id: 8,
      category: 'Conference',
      name: 'Investigating software developers perceptions of the adoption of LLMs in code smell refactoring',
      isPortuguese: true,
      award: 'Honrable Mention - WASHES 2025',
      citationHTML: `Freitas, J., Pereira, G., <strong>Lima, L.</strong>, Sousa, C., de Souza Filho, J. C., & Bezerra, C. (2025). Investigando a Percepção de Desenvolvedores de Software sobre a Adoção de LLMs na Refatoração de Code Smells. In <em>Anais do Workshop sobre Aspectos Sociais, Humanos e Econômicos de Software (WASHES)</em>, (pp. 108-119). SBC.`,
      abstract:
        " This paper investigates developers' perceptions of code smell refactoring using Large Language Models (LLMs). Through a study of 48 Java developers, we analyzed (i) their opinions on the use of these tools, (ii) the factors that affect the prioritization of refactoring order, and (iii) their perceptions of the quality of the code generated by refactorings. Our results indicate the benefits of using LLMs in both refactoring and the software development process, including improvements in quality, productivity, learning, and support during development. However, we also highlighted potential short- and long-term maladaptive tendencies, such as the use of low-quality code, counterproductive decision-making, and reliance on LLMs for development activities.",
      keywords: ['LLMs', 'Refactoring', 'Code Smells'],
      fullArticleLink:
        'https://sol.sbc.org.br/index.php/washes/article/view/35924',
      year: 2025,
      metrics: { citations: { count: 0 } }, // Começa com 0 citações
    },
    {
      id: 9,
      category: 'Conference',
      name: 'Mapping of female representation in technical and undergraduate courses in the area of ​​information technology in the state of Ceará',
      isPortuguese: true,
      citationHTML: `Mesquita, C., <strong>Lima, L.</strong>, Rodrigues, J., Oliveira, F., Magalhaes, D., Lopes, A. L., Menezes, V., da Silva, M. M., & Bezerra, C. (2025). Mapeamento da Representatividade Feminina em Cursos Técnicos e de Graduaçao da área de Tecnologia da Informaçao no estado do Ceará. In <em>Anais do Women in Information Technology (WIT)</em>, (pp. 332-343). SBC.`,
      abstract:
        ' This study maps female representation in Information Technology (IT) courses offered by the Federal Institute of Ceará (IFCE), based on in-person enrollment data from 2016 to 2022 at the technical and undergraduate levels. The analysis revealed that, although the average female participation in technical education was 44.7%, this percentage drops to 17.4% in undergraduate programs. In 2022, female participation in undergraduate programs was 23.8%, the highest figure in the series, although lower than that of men. The study highlights a comparison between teaching modalities and over time, covering various courses and campuses spread across several cities in the state. The results reinforce the urgent need for public policies and institutional actions that encourage women to enter and remain in the IT field.',
      keywords: [
        'Female Representation',
        'Women in Technology',
        'Gender Diversity',
      ],
      fullArticleLink:
        'https://sol.sbc.org.br/index.php/wit/article/view/35995',
      year: 2025,
      metrics: { citations: { count: 0 } },
    },
    {
      id: 10,
      category: 'Conference',
      name: 'From Code Smell to Clean Code: A Practical Experience in Teaching Refactoring for Software Maintenance',
      isPortuguese: true,
      citationHTML: `do Nascimento, J. T., de Sousa, C. R. R., <strong>Lima, L. G.</strong>, Carvalho Filho, E. C., Borges, G. P., Rabelo, J. H., & Bezerra, C. I. M. (2025). Do Code Smell ao Código Limpo: Uma Experiência Prática no Ensino de Refatoraçao para Manutençao de Software. In <em>Anais do Workshop sobre Educação em Computação (WEI)</em>, (pp. 701-711). SBC.`,
      abstract:
        "Teaching future computer science professionals to write high-quality code is essential. This paper presents an experience report on teaching code smells and code refactoring to a software maintenance class of 42 students. Four aspects were analyzed: (i) students' perception of the quality of refactorings; (ii) the challenges faced in identifying and correcting code smells; (iii) the skills acquired and the benefits gained from practice; and (iv) the most commonly used techniques for refactoring code smells. The results highlight the benefits of teaching code smell refactoring and propose a practical methodology for this teaching.",
      keywords: ['Code Smells', 'Refactoring', 'Computer Science Education'],
      fullArticleLink:
        'https://sol.sbc.org.br/index.php/wei/article/view/36209',
      year: 2025,
      metrics: { citations: { count: 0 } },
    },
  ];

  publicationsData: Publication[];

  constructor() {
    this.publicationsData = this.publications
      .sort((a, b) => b.year - a.year)
      .map((pub) => ({
        ...pub,
        showAbstract: false,
      }));
  }
}
