import type {IState} from "./IState";
import {normalizeHexColorForWpf, normalizeMarginsForWpf} from "@/utils.ts";

export class ResultState implements IState {
  regular = $state({
    shortcut: {
      color: "#5BAFB0",
      fontSize: 12,
      fontStyle: "Normal",
      fontWeight: "Normal",
    },
    glyph: {
      color: "#5BAFB0",
      fontSize: 20,
    },
    title: "#5989B2",
    subtitle: "#7B858F",
    bullet: {
      color: "transparent",
      width: 4,
      height: 10,
      borderRadius: 2,
    },
  });

  active = $state({
    shortcut: {
      color: "#EA7354",
      fontSize: 12,
      fontStyle: "Normal",
      fontWeight: "Normal",
    },
    glyph: {
      color: "#FFFFFF",
      fontSize: 20,
    },
    title: "#5BAFB0",
    subtitle: "#CC8EC8",
    background: "#3C454E",
    bullet: {
      color: "#D0A23A",
      width: 4,
      height: 10,
      borderRadius: 2,
    },
  });

  resultListMargins = $state({
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  });

  margins = $state({
    left: 0,
    right: 0,
  });

  borderRadius = $state(0);

  highlightedText = $state({
    color: "#FFAA47",
    fontStyle: "Normal",
    fontWeight: "Normal",
  });

  toCssProperties(): Record<string, string> {
    return {
      '--result-title-color': this.regular.title,
      '--result-title-active-color': this.active.title,

      '--result-subtitle-color': this.regular.subtitle,
      '--result-subtitle-active-color': this.active.subtitle,

      '--result-glyph-color': this.regular.glyph.color,
      '--result-glyph-font-size': `${this.regular.glyph.fontSize}px`,

      '--result-glyph-active-color': this.active.glyph.color,
      '--result-glyph-active-font-size': `${this.active.glyph.fontSize}px`,

      '--result-shortcut-color': this.regular.shortcut.color,
      '--result-shortcut-font-size': `${this.regular.shortcut.fontSize}px`,
      '--result-shortcut-font-style': this.regular.shortcut.fontStyle,
      '--result-shortcut-font-weight': this.regular.shortcut.fontWeight,

      '--result-shortcut-active-color': this.active.shortcut.color,
      '--result-shortcut-active-font-size': `${this.active.shortcut.fontSize}px`,
      '--result-shortcut-active-font-style': this.active.shortcut.fontStyle,
      '--result-shortcut-active-font-weight': this.active.shortcut.fontWeight,

      '--result-active-background-color': this.active.background,
      '--result-margin-left': `${this.margins.left}px`,
      '--result-margin-right': `${this.margins.right}px`,
      '--result-border-radius': `${this.borderRadius}px`,

      '--result-highlighted-text-color': this.highlightedText.color,
      '--result-highlighted-text-font-style': this.highlightedText.fontStyle,
      '--result-highlighted-text-font-weight': this.highlightedText.fontWeight,

      '--result-list-margins': `${this.resultListMargins.top}px ${this.resultListMargins.right}px ${this.resultListMargins.bottom}px ${this.resultListMargins.left}px`,
      '--result-list-margin-right': `${this.resultListMargins.right}px`,

      '--result-bullet-color': this.regular.bullet.color,
      '--result-bullet-width': `${this.regular.bullet.width}px`,
      '--result-bullet-height': `${this.regular.bullet.height}px`,
      '--result-bullet-border-radius': `${this.regular.bullet.borderRadius}px`,

      '--result-active-bullet-color': this.active.bullet.color,
      '--result-active-bullet-width': `${this.active.bullet.width}px`,
      '--result-active-bullet-height': `${this.active.bullet.height}px`,
      '--result-active-bullet-border-radius': `${this.active.bullet.borderRadius}px`,
    };
  }

  toXamlString(): string {
    return `
    <!-- Margins for the list of results -->
    <Thickness x:Key="ResultMargin">${normalizeMarginsForWpf(this.resultListMargins)}</Thickness>

    <!-- Result title -->
    <Style
        x:Key="ItemTitleStyle"
        BasedOn="{StaticResource BaseItemTitleStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.regular.title)}" />
    </Style>
    
    <Style
        x:Key="ItemTitleSelectedStyle"
        BasedOn="{StaticResource BaseItemTitleSelectedStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.active.title)}" />
    </Style>
    
    <!-- Result subtitle -->
    <Style
        x:Key="ItemSubTitleStyle"
        BasedOn="{StaticResource BaseItemSubTitleStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.regular.subtitle)}" />
    </Style>
    
    <Style
        x:Key="ItemSubTitleSelectedStyle"
        BasedOn="{StaticResource BaseItemSubTitleSelectedStyle}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.active.subtitle)}" />
    </Style>
    
    <!-- Result hotkey (Alt+1, Alt+2, etc.) -->
    <Style x:Key="ItemHotkeyStyle" TargetType="{x:Type TextBlock}">
        <Setter Property="FontSize" Value="${this.regular.shortcut.fontSize}" />
        <Setter Property="Foreground" Value="${this.regular.shortcut.color}" />
    </Style>
    
    <Style x:Key="ItemHotkeySelectedStyle" TargetType="{x:Type TextBlock}">
        <Setter Property="FontSize" Value="${this.active.shortcut.fontSize}" />
        <Setter Property="Foreground" Value="${this.active.shortcut.color}" />
    </Style>
    
    <!-- Result glyph -->
    <Style x:Key="ItemGlyphStyle" TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.regular.glyph.color)}" />
        <Setter Property="Width" Value="${this.regular.glyph.fontSize}" />
        <Setter Property="Height" Value="${this.regular.glyph.fontSize}" />
        <Setter Property="FontSize" Value="${this.regular.glyph.fontSize}" />
    </Style>
    
    <Style x:Key="ItemGlyphSelectedStyle" TargetType="{x:Type TextBlock}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.active.glyph.color)}" />
        <Setter Property="Width" Value="${this.active.glyph.fontSize}" />
        <Setter Property="Height" Value="${this.active.glyph.fontSize}" />
        <Setter Property="FontSize" Value="${this.active.glyph.fontSize}" />
    </Style>
    
    <!-- Selected result styles -->
    <SolidColorBrush x:Key="ItemSelectedBackgroundColor">${normalizeHexColorForWpf(this.active.background)}</SolidColorBrush>
    <CornerRadius x:Key="ItemRadius">${this.borderRadius}</CornerRadius>
    <Thickness x:Key="ItemMargin">${normalizeMarginsForWpf(this.margins)}</Thickness>
    
    <!-- Highlighted text -->
    <Style x:Key="HighlightStyle">
        <Setter Property="Inline.Foreground" Value="${normalizeHexColorForWpf(this.highlightedText.color)}" />
        <Setter Property="Inline.FontStyle" Value="${this.highlightedText.fontStyle}" />
        <Setter Property="Inline.FontWeight" Value="${this.highlightedText.fontWeight}" />
    </Style>
    `;
  }

  toJSON(): Record<string, any> {
    return {
      regular: this.regular,
      active: this.active,
      resultListMargins: this.resultListMargins,
      margins: this.margins,
      borderRadius: this.borderRadius,
      highlightedText: this.highlightedText,
    }
  }
}
