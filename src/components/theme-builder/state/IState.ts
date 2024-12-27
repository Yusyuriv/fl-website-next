export interface IState {
  toCssProperties(): Record<string, string>;
  toXamlString(): string;
}
