import { CommonModule } from '@angular/common';
import { Component, Input, isDevMode } from '@angular/core';

/**
 * Shows a photo. If the file doesn't exist yet, it shows a dashed
 * "add photo" placeholder with the expected file path, only while
 * running locally (`npm start`). In the production build a missing
 * photo is simply hidden.
 */
@Component({
  selector: 'app-photo-slot',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img *ngIf="!missing; else placeholder" [src]="src" [alt]="alt" (error)="missing = true" />
    <ng-template #placeholder>
      <div *ngIf="showPlaceholder" class="photo-placeholder" [title]="'Salve a foto em src/' + path">
        <i class="bi bi-camera"></i>
        <span>Adicionar foto</span>
        <code>src/{{ path }}</code>
      </div>
    </ng-template>
  `,
  styles: [
    `
      :host {
        display: block;
      }
      img,
      .photo-placeholder {
        width: 100%;
        aspect-ratio: 4 / 3;
        border-radius: 10px;
      }
      img {
        object-fit: cover;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
      }
      .photo-placeholder {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;
        padding: 0.5rem;
        border: 2px dashed #d8b4fe;
        background: #faf5ff;
        color: #7e3594;
        text-align: center;
        font-size: 0.8rem;
      }
      .photo-placeholder i {
        font-size: 1.5rem;
      }
      .photo-placeholder code {
        color: #6b21a8;
        font-size: 0.7rem;
        word-break: break-all;
      }
    `,
  ],
})
export class PhotoSlotComponent {
  @Input({ required: true }) src!: string;
  @Input() alt = '';

  missing = false;
  readonly showPlaceholder = isDevMode();

  get path(): string {
    return this.src.replace(/^(\.\.\/)+/, '');
  }
}
