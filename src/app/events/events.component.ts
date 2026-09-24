import { Component } from '@angular/core';

interface EventImage {
  src: string;
  alt: string;
}

interface EventVideo {
  src: string;
  poster: string;
}

interface EventItem {
  id: number;
  tag: 'Outreach' | 'Talk' | 'Conference';
  title: string;
  year: number;
  location?: string;
  description: string;
  images?: EventImage[];
  video?: EventVideo;
  caption?: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
})
export class EventsComponent {
  events: EventItem[] = (<EventItem[]>[
    {
      id: 1,
      tag: 'Outreach',
      title: 'INFOGIRL - HTML/CSS Class for High School Students',
      year: 2024,
      description:
        'This event is designed for high school students to explore what we typically study at the Federal University of Ceará, aiming to inspire more girls to pursue STEM (Science, Technology, Engineering, and Mathematics) fields. I gave HTML/CSS classes.',
      images: [
        { src: '../../assets/pics/css_class-1.jpg', alt: 'HTML/CSS Class 1' },
        { src: '../../assets/pics/css_class_2.jpg', alt: 'HTML/CSS Class 2' },
      ],
      caption: 'Students working on their first HTML/CSS project.',
    },
    {
      id: 2,
      tag: 'Outreach',
      title:
        "Girls' Talk - Discussion Circle for High School Students to Learn About UFC's Programs",
      year: 2024,
      description:
        "\"Girls' Talk - Discussion Circle\" is an interactive event for public high school students, especially girls, to explore the programs at the Federal University of Ceará (UFC). It encourages young women to consider STEM and other academic fields, promoting female representation in higher education.",
      images: [
        {
          src: '../../assets/pics/conversation_round.jpg',
          alt: "Girls' Talk Discussion Circle",
        },
      ],
      caption:
        "Flyer posted on Instagram to share the schedule, the text says 'Girls' Talk - Discovering UFC Quixadá Courses'.",
    },
    {
      id: 3,
      tag: 'Talk',
      title:
        'Technology in the Classroom: Transforming Learning with the Conscious Use of Cell Phones',
      year: 2024,
      location: 'UNIPLAN University',
      description:
        'I was invited to give the main event lecture on the topic "Technology in the Classroom: Transforming Learning with the Conscious Use of Cell Phones," where we discussed Artificial Intelligence in learning, at the Academic Week of UNIPLAN University.',
      images: [
        {
          src: '../../assets/pics/PALESTRA_UNIPLAN.jpg',
          alt: 'Technology in the Classroom Lecture',
        },
        {
          src: '../../assets/pics/palestra_uniplan_2.jpg',
          alt: 'Technology in the Classroom Lecture',
        },
      ],
      caption: 'More than 200 students were present at the lecture.',
    },
    {
      id: 4,
      tag: 'Talk',
      title: 'Professions of the Future: Technology and Transformative Careers',
      year: 2024,
      description:
        'I was invited to give a lecture for high school students about my degree and how they could also pursue a degree in IT.',
      video: {
        src: '../../assets/New Project (1).mp4',
        poster: '../../assets/pics/capa-video.PNG',
      },
      caption: 'Footage made by the school.',
    },
    {
      id: 5,
      tag: 'Conference',
      title: '38th Brazilian Symposium on Software Engineering (SBES) Paper Presentation',
      year: 2024,
      location: 'Curitiba, PR',
      description:
        'The Brazilian Symposium on Software Engineering (SBES) is the leading Software Engineering conference in Latin America. I presented our paper titled <strong>"Contributing to Open-Source Projects in Refactoring Code Smells: A Practical Experience in Teaching Software Maintenance"</strong>, and we were honored with the Distinguished Paper Award.',
      images: [
        { src: '../../assets/pics/cbes_1.jpg', alt: 'SBES 1' },
        { src: '../../assets/pics/sbes_2.jpg', alt: 'SBES 2' },
        { src: '../../assets/pics/sbes_3.jpg', alt: 'SBES 3' },
      ],
    },
    {
      id: 6,
      tag: 'Conference',
      title: '32nd Workshop on Computer Education (WEI) Paper Presentation',
      year: 2024,
      location: 'Brasília, DF',
      description:
        'The 32nd Workshop on Computer Education (WEI 2024) is an annual event promoted by the Brazilian Computing Society (SBC). It serves as a forum for discussions on various topics related to Computer Education. This workshop is part of the Congress of the Brazilian Computing Society (CSBC) and is organized by SBC\'s Education and Basic Education Commissions. At this event, we presented the paper <strong>"TERTS: A Teaching Tutor for Test Smells Refactoring"</strong>, which introduces an educational tool designed to help students understand and refactor issues in software testing using Java.',
      images: [
        { src: '../../assets/pics/WEI_1.jpeg', alt: 'WEI 1' },
        { src: '../../assets/pics/WEI_2.jpg', alt: 'WEI 2' },
        { src: '../../assets/pics/WEI_3.jpg', alt: 'WEI 3' },
      ],
    },
    {
      id: 7,
      tag: 'Outreach',
      title: 'Infogirl - Angular Class',
      year: 2022,
      description:
        'This event is designed for high school students to explore what we typically study at the Federal University of Ceará, aiming to inspire more girls to pursue STEM (Science, Technology, Engineering, and Mathematics) fields. I gave an Angular class.',
      images: [
        { src: '../../assets/pics/angular_1.jpg', alt: 'Angular class 1' },
        { src: '../../assets/pics/angular_2.jpg', alt: 'Angular class 2' },
        { src: '../../assets/pics/angular_3.jpg', alt: 'Angular class 3' },
      ],
    },
  ]).sort((a, b) => b.year - a.year);
}
