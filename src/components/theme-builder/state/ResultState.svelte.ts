import type {IState} from "./IState";

export class ResultState implements IState {
  regular = $state({
    shortcut: "#5BAFB0",
    glyph: "#5BAFB0",
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
    shortcut: "#EA7354",
    glyph: "#FFFFFF",
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
      '--result-active-background-color': this.active.background,
      '--result-margin-left': `${this.margins.left}px`,
      '--result-margin-right': `${this.margins.right}px`,
      '--result-border-radius': `${this.borderRadius}px`,
      '--result-highlighted-text-color': this.highlightedText.color,
      '--result-highlighted-text-weight': this.highlightedText.weight,
      '--result-list-margins': `${this.resultListMargins.top}px ${this.resultListMargins.right}px ${this.resultListMargins.bottom}px ${this.resultListMargins.left}px`,
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
    throw new Error("Method not implemented.");
  }
}
