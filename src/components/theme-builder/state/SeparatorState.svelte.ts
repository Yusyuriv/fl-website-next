import type {IState} from "./IState";

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
    throw new Error("Method not implemented.");
  }
}
