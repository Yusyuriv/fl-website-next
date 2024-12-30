export class SettingsState {
  name = $state("Hello World Theme");
  dark = $state(false);
  backgrounds = $state(false);
  progressBar = $state(false);
  caret = $state(false);
  activeResults = $state([false, false, false, true, false]);
  datetime = $state(false);

  toJSON(): Record<string, any> {
    return {
      name: this.name,
      dark: this.dark,
      backgrounds: this.backgrounds,
      progressBar: this.progressBar,
      caret: this.caret,
      activeResults: this.activeResults,
      datetime: this.datetime,
    };
  }
}
