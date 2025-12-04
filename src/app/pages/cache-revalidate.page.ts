import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cache-revalidate',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>CDN Cache Revalidation</h1>
      <p>This page demonstrates CDN cache revalidation functionality.</p>
      <p>Click the button below to trigger cache revalidation for your CDN.</p>
      
      <div class="info-section">
        <h2>Cache Revalidation Information</h2>
        <ul>
          <li><strong>Page Type:</strong> SSG (Static Site Generation)</li>
          <li><strong>Rendering Mode:</strong> Pre-rendered at build time</li>
          <li><strong>Functionality:</strong> Client-side cache revalidation trigger</li>
        </ul>
      </div>

      <div class="revalidate-section">
        <h2>Revalidate Cache</h2>
        <div class="button-container">
          <button
            (click)="handleRevalidateCache()"
            [disabled]="isLoading()"
            [class]="getButtonClass()"
          >
            <span *ngIf="isLoading()" class="button-content">
              <svg class="spinner" viewBox="0 0 24 24">
                <circle class="spinner-circle" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/>
                <path class="spinner-path" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
              </svg>
              <span>Revalidating Cache...</span>
            </span>
            <span *ngIf="!isLoading()" class="button-content">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Revalidate Cache</span>
            </span>
          </button>
        </div>

        <div *ngIf="message()" [class]="getMessageClass()">
          {{ message() }}
        </div>
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
      p {
        line-height: 1.6;
        margin-bottom: 1rem;
        color: #333;
      }
      .info-section {
        background: #f5f5f5;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
      }
      .revalidate-section {
        background: #e8f5e9;
        padding: 1.5rem;
        border-radius: 8px;
        margin-top: 1.5rem;
        border-left: 4px solid #4caf50;
      }
      .button-container {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
      button {
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 8px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }
      button:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      }
      button:active:not(:disabled) {
        transform: translateY(0);
      }
      button:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
      .button-primary {
        background: #4caf50;
        color: white;
      }
      .button-primary:hover:not(:disabled) {
        background: #45a049;
      }
      .button-primary:active:not(:disabled) {
        background: #3d8b40;
      }
      .button-loading {
        background: #9e9e9e;
        color: white;
      }
      .button-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
      .icon {
        width: 1rem;
        height: 1rem;
      }
      .spinner {
        width: 1rem;
        height: 1rem;
        animation: spin 1s linear infinite;
      }
      .spinner-circle {
        opacity: 0.25;
      }
      .spinner-path {
        opacity: 0.75;
      }
      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
      .message {
        padding: 0.75rem 1rem;
        border-radius: 6px;
        font-size: 0.875rem;
        font-weight: 500;
        max-width: 500px;
        margin-top: 1rem;
        border: 1px solid;
      }
      .message-success {
        background: #d4edda;
        color: #155724;
        border-color: #c3e6cb;
      }
      .message-error {
        background: #f8d7da;
        color: #721c24;
        border-color: #f5c6cb;
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
export default class CacheRevalidatePage {
  isLoading = signal<boolean>(false);
  message = signal<string>('');

  // TODO: Replace with your actual API endpoint URL
  private apiUrl = 'https://dev11-app.csnonprod.com/automations-api/run/4f8da781614645d5ac1fe2e074a24746';

  getButtonClass(): string {
    return this.isLoading()
      ? 'button-loading'
      : 'button-primary';
  }

  getMessageClass(): string {
    return this.message().includes('✅')
      ? 'message message-success'
      : 'message message-error';
  }

  async handleRevalidateCache(): Promise<void> {
    this.isLoading.set(true);
    this.message.set('');

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          page: '/cache-revalidate',
        }),
      });

      if (response.ok) {
        await response.json();
        this.message.set('✅ Cache revalidation triggered successfully!');

        // Clear message after 3 seconds
        setTimeout(() => {
          this.message.set('');
        }, 3000);
      } else {
        this.message.set(
          `❌ Failed to trigger cache revalidation. Status: ${response.status}`
        );
      }
    } catch (error) {
      this.message.set(
        `❌ Error triggering cache revalidation: ${
          error instanceof Error ? error.message : 'Unknown error'
        }`
      );
    } finally {
      this.isLoading.set(false);
    }
  }
}

