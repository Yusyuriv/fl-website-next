<script lang="ts">
import ThemeDemo from "./theme-demo/ThemeDemo.svelte";
import Section from "./ui/Section.svelte";
import CollapsibleGroup from "./ui/CollapsibleGroup.svelte";
import Group from "./ui/Group.svelte";
import Collapsible from "./ui/Collapsible.svelte";
import {state} from "./state/AllState.svelte.ts";
import ColorPicker from "./ui/inputs/ColorPicker.svelte";
import Checkbox from "./ui/inputs/Checkbox.svelte";
import RadioGroup from "./ui/inputs/RadioGroup.svelte";
import NumberInput from "./ui/inputs/NumberInput.svelte";
import DoubleNumberInput from "./ui/inputs/DoubleNumberInput.svelte";
import QuadrupleNumberInput from "./ui/inputs/QuadrupleNumberInput.svelte";
import {setContext} from "svelte";

const FONT_WEIGHTS = ["Normal", "Bold"];

setContext("state", state);
</script>

<div class="theme-builder">
  <ThemeDemo />

  <div class="sections">
    <Section title="Preview Settings">
      <Checkbox label="Backgrounds" bind:value={state.settings.backgrounds}/>
      <Checkbox label="Progress Bar" bind:value={state.settings.progressBar}/>
      <Checkbox label="Caret" bind:value={state.settings.caret}/>
      <Checkbox label="Date and time" bind:value={state.settings.datetime}/>

      <Group title="Active Results">
        <div class="active-results-checkboxes">
          {#each state.settings.activeResults as _, i}
            <Checkbox label={i + 1} bind:value={state.settings.activeResults[i]} inline/>
          {/each}
        </div>
      </Group>
    </Section>

    <Section title="Window Style">
      <Group title="Border">
        <NumberInput label="Thickness" bind:value={state.window.border.thickness}/>
        <NumberInput label="Radius" bind:value={state.window.border.radius}/>
        <ColorPicker label="Color" bind:value={state.window.border.color} alpha/>
      </Group>
      <Group title="Background">
        <ColorPicker label="Color" bind:value={state.window.background.color} alpha/>
        <Checkbox label="Blur" bind:value={state.window.background.blur}/>
      </Group>
    </Section>

    <Section title="Query Box Style">
      <Group title="Text">
        <ColorPicker label="Color" bind:value={state.queryBox.textColor} alpha/>
        <ColorPicker label="Suggestion Text Color" bind:value={state.queryBox.suggestionColor} alpha/>
        <ColorPicker label="Caret Color" bind:value={state.queryBox.caretColor} alpha/>
      </Group>

      <CollapsibleGroup title="Search Icon" bind:value={state.queryBox.icon.visible}>
        <ColorPicker label="Color" bind:value={state.queryBox.icon.color} alpha/>

        <DoubleNumberInput
          label="Size"
          bind:value1={state.queryBox.icon.width}
          bind:value2={state.queryBox.icon.height}
          line1="horizontal"
          line2="vertical"
        />
      </CollapsibleGroup>

      <Group title="Progress Bar">
        <ColorPicker label="Color" bind:value={state.queryBox.progressBar.color} alpha/>
        <NumberInput label="Size" bind:value={state.queryBox.progressBar.height} max={50}/>
      </Group>

      <CollapsibleGroup title="Separator" bind:value={state.separator.visible}>
        <Collapsible visible={state.separator.visible} topMargin>
          <ColorPicker label="Color" bind:value={state.separator.color} alpha/>

          <QuadrupleNumberInput
            label="Margins"
            bind:value1={state.separator.margins.top}
            bind:value2={state.separator.margins.right}
            bind:value3={state.separator.margins.bottom}
            bind:value4={state.separator.margins.left}
            line1="top"
            line2="right"
            line3="bottom"
            line4="left"
          />

          <NumberInput label="Height" bind:value={state.separator.size} max={50}/>
        </Collapsible>
      </CollapsibleGroup>

      <Group title="Date & Time Margins">
        <QuadrupleNumberInput
          bind:value1={state.queryBox.datetimeMargins.top}
          bind:value2={state.queryBox.datetimeMargins.right}
          bind:value3={state.queryBox.datetimeMargins.bottom}
          bind:value4={state.queryBox.datetimeMargins.left}
          line1="top"
          line2="right"
          line3="bottom"
          line4="left"
        />
      </Group>

      <Group title="Time">
        <ColorPicker label="Color" bind:value={state.queryBox.time.color} alpha/>
        <NumberInput label="Font Size" bind:value={state.queryBox.time.size} max={100}/>
        <RadioGroup options={FONT_WEIGHTS} bind:value={state.queryBox.time.weight}/>
      </Group>

      <Group title="Date">
        <ColorPicker label="Color" bind:value={state.queryBox.date.color} alpha/>
        <NumberInput label="Font Size" bind:value={state.queryBox.date.size} max={100}/>
        <RadioGroup options={FONT_WEIGHTS} bind:value={state.queryBox.date.weight}/>
      </Group>
    </Section>

    <Section title="Result Item Style">
      <Group title="Result List Margins">
        <QuadrupleNumberInput
          bind:value1={state.result.resultListMargins.top}
          bind:value2={state.result.resultListMargins.right}
          bind:value3={state.result.resultListMargins.bottom}
          bind:value4={state.result.resultListMargins.left}
          line1="top"
          line2="right"
          line3="bottom"
          line4="left"
        />
      </Group>

      <Group title="Margins">
        <DoubleNumberInput
          bind:value1={state.result.margins.left}
          bind:value2={state.result.margins.right}
          line1="left"
          line2="right"
        />
      </Group>

      <Group title="Border Radius">
        <NumberInput bind:value={state.result.borderRadius} max={100}/>
      </Group>

      <ColorPicker label="Active Background Color" bind:value={state.result.active.background} alpha/>

      <Group title="Shortcut">
        <ColorPicker label="Color" bind:value={state.result.regular.shortcut} alpha/>
        <ColorPicker label="Active Color" bind:value={state.result.active.shortcut} alpha/>
      </Group>
      <Group title="Title">
        <ColorPicker label="Color" bind:value={state.result.regular.title} alpha/>
        <ColorPicker label="Active Color" bind:value={state.result.active.title} alpha/>
      </Group>
      <Group title="Subtitle">
        <ColorPicker label="Color" bind:value={state.result.regular.subtitle} alpha/>
        <ColorPicker label="Active Color" bind:value={state.result.active.subtitle} alpha/>
      </Group>
      <Group title="Glyph">
        <ColorPicker label="Color" bind:value={state.result.regular.glyph} alpha/>
        <ColorPicker label="Active Color" bind:value={state.result.active.glyph} alpha/>
      </Group>
      <Group title="Highlighted Text">
        <ColorPicker label="Highlighted Text Color" bind:value={state.result.highlightedText.color} alpha/>
        <RadioGroup options={FONT_WEIGHTS} bind:value={state.result.highlightedText.weight}/>
      </Group>
    </Section>

    <Section title="Scrollbar Style">
      <ColorPicker label="Color" bind:value={state.scrollbar.color} alpha/>
      <NumberInput label="Width" bind:value={state.scrollbar.width} max={50}/>
      <NumberInput label="Border Radius" bind:value={state.scrollbar.borderRadius} max={50}/>
    </Section>

    <Section title="Bullet Style">
      <CollapsibleGroup title="Regular" bind:value={state.bullet.regular.visible}>
        <ColorPicker label="Color" bind:value={state.bullet.regular.color} alpha/>
        <DoubleNumberInput
          label="Size"
          bind:value1={state.bullet.regular.width}
          bind:value2={state.bullet.regular.height}
          line1="horizontal"
          line2="vertical"
        />
        <NumberInput label="Border Radius" bind:value={state.bullet.regular.borderRadius} max={50}/>
      </CollapsibleGroup>

      <CollapsibleGroup title="Active" bind:value={state.bullet.active.visible}>
        <ColorPicker label="Color" bind:value={state.bullet.active.color} alpha/>
        <DoubleNumberInput
          label="Size"
          bind:value1={state.bullet.active.width}
          bind:value2={state.bullet.active.height}
          line1="horizontal"
          line2="vertical"
        />
        <NumberInput label="Border Radius" bind:value={state.bullet.active.borderRadius} max={50}/>
      </CollapsibleGroup>
    </Section>
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

.sections {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.active-results-checkboxes {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
}
</style>
