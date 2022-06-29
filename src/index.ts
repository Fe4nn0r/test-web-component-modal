import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('w-modal')
export class SimpleGreeting extends LitElement {
  @property() public open:boolean = true;

  static styles = css`
    .w-modal-overlay {
      background-color: rgba(0,0,0,0.75);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: -1;
    }

    .w-modal-container {
      height: 100%;
      outline: 0;
      overflow-x: hidden;
      overflow-y: auto;
      text-align: center;
    }

    .w-modal {
      background: #ffffff;
      box-shadow: 0px 15px 60px rgba(9,96,193,0.15);
      border-radius: 4px;
      max-width: 710px;
      min-width: 266px;
      padding: 40px 32px;
      overflow: visible;
      position: relative;
      display: inline-block;
      margin: 1.2rem;
    }
  `;

  render() {
    if (this.open === false) {
      return null;
    }

    const addClass = this.getAttribute('class') || '';

    return html`
      <div class="w-modal-overlay">
        <div class="w-modal-container">
          <div class="w-modal ${addClass}">
            <slot name="content">fallback</slot>
          </div>
        </div>
      </div>
    `;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

}
