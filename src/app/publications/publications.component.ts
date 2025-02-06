import { Component } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
})
export class PublicationsComponent {
  downloadpdf(ArticleName: string) {
    let link = document.createElement('a');
    link.download = ArticleName;
    link.href = `../../assets/publications/${ArticleName}`;
    link.click();
  }
}
