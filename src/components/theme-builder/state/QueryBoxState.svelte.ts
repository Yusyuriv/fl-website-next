import type {IState} from "./IState";

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
    weight: "Normal",
  });

  time = $state({
    color: "#79817F",
    size: 14,
    weight: "Normal",
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
      '--date-weight': this.date.weight,
      '--time-color': this.time.color,
      '--time-size': `${this.time.size}px`,
      '--time-weight': this.time.weight,
    };
  }

  toXamlString(): string {
    throw new Error("Method not implemented.");
  }
}
