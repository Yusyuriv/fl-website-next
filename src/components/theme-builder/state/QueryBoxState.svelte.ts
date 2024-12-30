import type {IState} from "./IState";
import {normalizeHexColorForWpf, normalizeMarginsForWpf} from "@/utils.ts";

export class QueryBoxState implements IState {
  suggestionColor = $state("#79817F");
  textColor = $state("#D2D8E5");
  caretColor = $state("#FFAA47");

  icon = $state({
    color: "#79817F",
    visible: true,
    width: 32,
    height: 32,
  });

  progressBar = $state({
    color: "#D85E4F",
    height: 2,
  });

  date = $state({
    color: "#79817F",
    size: 14,
    fontStyle: "Normal",
    fontWeight: "Normal",
    margins: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  time = $state({
    color: "#79817F",
    size: 14,
    fontStyle: "Normal",
    fontWeight: "Normal",
    margins: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
    },
  });

  datetimeMargins = $state({
    top: 0,
    right: 56,
    bottom: 0,
    left: 0,
  });



  toCssProperties(): Record<string, string> {
    return {
      '--suggestion-text-color': this.suggestionColor,
      '--query-text-color': this.textColor,
      '--caret-color': this.caretColor,
      '--progress-bar-color': this.progressBar.color,
      '--progress-bar-height': `${this.progressBar.height}px`,
      '--search-icon-color': this.icon.color,
      '--search-icon-visible': this.icon.visible ? '1' : '0',
      '--search-icon-width': `${this.icon.width}px`,
      '--search-icon-height': `${this.icon.height}px`,
      '--datetime-margins': `${this.datetimeMargins.top}px ${this.datetimeMargins.right}px ${this.datetimeMargins.bottom}px ${this.datetimeMargins.left}px`,
      '--date-color': this.date.color,
      '--date-size': `${this.date.size}px`,
      '--date-font-weight': this.date.fontWeight,
      '--date-font-style': this.date.fontStyle,
      '--date-margins': `${this.date.margins.top}px ${this.date.margins.right}px ${this.date.margins.bottom}px ${this.date.margins.left}px`,
      '--time-color': this.time.color,
      '--time-size': `${this.time.size}px`,
      '--time-font-weight': this.time.fontWeight,
      '--time-font-style': this.time.fontStyle,
      '--time-margins': `${this.time.margins.top}px ${this.time.margins.right}px ${this.time.margins.bottom}px ${this.time.margins.left}px`,
    };
  }

  toXamlString(): string {
    return `
    <!-- Query input text box -->
    <Style
        x:Key="QueryBoxStyle"
        BasedOn="{StaticResource BaseQueryBoxStyle}"
        TargetType="{x:Type TextBox}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.textColor)}" />
        <Setter Property="CaretBrush" Value="${normalizeHexColorForWpf(this.caretColor)}" />
    </Style>

    <!-- Query suggestion text box -->
    <Style
        x:Key="QuerySuggestionBoxStyle"
        BasedOn="{StaticResource BaseQuerySuggestionBoxStyle}"
        TargetType="{x:Type TextBox}">
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.suggestionColor)}" />
    </Style>
    
    <!-- The panel with the time and date -->
    <Style
        x:Key="ClockPanel"
        BasedOn="{StaticResource ClockPanel}"
        TargetType="{x:Type StackPanel}">
        <Setter Property="Margin" Value="${normalizeMarginsForWpf(this.datetimeMargins)}" />
    </Style>
    
    <!-- Time text block -->
    <Style
        x:Key="ClockBox"
        BasedOn="{StaticResource BaseClockBox}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Margin" Value="${normalizeMarginsForWpf(this.time.margins)}" />
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.time.color)}" />
        <Setter Property="FontSize" Value="${this.time.size}" />
        <Setter Property="FontStyle" Value="${this.time.fontStyle}" />
        <Setter Property="FontWeight" Value="${this.time.fontWeight}" />
    </Style>
    
    <!-- Date text block -->
    <Style
        x:Key="DateBox"
        BasedOn="{StaticResource BaseDateBox}"
        TargetType="{x:Type TextBlock}">
        <Setter Property="Margin" Value="${normalizeMarginsForWpf(this.date.margins)}" />
        <Setter Property="Foreground" Value="${normalizeHexColorForWpf(this.date.color)}" />
        <Setter Property="FontSize" Value="${this.date.size}" />
        <Setter Property="FontStyle" Value="${this.date.fontStyle}" />
        <Setter Property="FontWeight" Value="${this.date.fontWeight}" />
    </Style>
    
    <!-- Icon to the right of the query text box -->
    <Style
        x:Key="SearchIconStyle"
        BasedOn="{StaticResource BaseSearchIconStyle}"
        TargetType="{x:Type Path}">
    ${this.getSearchIconStyleContents()}
    </Style>
    
    <!-- Progress bar under the query text box -->
    <Style
        x:Key="PendingLineStyle"
        BasedOn="{StaticResource BasePendingLineStyle}"
        TargetType="{x:Type Line}">
        <Setter Property="Stroke" Value="${normalizeHexColorForWpf(this.progressBar.color)}" />
        <Setter Property="StrokeThickness" Value="${this.progressBar.height}" />
    </Style>
    `;
  }

  private getSearchIconStyleContents(): string {
    if (this.icon.visible)
      return `
        <Setter Property="Fill" Value="${normalizeHexColorForWpf(this.icon.color)}" />
        <Setter Property="Width" Value="${this.icon.width}" />
        <Setter Property="Height" Value="${this.icon.height}" />
      `.trim();
    return `
        <Setter Property="Visibility" Value="Collapsed" />
      `.trim();
  }

  toJSON(): Record<string, any> {
    return {
      suggestionColor: this.suggestionColor,
      textColor: this.textColor,
      caretColor: this.caretColor,
      icon: this.icon,
      progressBar: this.progressBar,
      date: this.date,
      time: this.time,
      datetimeMargins: this.datetimeMargins,
    }
  };
}
