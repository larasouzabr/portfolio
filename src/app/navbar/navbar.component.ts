import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface NavItem {
  href: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  public navItems: NavItem[] = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#publications', label: 'Papers' },
    { href: '#events', label: 'Events' },
  ];

  constructor(private elementRef: ElementRef) {}

  public scrollToSection(href: string): void {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    const navbarToggler =
      this.elementRef.nativeElement.querySelector('.navbar-toggler');
    const navbarCollapse =
      this.elementRef.nativeElement.querySelector('.navbar-collapse');

    if (navbarCollapse.classList.contains('show')) {
      navbarToggler.click();
    }
  }
}
