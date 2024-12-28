<script lang="ts">
import ThemeDemo from "./theme-demo/ThemeDemo.svelte";
import Section from "./ui/Section.svelte";
import Field from "./ui/Field.svelte";
import Collapsible from "./ui/Collapsible.svelte";
import { state } from "./state/AllState.svelte.ts";
import ColorPicker from "./ui/inputs/ColorPicker.svelte";
import Checkbox from "./ui/inputs/Checkbox.svelte";
import RadioGroup from "./ui/inputs/RadioGroup.svelte";

const FONT_WEIGHTS = ["Normal", "Bold"];
</script>

<div class="theme-builder">
  <ThemeDemo {state} />

  <div class="sections">
    <Section title="Preview Settings">
      <Checkbox label="Backgrounds" bind:value={state.settings.backgrounds} />
      <Checkbox label="Progress Bar" bind:value={state.settings.progressBar} />
      <Checkbox label="Caret" bind:value={state.settings.caret} />
      <Checkbox label="Date and time" bind:value={state.settings.datetime} />

      <Field title="Active Results">
        <div class="active-results-checkboxes">
          {#each state.settings.activeResults as _, i}
            <Checkbox label={i + 1} bind:value={state.settings.activeResults[i]} inline />
          {/each}
        </div>
      </Field>
    </Section>

    <Section title="Window Style">
      <Field title="Border Thickness">
        <input type="number" bind:value={state.window.border.thickness}/>
      </Field>

      <Field title="Border Radius">
        <input type="number" bind:value={state.window.border.radius}/>
      </Field>

      <ColorPicker label="Border Color" bind:value={state.window.border.color} alpha />
      <ColorPicker label="Background Color" bind:value={state.window.background.color} alpha />

      <Checkbox label="Backdrop Blur" bind:value={state.window.background.blur} />
    </Section>

    <Section title="Query Box Style">
      <ColorPicker label="Suggestion Text Color" bind:value={state.queryBox.suggestionColor} alpha />
      <ColorPicker label="Text Color" bind:value={state.queryBox.textColor} alpha />
      <ColorPicker label="Caret Color" bind:value={state.queryBox.caretColor} alpha />

      <Field title="Search Icon Visibility" bind:value={state.queryBox.icon.visible}>
        <Collapsible visible={state.queryBox.icon.visible} topMargin>
          <ColorPicker label="Search Icon Color" bind:value={state.queryBox.icon.color} alpha />

          <Field title="Search Icon Size">
            <div class="margin-inputs">
              <input type="number" bind:value={state.queryBox.icon.width}/>
              <input type="number" bind:value={state.queryBox.icon.height}/>
            </div>
          </Field>
        </Collapsible>
      </Field>

      <ColorPicker label="Progress Bar Color" bind:value={state.queryBox.progressBar.color} alpha />

      <Field title="Progress Bar Size">
        <input type="number" bind:value={state.queryBox.progressBar.height}/>
      </Field>

      <Field title="Separator Visibility" bind:value={state.separator.visible}>
        <Collapsible visible={state.separator.visible} topMargin>
          <ColorPicker label="Separator Color" bind:value={state.separator.color} alpha />

          <Field title="Separator Margins">
            <div class="margin-inputs">
              <input type="number" bind:value={state.separator.margins.top}/>
              <input type="number" bind:value={state.separator.margins.right}/>
              <input type="number" bind:value={state.separator.margins.bottom}/>
              <input type="number" bind:value={state.separator.margins.left}/>
            </div>
          </Field>

          <Field title="Separator Height">
            <input type="number" bind:value={state.separator.size}/>
          </Field>
        </Collapsible>
      </Field>

      <Field title="Date & Time Margins">
        <div class="margin-inputs">
          <input type="number" bind:value={state.queryBox.datetimeMargins.top}/>
          <input type="number" bind:value={state.queryBox.datetimeMargins.right}/>
          <input type="number" bind:value={state.queryBox.datetimeMargins.bottom}/>
          <input type="number" bind:value={state.queryBox.datetimeMargins.left}/>
        </div>
      </Field>

      <Field title="Date Font Size">
        <input type="number" bind:value={state.queryBox.date.size}/>
      </Field>

      <ColorPicker label="Date Color" bind:value={state.queryBox.date.color} alpha />
      <RadioGroup label="Date Font Weight" options={FONT_WEIGHTS} bind:value={state.queryBox.date.weight} />

      <Field title="Time Font Size">
        <input type="number" bind:value={state.queryBox.time.size}/>
      </Field>

      <ColorPicker label="Time Color" bind:value={state.queryBox.time.color} alpha />
      <RadioGroup label="Time Font Weight" options={FONT_WEIGHTS} bind:value={state.queryBox.time.weight} />
    </Section>

    <Section title="Result Item Style">
      <ColorPicker label="Active Background Color" bind:value={state.result.active.background} alpha />

      <Field title="Result List Margins">
        <div class="margin-inputs">
          <input type="number" bind:value={state.result.resultListMargins.top}/>
          <input type="number" bind:value={state.result.resultListMargins.right}/>
          <input type="number" bind:value={state.result.resultListMargins.bottom}/>
          <input type="number" bind:value={state.result.resultListMargins.left}/>
        </div>
      </Field>

      <Field title="Margins">
        <div class="margin-inputs">
          <input type="number" bind:value={state.result.margins.left}/>
          <input type="number" bind:value={state.result.margins.right}/>
        </div>
      </Field>

      <Field title="Border Radius">
        <input type="number" bind:value={state.result.borderRadius}/>
      </Field>

      <ColorPicker label="Shortcut Color" bind:value={state.result.regular.shortcut} alpha />
      <ColorPicker label="Shortcut Active Color" bind:value={state.result.active.shortcut} alpha />
      <ColorPicker label="Title Color" bind:value={state.result.regular.title} alpha />
      <ColorPicker label="Title Active Color" bind:value={state.result.active.title} alpha />
      <ColorPicker label="Subtitle Color" bind:value={state.result.regular.subtitle} alpha />
      <ColorPicker label="Subtitle Active Color" bind:value={state.result.active.subtitle} alpha />
      <ColorPicker label="Glyph Color" bind:value={state.result.regular.glyph} alpha />
      <ColorPicker label="Glyph Active Color" bind:value={state.result.active.glyph} alpha />
      <ColorPicker label="Highlited Text Color" bind:value={state.result.highlightedText.color} alpha />

      <RadioGroup label="Highlighted Font Weight" options={FONT_WEIGHTS} bind:value={state.result.highlightedText.weight} />
    </Section>

    <Section title="Scrollbar Style">
      <Field title="Width">
        <input type="number" bind:value={state.scrollbar.width}/>
      </Field>

      <ColorPicker label="Color" bind:value={state.scrollbar.color} alpha />

      <Field title="Border Radius">
        <input type="number" bind:value={state.scrollbar.borderRadius}/>
      </Field>
    </Section>
  </div>
</div>

<style>
.theme-builder {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 300px;
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

.margin-inputs {
    display: grid;
    grid-template-columns: repeat(4, 50px);
    gap: 8px;
}
</style>
