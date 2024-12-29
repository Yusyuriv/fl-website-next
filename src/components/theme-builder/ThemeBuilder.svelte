<script lang="ts">
import ThemeDemo from "./theme-demo/ThemeDemo.svelte";
import {state} from "./state/AllState.svelte.ts";
import {setContext} from "svelte";
import WindowSection from "@/components/theme-builder/sidebar/WindowSection.svelte";
import PreviewSettingsSection from "@/components/theme-builder/sidebar/PreviewSettingsSection.svelte";
import QueryBoxSection from "@/components/theme-builder/sidebar/QueryBoxSection.svelte";
import ResultsSection from "@/components/theme-builder/sidebar/ResultsSection.svelte";
import ScrollbarSection from "@/components/theme-builder/sidebar/ScrollbarSection.svelte";
import BulletSection from "@/components/theme-builder/sidebar/BulletSection.svelte";
import TextInput from "@/components/theme-builder/ui/inputs/TextInput.svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";
import Group from "@/components/theme-builder/ui/Group.svelte";
import SaveFileButton from "@/components/theme-builder/ui/SaveFileButton.svelte";

const FONT_WEIGHTS = ["Normal", "Bold"];
const FONT_STYLES = ["Normal", "Italic"];

const FILE_NAME_REGEXP = /[^a-z0-9_\-.() ]/gi;
const fileName = $derived(state.settings.name.replace(FILE_NAME_REGEXP, "") + ".xaml");

function fileContent(): string {
  return state.toXamlString();
}

setContext("state", state);
setContext("FONT_WEIGHTS", FONT_WEIGHTS);
setContext("FONT_STYLES", FONT_STYLES);
</script>

<div class="theme-builder">
  <div class="theme-builder-preview-container">
    <ThemeDemo />

    <div class="theme-builder-theme-metadata">
      <Group title="Theme">
        <div>
          <Checkbox label="It's a dark theme" bind:value={state.settings.dark} />
          <div class="checkbox-subtitle">This doesn't affect the actual styles, it just adds an icon next to your theme's name in settings.</div>
        </div>
        <TextInput label="Name" bind:value={state.settings.name} />
        <SaveFileButton {fileName} {fileContent}/>
      </Group>
    </div>
  </div>

  <div class="sections">
    <PreviewSettingsSection />
    <WindowSection />
    <QueryBoxSection />
    <ResultsSection />
    <ScrollbarSection />
    <BulletSection />
  </div>
</div>

<style>
.theme-builder {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 400px;
    gap: 24px;
    align-items: start;
    position: relative;
}

.theme-builder-preview-container {
    display: flex;
    flex-direction: column;
    gap: 24px;
    position: sticky;
    top: 88px;
}

.sections {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.checkbox-subtitle {
    font-size: 12px;
    margin-top: 2px;
    margin-left: 38px;
}
</style>
