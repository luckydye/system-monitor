import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { State } from "@luckydye/app-state";

@customElement("system-hud")
export class SystemHud extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: relative;
      }
      .hud {
        padding: 40px 0;
        display: grid;
        gap: 20px;
        grid-auto-flow: column;
        justify-items: center;
        text-align: center;
      }
      label {
        display: block;
        color: var(--font-color);
      }
      circular-loader {
        margin: 10px 0;
        color: var(--accent-color);
      }
      .display {
        position: relative;
        font-family: monospace;
      }
      .background {
        position: absolute;
        left: 0;
        color: black;
        opacity: 0.1;
        z-index: -1;
      }
    `;
  }

  connectedCallback(): void {
    super.connectedCallback();

    // State.on("system", (change) => {
    //   if ("battery" in change && change.battery !== null) {
    //     this.hasBattery = true;
    //     this.requestUpdate();
    //   }
    // });
  }

  render() {
    return html`
      <app-state scope="system">
        <div class="hud">
          <div class="display">
            <label>CPU</label>
            <circular-loader state-key="progress:cpu" size="100" thickness="6">
              <label><span state-key="innerText:cpu"></span>%</label>
            </circular-loader>
            <circular-loader
              class="background"
              size="100"
              thickness="6"
              progress="100"
            >
            </circular-loader>
          </div>
          <div class="display">
            <label>Temp</label>
            <circular-loader state-key="progress:temp" size="100" thickness="6">
              <label><span state-key="innerText:temp"></span>°C</label>
            </circular-loader>
            <circular-loader
              class="background"
              size="100"
              thickness="6"
              progress="100"
            >
            </circular-loader>
          </div>
          <div class="display">
            <label>Memory</label>
            <circular-loader
              state-key="progress:memory"
              size="100"
              thickness="6"
            >
              <label><span state-key="innerText:memory"></span>%</label>
            </circular-loader>
            <circular-loader
              class="background"
              size="100"
              thickness="6"
              progress="100"
            >
            </circular-loader>
          </div>

          <div class="display">
            <label>Network</label>
            <circular-loader
              state-key="progress:network"
              size="100"
              thickness="6"
            >
              <label><span state-key="innerText:network"></span>Mb/s</label>
            </circular-loader>
            <circular-loader
              class="background"
              size="100"
              thickness="6"
              progress="100"
            >
            </circular-loader>
          </div>

          <div class="display">
            <label>Battery</label>
            <circular-loader
              state-key="progress:battery"
              size="100"
              thickness="6"
            >
              <label><span state-key="innerText:battery"></span>%</label>
            </circular-loader>
            <circular-loader
              class="background"
              size="100"
              thickness="6"
              progress="100"
            >
            </circular-loader>
          </div>
        </div>
      </app-state>
    `;
  }
}
