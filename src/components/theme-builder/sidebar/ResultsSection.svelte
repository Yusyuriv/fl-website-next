<script lang="ts">
import QuadrupleNumberInput from "@/components/theme-builder/ui/inputs/QuadrupleNumberInput.svelte";
import RadioGroup from "@/components/theme-builder/ui/inputs/RadioGroup.svelte";
import Section from "@/components/theme-builder/ui/Section.svelte";
import DoubleNumberInput from "@/components/theme-builder/ui/inputs/DoubleNumberInput.svelte";
import Group from "@/components/theme-builder/ui/Group.svelte";
import ColorPicker from "@/components/theme-builder/ui/inputs/ColorPicker.svelte";
import NumberInput from "@/components/theme-builder/ui/inputs/NumberInput.svelte";
import type {AllState} from "@/components/theme-builder/state/AllState.svelte.ts";
import {getContext} from "svelte";

const state: AllState = getContext("state");
const FONT_WEIGHTS: string[] = getContext("FONT_WEIGHTS");
const FONT_STYLES: string[] = getContext("FONT_STYLES");
</script>

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
    <ColorPicker label="Color" bind:value={state.result.regular.shortcut.color} alpha/>
    <NumberInput label="Font Size" bind:value={state.result.regular.shortcut.fontSize}/>
    <RadioGroup label="Font Style" options={FONT_STYLES} bind:value={state.result.regular.shortcut.fontStyle}/>
    <RadioGroup label="Font Weight" options={FONT_WEIGHTS} bind:value={state.result.regular.shortcut.fontWeight}/>
    <ColorPicker label="Active Color" bind:value={state.result.active.shortcut.color} alpha/>
    <NumberInput label="Active Font Size" bind:value={state.result.active.shortcut.fontSize}/>
    <RadioGroup label="Active Font Style" options={FONT_STYLES} bind:value={state.result.active.shortcut.fontStyle}/>
    <RadioGroup label="Active Font Weight" options={FONT_WEIGHTS} bind:value={state.result.active.shortcut.fontWeight}/>
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
    <ColorPicker label="Color" bind:value={state.result.regular.glyph.color} alpha/>
    <NumberInput label="Font Size" bind:value={state.result.regular.glyph.fontSize}/>
    <ColorPicker label="Active Color" bind:value={state.result.active.glyph.color} alpha/>
    <NumberInput label="Active Font Size" bind:value={state.result.active.glyph.fontSize}/>
  </Group>
  <Group title="Highlighted Text">
    <ColorPicker label="Highlighted Text Color" bind:value={state.result.highlightedText.color} alpha/>
    <RadioGroup options={FONT_WEIGHTS} bind:value={state.result.highlightedText.weight}/>
  </Group>
</Section>
