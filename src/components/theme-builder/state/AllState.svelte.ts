import type {IState} from "./IState.ts";
import {SettingsState} from "./SettingsState.svelte.ts";
import {WindowState} from "./WindowState.svelte.ts";
import {QueryBoxState} from "./QueryBoxState.svelte.ts";
import {SeparatorState} from "./SeparatorState.svelte.ts";
import {ResultState} from "./ResultState.svelte.ts";
import {ScrollbarState} from "./ScrollbarState.svelte.ts";
import {BulletState} from "./BulletState.svelte.ts";

export class AllState implements IState {
  settings = new SettingsState();
  window = new WindowState();
  queryBox = new QueryBoxState();
  scrollbar = new ScrollbarState();
  separator = new SeparatorState();
  result = new ResultState();
  bullet = new BulletState();

  toCssProperties(): Record<string, string> {
    return {
      ...this.window.toCssProperties(),
      ...this.queryBox.toCssProperties(),
      ...this.scrollbar.toCssProperties(),
      ...this.separator.toCssProperties(),
      ...this.result.toCssProperties(),
      ...this.bullet.toCssProperties(),
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
      ${this.scrollbar.toXamlString()}
      ${this.bullet.toXamlString()}
    `;
  }
}

export const state = new AllState();
