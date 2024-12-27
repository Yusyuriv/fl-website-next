import type {IState} from "./IState";

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
    throw new Error("Method not implemented.");
  }
}
