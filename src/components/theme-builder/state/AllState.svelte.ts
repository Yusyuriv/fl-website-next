import type {IState} from "./IState.ts";
import {SettingsState} from "./SettingsState.svelte.ts";
import {WindowState} from "./WindowState.svelte.ts";
import {QueryBoxState} from "./QueryBoxState.svelte.ts";
import {SeparatorState} from "./SeparatorState.svelte.ts";
import {ResultState} from "./ResultState.svelte.ts";
import {ScrollbarState} from "./ScrollbarState.svelte.ts";

export class AllState implements IState {
  settings = new SettingsState();
  window = new WindowState();
  queryBox = new QueryBoxState();
  scrollbar = new ScrollbarState();
  separator = new SeparatorState();
  result = new ResultState();

  toCssProperties(): Record<string, string> {
    return {
      ...this.window.toCssProperties(),
      ...this.queryBox.toCssProperties(),
      ...this.scrollbar.toCssProperties(),
      ...this.separator.toCssProperties(),
      ...this.result.toCssProperties(),
    };
  }

  toCssPropertiesAsString(): string {
    return Object.entries(this.toCssProperties())
      .map(([key, value]) => `${key}: ${value};`)
      .join(' ');
  }

  toXamlString(): string {
    return `
      ${this.window.toXamlString()}
      ${this.queryBox.toXamlString()}
      ${this.separator.toXamlString()}
      ${this.result.toXamlString()}
    `;
  }
}

export const state = new AllState();
