import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './home/home';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Certificate } from './certificate/certificate';
import { Resume } from './resume/resume';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  Navbar,
  Home,
  About,
  Skills,
  Projects,
  Certificate,
  Resume,
  Contact,
  Footer
],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-portfolio');

  scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
}


