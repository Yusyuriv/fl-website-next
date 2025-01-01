import type {IState} from "@/components/theme-builder/state/IState.ts";

export class SettingsState implements Omit<IState, "toCssProperties" | "toXamlString"> {
  name = $state("Hello World Theme");
  dark = $state(false);
  backgrounds = $state(false);
  progressBar = $state(false);
  caret = $state(false);
  activeResults = $state([false, false, false, true, false]);
  datetime = $state(false);
  previewPanel = $state(false);

  reset(): void {
    this.name = "Hello World Theme";
    this.dark = false;
    this.backgrounds = false;
    this.progressBar = false;
    this.caret = false;
    this.activeResults = [false, false, false, true, false];
    this.datetime = false;
    this.previewPanel = false;
  }

  toJSON(): Record<string, any> {
    return {
      name: this.name,
      dark: this.dark,
      backgrounds: this.backgrounds,
      progressBar: this.progressBar,
      caret: this.caret,
      activeResults: this.activeResults,
      datetime: this.datetime,
      previewPanel: this.previewPanel,
    };
  }
}
