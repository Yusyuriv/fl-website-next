import type {IState} from "./IState";

export class BulletState implements IState {
  regular = $state({
    visible: false,
    color: "#ffffff00",
    width: 4,
    height: 10,
    borderRadius: 2,
  });

  active = $state({
    visible: false,
    color: "#D0A23A",
    width: 4,
    height: 10,
    borderRadius: 2,
  });

  toCssProperties(): Record<string, string> {
    return {
      '--bullet-regular-color': this.regular.color,
      '--bullet-regular-width': `${this.regular.width}px`,
      '--bullet-regular-height': `${this.regular.height}px`,
      '--bullet-regular-border-radius': `${this.regular.borderRadius}px`,
      '--bullet-active-color': this.active.color,
      '--bullet-active-width': `${this.active.width}px`,
      '--bullet-active-height': `${this.active.height}px`,
      '--bullet-active-border-radius': `${this.active.borderRadius}px`,
    };
  }

  toXamlString(): string {
    throw new Error("Method not implemented.");
  }
}
