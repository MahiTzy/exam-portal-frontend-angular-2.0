import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminDashboardComponent
  implements OnInit, OnDestroy
{
  private scriptElements: HTMLScriptElement[] = [];
  private styleElements: HTMLLinkElement[] = [];
  title = '';

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Load CSS files dynamically
    this.router.events.subscribe(() => {
      const routeData = this.route.firstChild?.snapshot.data;
      this.title = routeData ? routeData['title'] : 'Default Title';
    });

    this.loadScripts([
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
      '../../../../assets/js/main.js',
    ]);
    this.loadStyles([
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css',
      '../../../../assets/css/user/bootstrap-icons/bootstrap-icons.min.css',
      '../../../../assets/css/user/style.css',
    ]);
  }

  loadStyles(sources: string[]): void {
    sources.forEach((href) => {
      const styleElement = this.renderer.createElement('link');
      styleElement.rel = 'stylesheet';
      styleElement.href = href;
      this.renderer.appendChild(document.head, styleElement);
      this.styleElements.push(styleElement);
    });
  }

  loadScripts(sources: string[]): void {
    sources.forEach((src) => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = src;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      this.renderer.appendChild(document.body, scriptElement);
      this.scriptElements.push(scriptElement);
    });
  }

  ngOnDestroy(): void {
    // Remove loaded scripts
    this.scriptElements.forEach((scriptElement) => {
      if (scriptElement) {
        this.renderer.removeChild(document.body, scriptElement);
      }
    });

    // Remove loaded styles
    this.styleElements.forEach((styleElement) => {
      if (styleElement) {
        this.renderer.removeChild(document.head, styleElement);
      }
    });
  }
}
