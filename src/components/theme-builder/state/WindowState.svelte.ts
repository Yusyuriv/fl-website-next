import type {IState} from "./IState";
import {normalizeBooleanForWpf, normalizeHexColorForWpf} from "@/utils.ts";

export class WindowState implements IState {
  border = $state({
    thickness: 2,
    color: "#6C7279",
    radius: 5,
  });

  background = $state({
    color: "#303840",
    blur: false,
  });

  toCssProperties(): Record<string, string> {
    return {
      '--border-thickness': `${this.border.thickness}px`,
      '--border-color': this.border.color,
      '--border-radius': `${this.border.radius}px`,
      '--background': this.background.color,
      '--backdrop-blur': this.background.blur ? 'blur(30px)' : 'none',
    }
  }

  toXamlString(): string {
    return `
    <!-- Blur behind the window -->
    <system:Boolean x:Key="ThemeBlurEnabled">${normalizeBooleanForWpf(this.background.blur)}</system:Boolean>
    
    <!-- Main window background -->
    <Style
        x:Key="WindowBorderStyle"
        BasedOn="{StaticResource BaseWindowBorderStyle}"
        TargetType="{x:Type Border}">
        <Setter Property="BorderThickness" Value="${this.border.thickness}" />
        <Setter Property="BorderBrush" Value="${normalizeHexColorForWpf(this.border.color)}" />
        <Setter Property="Background" Value="${normalizeHexColorForWpf(this.background.color)}"/>
        <Setter Property="CornerRadius" Value="${this.border.radius}" />
        <Setter Property="UseLayoutRounding" Value="True" />
    </Style>
    
    <Style
        x:Key="WindowStyle"
        BasedOn="{StaticResource BaseWindowStyle}"
        TargetType="{x:Type Window}" />
        
    <Style x:Key="WindowRadius" TargetType="{x:Type Border}" />
    `;
  }
}
