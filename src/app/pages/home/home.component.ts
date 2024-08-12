import { AfterViewInit, Component, OnDestroy, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../../assets/css/bootstrap.min.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy, AfterViewInit {

  private scriptElements: HTMLScriptElement[] = [];

  private linkElements: HTMLLinkElement[] = [];

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    this.loadScrollScript();
  }

  ngOnInit(): void {
    this.loadScrollScript();
    this.loadCSS([
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic&amp;display=swap',
      'https://fonts.googleapis.com/css?family=Cabin:700&amp;display=swap'
    ]);
    this.loadScripts([
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js',
      'https://code.jquery.com/jquery-3.3.1.slim.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
      '../../../assets/js/grayscale.js'
    ]);
  }

  loadScrollScript() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", function () {
      let currentSection: string | null;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSection}`) {
          link.classList.add("active");
        }
      });
    });
  }

  loadCSS(sources: string[]): void {
    sources.forEach(href => {
      const linkElement = this.renderer.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = href;
      this.renderer.appendChild(document.head, linkElement);
      this.linkElements.push(linkElement);
    });
  }

  loadScripts(sources: string[]): void {
    sources.forEach(src => {
      const scriptElement = this.renderer.createElement('script');
      scriptElement.src = src;
      scriptElement.type = 'text/javascript';
      scriptElement.async = true;
      this.renderer.appendChild(document.body, scriptElement);
      this.scriptElements.push(scriptElement);
    });
  }

  ngOnDestroy(): void {
    this.scriptElements.forEach(scriptElement => {
      if (scriptElement) {
        this.renderer.removeChild(document.body, scriptElement);
      }
    });
    this.linkElements.forEach(linkElement => {
      if (linkElement) {
        this.renderer.removeChild(document.head, linkElement);
      }
    });
  }
}
