import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container">
      <h1>About Page</h1>
      <p>This is a static page generated at build time using SSG (Static Site Generation).</p>
      <p>This page was pre-rendered and will be served as static HTML.</p>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      h1 {
        color: #dd0031;
        margin-bottom: 1rem;
      }
      p {
        line-height: 1.6;
        margin-bottom: 1rem;
        color: #333;
      }
    `,
  ],
})
export default class AboutPage {}

