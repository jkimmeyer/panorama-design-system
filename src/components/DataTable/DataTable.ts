import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

const prefix = "pfreundt";

@customElement(`${prefix}-data-table`)
export class PfreundtDataTable extends LitElement {
  static styles = css``;

  @property({ type: String })
  content: string = "Default Content";

  render() {
    return html`
      <table class="${prefix}-data-table">
        <thead>
          <tr>
            <th>Content Cell</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${this.content}</td>
          </tr>
        </tbody>
      </table>
    `;
  }
}
