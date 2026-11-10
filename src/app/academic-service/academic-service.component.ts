import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ServiceItem {
  role: string;
  venue: string;
  year: number;
}

interface ServiceGroup {
  title: string;
  icon: string;
  items: ServiceItem[];
}

@Component({
  selector: 'app-academic-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './academic-service.component.html',
  styleUrls: ['./academic-service.component.css'],
})
export class AcademicServiceComponent {
  groups: ServiceGroup[] = [
    {
      title: 'Peer Review',
      icon: 'bi-pencil-square',
      items: [
        {
          role: 'Program Committee Reviewer',
          venue:
            'SBC-EB 2026: III Brazilian Symposium on Computing in Basic Education',
          year: 2026,
        },
        {
          role: 'Program Committee Reviewer',
          venue: 'CTIC 2026: Undergraduate Research Paper Contest',
          year: 2026,
        },
      ],
    },
    {
      title: 'Examination Committees',
      icon: 'bi-people',
      items: [
        {
          role: 'Supervised Internship Evaluation Committees (3)',
          venue:
            'B.Sc. in Information Systems, University of São Paulo (USP)',
          year: 2026,
        },
      ],
    },
  ];
}
