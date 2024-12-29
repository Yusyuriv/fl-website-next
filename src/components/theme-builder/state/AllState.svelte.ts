import type {IState} from "./IState.ts";
import {SettingsState} from "./SettingsState.svelte.ts";
import {WindowState} from "./WindowState.svelte.ts";
import {QueryBoxState} from "./QueryBoxState.svelte.ts";
import {SeparatorState} from "./SeparatorState.svelte.ts";
import {ResultState} from "./ResultState.svelte.ts";
import {ScrollbarState} from "./ScrollbarState.svelte.ts";
import {BulletState} from "./BulletState.svelte.ts";
import {normalizeBooleanForWpf} from "@/utils.ts";

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
<!--
    Name: ${this.settings.name}
    IsDark: ${normalizeBooleanForWpf(this.settings.dark)}
    HasBlur: ${normalizeBooleanForWpf(this.window.background.blur)}
-->
<ResourceDictionary
    xmlns="http://schemas.microsoft.com/winfx/2006/xaml/presentation"
    xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"
    xmlns:m="http://schemas.modernwpf.com/2019"
    xmlns:system="clr-namespace:System;assembly=mscorlib">

    <ResourceDictionary.MergedDictionaries>
        <ResourceDictionary Source="pack://application:,,,/Themes/Base.xaml" />
    </ResourceDictionary.MergedDictionaries>
    
    ${this.window.toXamlString()}
    ${this.queryBox.toXamlString()}
    ${this.separator.toXamlString()}
    ${this.result.toXamlString()}
    ${this.bullet.toXamlString()}
    ${this.scrollbar.toXamlString()}
    
</ResourceDictionary>
    `.trim();
  }
}

export const state = new AllState();
