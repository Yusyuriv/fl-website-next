import type {IState} from "@/components/theme-builder/state/IState.ts";
import {normalizeHexColorForWpf} from "@/utils.ts";

export class PreviewPanelState implements IState {
  separator = $state({
    color: "#3c454e",
    width: 1,
    margins: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  title = $state({
    color: "#5888b2",
    size: 14,
    style: "Normal",
    weight: "Normal",
  });

  subtitle = $state({
    color: "#8b95a1",
    size: 12,
    style: "Normal",
    weight: "Normal",
  });

  glyphColor = $state("#8b95a1");

  reset(): void {
    this.separator.color = "#3c454e";
    this.separator.width = 1;
    this.separator.margins.top = 0;
    this.separator.margins.right = 0;
    this.separator.margins.bottom = 0;
    this.separator.margins.left = 0;

    this.title.color = "#5888b2";
    this.title.size = 14;
    this.title.style = "Normal";
    this.title.weight = "Normal";

    this.subtitle.color = "#8b95a1";
    this.subtitle.size = 12;
    this.subtitle.style = "Normal";
    this.subtitle.weight = "Normal";

    this.glyphColor = "#8b95a1";
  }

  toCssProperties(): Record<string, string> {
    return {
      '--preview-panel-separator-color': this.separator.color,
      '--preview-panel-separator-width': `${this.separator.width}px`,
      '--preview-panel-separator-margin-top': `${this.separator.margins.top}px`,
      '--preview-panel-separator-margin-right': `${this.separator.margins.right}px`,
      '--preview-panel-separator-margin-bottom': `${this.separator.margins.bottom}px`,
      '--preview-panel-separator-margin-left': `${this.separator.margins.left}px`,

      '--preview-panel-title-color': this.title.color,
      '--preview-panel-title-size': `${this.title.size}px`,
      '--preview-panel-title-style': this.title.style,
      '--preview-panel-title-weight': this.title.weight,

      '--preview-panel-subtitle-color': this.subtitle.color,
      '--preview-panel-subtitle-size': `${this.subtitle.size}px`,
      '--preview-panel-subtitle-style': this.subtitle.style,
      '--preview-panel-subtitle-weight': this.subtitle.weight,

      '--preview-panel-glyph-color': this.glyphColor,
    };
  }

  toJSON(): Record<string, any> {
    return {
      separator: this.separator,
      title: this.title,
      subtitle: this.subtitle,
      glyphColor: this.glyphColor,
    };
  }

  toXamlString(): string {
    return `
    <!-- Preview Panel -->
    <Style
        x:Key="PreviewBorderStyle"
        BasedOn="{StaticResource BasePreviewBorderStyle}"
        TargetType="{x:Type Border}">
        <Setter Property="BorderBrush" Value="${normalizeHexColorForWpf(this.separator.color)}" />
        <Setter Property="BorderThickness" Value="${this.separator.width} 0 0 0" />
        <Setter Property="Margin" Value="${this.separator.margins.left} ${this.separator.margins.top} ${this.separator.margins.right} ${this.separator.margins.bottom}" />
    </Style>
    
    <Style
        x:Key="PreviewItemTitleStyle"
        BasedOn="{StaticResource BasePreviewItemTitleStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.title.color)}" />
        <Setter Property="FontSize" Value="${this.title.size}" />
        <Setter Property="FontStyle" Value="${this.title.style}" />
        <Setter Property="FontWeight" Value="${this.title.weight}" />
        <Setter Property="LineHeight" Value="${Math.floor(this.title.size * 1.5)}" />
    </Style>
    
    <Style
        x:Key="PreviewItemSubTitleStyle"
        BasedOn="{StaticResource BasePreviewItemSubTitleStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.subtitle.color)}" />
        <Setter Property="FontSize" Value="${this.subtitle.size}" />
        <Setter Property="FontStyle" Value="${this.subtitle.style}" />
        <Setter Property="FontWeight" Value="${this.subtitle.weight}" />
        <Setter Property="LineHeight" Value="${Math.floor(this.subtitle.size * 1.5)}" />
    </Style>
    
    <Style
        x:Key="PreviewGlyph"
        BasedOn="{StaticResource BasePreviewGlyph}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.glyphColor)}" />
    </Style>
    `.trim();
  }
}
