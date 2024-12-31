export interface IState {
  toCssProperties(): Record<string, string>;
  toXamlString(): string;
  toJSON(): Record<string, any>;
  reset(): void;
}
