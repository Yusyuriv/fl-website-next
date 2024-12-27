import type {IState} from "./IState";

export class WindowState implements IState {
  border = $state({
    thickness: 2,
    color: "#6C7279",
    radius: 5,
  });

  background = $state({
    color: "#303840",
    opacity: 1,
    blur: false,
  });

  toCssProperties(): Record<string, string> {
    return {
      '--border-thickness': `${this.border.thickness}px`,
      '--border-color': this.border.color,
      '--border-radius': `${this.border.radius}px`,
      '--background': this.background.color,
      '--background-opacity': `${this.background.opacity}`,
      '--backdrop-blur': this.background.blur ? 'blur(30px)' : 'none',
    }
  }

  toXamlString(): string {
    throw new Error("Method not implemented.");
  }
}
