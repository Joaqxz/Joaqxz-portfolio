import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category, aboutInfo, filters, hobbies, metrics, navigationLinks, projects, socials, strengths, techs, timeline } from './script';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly navigationLinks = navigationLinks;
  readonly metrics = metrics;
  readonly aboutInfo = aboutInfo;
  readonly timeline = timeline;
  readonly strengths = strengths;
  readonly hobbies = hobbies;
  readonly filters = filters;
  readonly techs = techs;
  readonly projects = projects;
  readonly socials = socials;
  activeCategory: Category = 'Todos';
  menuOpen = false;
  scrolled = false;
  sent = false;
  sending = false;
  submitError = false;
  form = { nome: '', email: '', mensagem: '' };

  @HostListener('window:scroll')
  onScroll(): void { this.scrolled = window.scrollY > 16; }

  @HostListener('document:click', ['$event'])
  onInternalLinkClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const link = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
    const href = link?.getAttribute('href');
    if (!link || !href || href === '#') return;

    const section = document.getElementById(href.slice(1));
    if (!section) return;

    event.preventDefault();
    this.closeMenu();
    this.animateScrollTo(Math.max(0, section.getBoundingClientRect().top + window.scrollY - 92));
  }

  filteredProjects() { return this.projects.filter((project) => this.activeCategory === 'Todos' || project.category === this.activeCategory); }
  filteredTechs() { return this.techs.filter((tech) => this.activeCategory === 'Todos' || tech.category === this.activeCategory); }
  closeMenu(): void { this.menuOpen = false; }

  async submitForm(): Promise<void> {
    this.sending = true;
    this.sent = false;
    this.submitError = false;

    try {
      const response = await fetch('https://formsubmit.co/ajax/joaquimalmeida2727@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nome: this.form.nome,
          email: this.form.email,
          mensagem: this.form.mensagem,
          _subject: `Contato do portfólio - ${this.form.nome}`,
          _template: 'table',
        }),
      });

      if (!response.ok) throw new Error('Falha ao enviar a mensagem');
      this.sent = true;
      this.form = { nome: '', email: '', mensagem: '' };
    } catch {
      this.submitError = true;
    } finally {
      this.sending = false;
    }
  }

  scrollTop(): void { this.animateScrollTo(0); }

  private animateScrollTo(destination: number): void {
    const start = window.scrollY;
    const distance = destination - start;
    const duration = 720;
    const startedAt = performance.now();

    const animate = (now: number): void => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start + distance * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }
}