import type {IState} from "./IState";
import {normalizeHexColorForWpf, normalizeMarginsForWpf} from "@/utils.ts";

export class SeparatorState implements IState {
  visible = $state(true);
  color = $state("#3c454e");
  margins = $state({
    top: 1,
    right: 0,
    bottom: 8,
    left: 0,
  });
  size = $state(2);

  toCssProperties(): Record<string, string> {
    return {
      '--separator-color': this.color,
      '--separator-size': `${this.size}px`,
      '--separator-margins': `${this.margins.top}px ${this.margins.right}px ${this.margins.bottom}px ${this.margins.left}px`,
    };
  }

  toXamlString(): string {
    const color = this.visible ? normalizeHexColorForWpf(this.color) : "Transparent";
    const height = this.visible ? this.size : 0;
    const margin = this.visible ? normalizeMarginsForWpf(this.margins) : "0";
    return `
    <!-- Separator between the query box and the results -->
    <Style
        x:Key="SeparatorStyle"
        BasedOn="{StaticResource BaseSeparatorStyle}"
        TargetType="{x:Type Rectangle}">
        <Setter Property="Fill" Value="${color}" />
        <Setter Property="Height" Value="${height}" />
        <Setter Property="Margin" Value="${margin}" />
    </Style>
    `;
  }
}
