<script lang="ts">
import ThemeDemo from "./theme-demo/ThemeDemo.svelte";
import Section from "./ui/Section.svelte";
import Field from "./ui/Field.svelte";
import Collapsible from "./ui/Collapsible.svelte";
import { state } from "./state/AllState.svelte.ts";
</script>

<div class="theme-builder">
  <ThemeDemo {state} />

  <div class="sections">
    <Section title="Preview Settings">
      <label>
        <input type="checkbox" bind:checked={state.settings.backgrounds}/>
        Backgrounds
      </label>

      <label>
        <input type="checkbox" bind:checked={state.settings.progressBar}/>
        Progress Bar
      </label>

      <label>
        <input type="checkbox" bind:checked={state.settings.caret}/>
        Caret
      </label>

      <label>
        <input type="checkbox" bind:checked={state.settings.datetime}/>
        Display date and time
      </label>

      <Field title="Active Results">
        <div class="active-results-checkboxes">
          {#each state.settings.activeResults as _, i}
            <label>
              <input type="checkbox" bind:checked={state.settings.activeResults[i]}/>
              {i + 1}
            </label>
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

      <Field title="Border Color">
        <input type="color" bind:value={state.window.border.color}/>
      </Field>

      <Field title="Background Color">
        <input type="color" bind:value={state.window.background.color}/>
      </Field>

      <Field title="Background Opacity">
        <input type="range" min="0" max="1" step="0.01" bind:value={state.window.background.opacity}/>
      </Field>

      <Field title="Backdrop Blur">
        <label>
          <input type="checkbox" bind:checked={state.window.background.blur}/>
          Enable
        </label>
      </Field>
    </Section>

    <Section title="Query Box Style">
      <Field title="Suggestion Text Color">
        <input type="color" bind:value={state.queryBox.suggestionColor}/>
      </Field>

      <Field title="Text Color">
        <input type="color" bind:value={state.queryBox.textColor}/>
      </Field>

      <Field title="Caret Color">
        <input type="color" bind:value={state.queryBox.caretColor}/>
      </Field>

      <Field title="Search Icon Visibility">
        <label>
          <input type="checkbox" bind:checked={state.queryBox.icon.visible}/>
          Visible
        </label>

        <Collapsible visible={state.queryBox.icon.visible} topMargin>
          <Field title="Search Icon Color">
            <input type="color" bind:value={state.queryBox.icon.color}/>
          </Field>

          <Field title="Search Icon Size">
            <div class="margin-inputs">
              <input type="number" bind:value={state.queryBox.icon.width}/>
              <input type="number" bind:value={state.queryBox.icon.height}/>
            </div>
          </Field>
        </Collapsible>
      </Field>

      <Field title="Progress Bar Color">
        <input type="color" bind:value={state.queryBox.progressBar.color}/>
      </Field>

      <Field title="Progress Bar Size">
        <input type="number" bind:value={state.queryBox.progressBar.height}/>
      </Field>

      <Field title="Separator Visibility">
        <label>
          <input type="checkbox" bind:checked={state.separator.visible}/>
          Visible
        </label>

        <Collapsible visible={state.separator.visible} topMargin>
          <Field title="Separator Color">
            <input type="color" bind:value={state.separator.color}/>
          </Field>

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

      <Field title="Date Font Size">
        <input type="number" bind:value={state.queryBox.date.size}/>
      </Field>

      <Field title="Date Color">
        <input type="color" bind:value={state.queryBox.date.color}/>
      </Field>

      <Field title="Date Font Weight">
        <select bind:value={state.queryBox.date.weight}>
          <option value="Normal">Normal</option>
          <option value="Bold">Bold</option>
        </select>
      </Field>

      <Field title="Time Font Size">
        <input type="number" bind:value={state.queryBox.time.size}/>
      </Field>

      <Field title="Time Color">
        <input type="color" bind:value={state.queryBox.time.color}/>
      </Field>

      <Field title="Time Font Weight">
        <select bind:value={state.queryBox.time.weight}>
          <option value="Normal">Normal</option>
          <option value="Bold">Bold</option>
        </select>
      </Field>
    </Section>

    <Section title="Result Item Style">
      <Field title="Active Background Color">
        <input type="color" bind:value={state.result.active.background.color}/>
      </Field>

      <Field title="Active Background Opacity">
        <input type="range" min="0" max="1" step="0.01" bind:value={state.result.active.background.opacity}/>
      </Field>

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

      <Field title="Shortcut Color">
        <input type="color" bind:value={state.result.regular.shortcut}/>
      </Field>

      <Field title="Shortcut Active Color">
        <input type="color" bind:value={state.result.active.shortcut}/>
      </Field>

      <Field title="Title Color">
        <input type="color" bind:value={state.result.regular.title}/>
      </Field>

      <Field title="Title Active Color">
        <input type="color" bind:value={state.result.active.title}/>
      </Field>

      <Field title="Subtitle Color">
        <input type="color" bind:value={state.result.regular.subtitle}/>
      </Field>

      <Field title="Subtitle Active Color">
        <input type="color" bind:value={state.result.active.subtitle}/>
      </Field>

      <Field title="Glyph Color">
        <input type="color" bind:value={state.result.regular.glyph}/>
      </Field>

      <Field title="Glyph Active Color">
        <input type="color" bind:value={state.result.active.glyph}/>
      </Field>

      <Field title="Highlighted Text Color">
        <input type="color" bind:value={state.result.highlightedText.color}/>
      </Field>

      <Field title="Highlighted Font Weight">
        <select bind:value={state.result.highlightedText.weight}>
          <option value="Normal">Normal</option>
          <option value="Bold">Bold</option>
        </select>
      </Field>
    </Section>

    <Section title="Scrollbar Style">
      <Field title="Width">
        <input type="number" bind:value={state.scrollbar.width}/>
      </Field>

      <Field title="Color">
        <input type="color" bind:value={state.scrollbar.color}/>
      </Field>

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
