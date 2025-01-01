<script lang="ts">
import ThemeDemo from "@/components/theme-builder/theme-demo/ThemeDemo.svelte";
import {state} from "@/components/theme-builder/state/AllState.svelte.ts";
import {onMount, setContext} from "svelte";
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
import Button from "@/components/theme-builder/ui/Button.svelte";
import PreviewPanelSection from "@/components/theme-builder/sidebar/PreviewPanelSection.svelte";

const FILE_NAME_REGEXP = /[^a-z0-9_\-.() ]/gi;
const fileName = $derived.by(() => {
  let result = state.settings.name.replace(FILE_NAME_REGEXP, "") + ".xaml";
  if (result === ".xaml") result = "theme.xaml";
  return result;
});

function fileContent(): string {
  return state.toXamlString();
}

function resetState(): void {
  if (!confirm("Are you sure you want to reset your theme?")) return;
  state.reset();
}

setContext("state", state);

onMount(() => {
  const hash = location.hash.slice(1);
  if (!hash) return;

  try {
    state.fromEncodedJSON(hash);
  } catch(e) {
    console.error(e);
  }
});

let timeout: number | null = null;

$effect(() => {
  if (timeout !== null) clearTimeout(timeout);
  const newLocation = location.pathname + `#${state.toEncodedJSON()}`;
  timeout = window.setTimeout(() => {
    history.replaceState({}, "", newLocation);
    timeout = null;
  }, 300);
});
</script>

<div class="theme-builder">
  <div class="theme-builder-preview-container">
    <ThemeDemo />

    <div class="theme-builder-theme-metadata">
      <Group title="Theme">
        <TextInput label="Name" bind:value={state.settings.name} />
        <Checkbox
          label="It's a dark theme"
          description="This doesn't affect the actual styles, it just adds an icon next to your theme's name in settings."
          bind:value={state.settings.dark}
        />
        <p class="notice">
          Please note that this preview is not a one-to-one recreation of the actual Flow Launcher window.
          It might not always look exactly the same, but it should give you a very good idea of how your theme will look.
        </p>
        <div class="actions">
          <Button onclick={resetState}>Reset</Button>
          <SaveFileButton {fileName} {fileContent}/>
        </div>
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
    <PreviewPanelSection />
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

.notice {
    font-size: 14px;
    line-height: 1.25;
    margin: 8px 0;
    opacity: 0.75;
}

.sections {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.actions {
    display: flex;
    gap: 24px;
    justify-content: flex-end;
}
</style>
