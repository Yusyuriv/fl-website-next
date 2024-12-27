export class SettingsState {
  backgrounds = $state(false);
  progressBar = $state(false);
  caret = $state(false);
  activeResults = $state([false, false, false, false, true]);
  datetime = $state(false);
}
