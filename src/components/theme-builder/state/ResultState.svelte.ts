import type {IState} from "./IState";

export class ResultState implements IState {
  regular = $state({
    shortcut: "#5BAFB0",
    glyph: "#5BAFB0",
    title: "#5989B2",
    subtitle: "#7B858F",
  });

  active = $state({
    shortcut: "#EA7354",
    glyph: "#FFFFFF",
    title: "#5BAFB0",
    subtitle: "#CC8EC8",
    background: {
      color: "#3C454E",
      opacity: 1,
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
    weight: "Normal" as "Normal" | "Bold",
  });

  toCssProperties(): Record<string, string> {
    return {
      '--result-title-color': this.regular.title,
      '--result-title-active-color': this.active.title,
      '--result-subtitle-color': this.regular.subtitle,
      '--result-subtitle-active-color': this.active.subtitle,
      '--result-glyph-color': this.regular.glyph,
      '--result-glyph-active-color': this.active.glyph,
      '--result-shortcut-color': this.regular.shortcut,
      '--result-shortcut-active-color': this.active.shortcut,
      '--result-active-background-color': this.active.background.color,
      '--result-active-background-opacity': this.active.background.opacity.toString(),
      '--result-margin-left': `${this.margins.left}px`,
      '--result-margin-right': `${this.margins.right}px`,
      '--result-border-radius': `${this.borderRadius}px`,
      '--result-highlighted-text-color': this.highlightedText.color,
      '--result-highlighted-text-weight': this.highlightedText.weight,
      '--result-list-margins': `${this.resultListMargins.top}px ${this.resultListMargins.right}px ${this.resultListMargins.bottom}px ${this.resultListMargins.left}px`,
    };
  }

  toXamlString(): string {
    throw new Error("Method not implemented.");
  }
}
