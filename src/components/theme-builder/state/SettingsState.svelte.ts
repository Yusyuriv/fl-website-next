export class SettingsState {
  name = $state("Hello World Theme");
  dark = $state(false);
  backgrounds = $state(false);
  progressBar = $state(false);
  caret = $state(false);
  activeResults = $state([false, false, false, true, false]);
  datetime = $state(false);
}
