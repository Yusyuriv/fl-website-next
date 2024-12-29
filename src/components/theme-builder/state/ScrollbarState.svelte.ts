import type {IState} from "./IState";
import {normalizeHexColorForWpf} from "@/utils.ts";

export class ScrollbarState implements IState {
  width = $state(5);
  color = $state("#3c454e");
  borderRadius = $state(5);

  toCssProperties(): Record<string, string> {
    return {
      '--scrollbar-width': `${this.width}px`,
      '--scrollbar-color': this.color,
      '--scrollbar-border-radius': `${this.borderRadius}px`,
    };
  }

  toXamlString(): string {
    return `
    <!-- Scrollbar container -->
    <Style
        x:Key="ScrollBarStyle"
        BasedOn="{StaticResource BaseScrollBarStyle}"
        TargetType="{x:Type ScrollBar}">
        <Setter Property="Width" Value="${this.width}" />
    </Style>

    <!-- Scrollbar thumb -->
    <Style
        x:Key="ThumbStyle"
        BasedOn="{StaticResource BaseThumbStyle}"
        TargetType="{x:Type Thumb}">
        <Setter Property="Template">
            <Setter.Value>
                <ControlTemplate TargetType="{x:Type Thumb}">
                    <Border
                        Background="${normalizeHexColorForWpf(this.color)}"
                        BorderBrush="Transparent"
                        BorderThickness="0"
                        CornerRadius="${this.borderRadius}"
                        DockPanel.Dock="Right" />
                </ControlTemplate>
            </Setter.Value>
        </Setter>
    </Style>
    `;
  }
}
