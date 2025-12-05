import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-csr-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Client-Side Rendering (CSR) Demo Page</h1>
      <p>This page is rendered entirely on the client-side using JavaScript.</p>
      
      <div class="info-section">
        <h2>CSR Information</h2>
        <ul>
          <li><strong>Rendered at:</strong> {{ renderTime() }}</li>
          <li><strong>Rendering Mode:</strong> Client-Side Rendering</li>
          <li><strong>Page Type:</strong> CSR (rendered in browser)</li>
          <li><strong>Framework:</strong> Analog.js with CSR enabled</li>
        </ul>
      </div>

      <div class="demo-section">
        <h2>Dynamic Content Demo</h2>
        <p>This content is loaded and rendered on the client-side:</p>
        
        <div class="counter-section">
          <h3>Interactive Counter</h3>
          <p class="counter-value">Count: {{ counter() }}</p>
          <div class="button-group">
            <button (click)="increment()" class="btn btn-primary">Increment</button>
            <button (click)="decrement()" class="btn btn-secondary">Decrement</button>
            <button (click)="reset()" class="btn btn-reset">Reset</button>
          </div>
        </div>

        <div class="data-section" *ngIf="dataLoaded()">
          <h3>Client-Side Data Fetch</h3>
          <p>This data was fetched after the page loaded:</p>
          <div class="data-card">
            <p><strong>User ID:</strong> {{ userData()?.id }}</p>
            <p><strong>Name:</strong> {{ userData()?.name }}</p>
            <p><strong>Email:</strong> {{ userData()?.email }}</p>
            <p><strong>Fetched at:</strong> {{ fetchTime() }}</p>
          </div>
          <button (click)="fetchData()" class="btn btn-primary">Refresh Data</button>
        </div>

        <div class="loading" *ngIf="loading()">
          <p>Loading data...</p>
        </div>
      </div>

      <div class="features-section">
        <h2>CSR Benefits</h2>
        <ul>
          <li>Reduced server load - rendering happens in the browser</li>
          <li>Dynamic updates without page reloads</li>
          <li>Faster subsequent navigation (SPA behavior)</li>
          <li>Better interactivity and user experience</li>
          <li>Works well with APIs and real-time data</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .container {
        max-width: 900px;
        margin: 0 auto;
        padding: 2rem;
        font-family: system-ui, -apple-system, sans-serif;
      }
      h1 {
        color: #dd0031;
        margin-bottom: 1rem;
        font-size: 2.5rem;
      }
      h2 {
        color: #333;
        margin-top: 2rem;
        margin-bottom: 1rem;
        font-size: 1.5rem;
      }
      h3 {
        color: #555;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        font-size: 1.25rem;
      }
      p {
        line-height: 1.6;
        margin-bottom: 1rem;
        color: #333;
      }
      .info-section,
      .demo-section,
      .features-section {
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
      }
      .demo-section {
        background: #e8f5e9;
        border-left: 4px solid #4caf50;
      }
      .counter-section,
      .data-section {
        background: white;
        padding: 1.5rem;
        border-radius: 6px;
        margin-top: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      }
      .counter-value {
        font-size: 1.5rem;
        font-weight: bold;
        color: #dd0031;
        text-align: center;
        margin: 1rem 0;
      }
      .button-group {
        display: flex;
        gap: 1rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 6px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
        font-weight: 500;
      }
      .btn-primary {
        background: #4caf50;
        color: white;
      }
      .btn-primary:hover {
        background: #45a049;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .btn-secondary {
        background: #2196f3;
        color: white;
      }
      .btn-secondary:hover {
        background: #0b7dda;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .btn-reset {
        background: #ff9800;
        color: white;
      }
      .btn-reset:hover {
        background: #e68900;
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      .data-card {
        background: #f9f9f9;
        padding: 1rem;
        border-radius: 6px;
        margin: 1rem 0;
        border-left: 3px solid #2196f3;
      }
      .data-card p {
        margin: 0.5rem 0;
      }
      .loading {
        text-align: center;
        padding: 2rem;
        color: #666;
      }
      ul {
        list-style-type: disc;
        padding-left: 1.5rem;
        line-height: 1.8;
      }
      li {
        margin-bottom: 0.5rem;
        color: #333;
      }
      strong {
        color: #dd0031;
      }
    `,
  ],
})
export default class CSRDemoPage implements OnInit {
  renderTime = signal<string>('');
  counter = signal<number>(0);
  dataLoaded = signal<boolean>(false);
  loading = signal<boolean>(false);
  userData = signal<{ id: number; name: string; email: string } | null>(null);
  fetchTime = signal<string>('');

  ngOnInit() {
    // Set render time when component initializes (client-side)
    this.renderTime.set(new Date().toLocaleString());
    
    // Simulate fetching data after component loads
    setTimeout(() => {
      this.fetchData();
    }, 500);
  }

  increment() {
    this.counter.update((val) => val + 1);
  }

  decrement() {
    this.counter.update((val) => val - 1);
  }

  reset() {
    this.counter.set(0);
  }

  fetchData() {
    this.loading.set(true);
    this.dataLoaded.set(false);

    // Simulate API call
    setTimeout(() => {
      const mockData = {
        id: Math.floor(Math.random() * 1000),
        name: 'John Doe',
        email: 'john.doe@example.com',
      };
      
      this.userData.set(mockData);
      this.fetchTime.set(new Date().toLocaleString());
      this.dataLoaded.set(true);
      this.loading.set(false);
    }, 1000);
  }
}

