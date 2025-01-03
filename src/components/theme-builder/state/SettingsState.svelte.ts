import type {IState} from "@/components/theme-builder/state/IState.ts";
import {verifyArrayTypes} from "@/utils.ts";

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

  fromJSON(data: any[]): void {
    if (!verifyArrayTypes(
      data,
      "string",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
      "number",
    ))
      return;

    this.name = data[0];
    this.dark = !!data[1];
    this.backgrounds = !!data[2];
    this.progressBar = !!data[3];
    this.caret = !!data[4];
    this.activeResults[0] = !!data[5];
    this.activeResults[1] = !!data[6];
    this.activeResults[2] = !!data[7];
    this.activeResults[3] = !!data[8];
    this.activeResults[4] = !!data[9];
    this.datetime = !!data[10];
    this.previewPanel = !!data[11];
  }

  toJSON(): any[] {
    return [
      this.name,
      +this.dark,
      +this.backgrounds,
      +this.progressBar,
      +this.caret,
      this.activeResults.map(v => +v),
      +this.datetime,
      +this.previewPanel
    ].flat();
  }
}
