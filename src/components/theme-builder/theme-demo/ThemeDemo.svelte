<script lang="ts">
import { getContext } from "svelte";
import Backgrounds from "./Backgrounds.svelte";
import Result from "./Result.svelte";
import QueryBox from "./QueryBox.svelte";
import Collapsible from "../ui/Collapsible.svelte";
import type { AllState } from "../state/AllState.svelte";
import Scrollbar from "@/components/theme-builder/theme-demo/Scrollbar.svelte";

const state: AllState = getContext("state");

const images = [
  {
    imagePath: "florian-van-duyn-Dm-qxdynoEc-unsplash.jpg",
    authorUsername: "flovayn",
    authorName: "Florian van Duyn",
    photoId: "Dm-qxdynoEc",
  },
  {
    imagePath: "henry-be-IicyiaPYGGI-unsplash.jpg",
    authorUsername: "henry_be",
    authorName: "Henry Be",
    photoId: "IicyiaPYGGI",
  },
  {
    imagePath: "matthew-smith-Rfflri94rs8-unsplash.jpg",
    authorUsername: "whale",
    authorName: "Matthew Smith",
    photoId: "Rfflri94rs8",
  },
  {
    imagePath: "thierry-meier-PKEPAeMBOIU-unsplash.jpg",
    authorUsername: "thierrymeier",
    authorName: "Thierry Meier",
    photoId: "PKEPAeMBOIU",
  },
];
</script>

<div
  class="demo"
  class:noProgressBar={!state.settings.progressBar}
  class:noCaret={!state.settings.caret}
  class:hasBackgrounds={state.settings.backgrounds}
  style={state.toCssPropertiesAsString()}
>
  {#if state.settings.backgrounds}
    <Backgrounds {images}/>
  {/if}

  <div class="window">
    <QueryBox settings={state.settings}/>

    <Collapsible visible={state.separator.visible}>
      <div class="separator"/>
    </Collapsible>

    <div class="results">
      <Result shortcut={1} image="/favicon.ico" active={state.settings.activeResults[0]}>
        {#snippet title()}<i>Hel</i>lo world plugin{/snippet}
      </Result>
      <Result shortcut={2} image="/favicon.ico" active={state.settings.activeResults[1]}>
        {#snippet title()}Hi{/snippet}
        {#snippet subtitle()}Say <i>Hel</i>lo to Flow Launcher{/snippet}
      </Result>
      <Result shortcut={3} image="/favicon.ico" active={state.settings.activeResults[2]}>
        {#snippet title()}<i>Hel</i>lo from the theme creator :){/snippet}
      </Result>
      <Result shortcut={4} glyph="W" active={state.settings.activeResults[3]}>
        {#snippet title()}<i>Hel</i>lo everyone{/snippet}
        {#snippet subtitle()}This result has a glyph{/snippet}
      </Result>
      <Result shortcut={5} glyph="H" active={state.settings.activeResults[4]}>
        {#snippet title()}<i>Hel</i>lo everyone again{/snippet}
        {#snippet subtitle()}This result also has a glyph{/snippet}
      </Result>

      <Scrollbar />
    </div>
  </div>
</div>

<style>
.demo,
.demo :global(*) {
    transition: all 0.2s;
}

.demo {
    position: relative;
}

.demo.hasBackgrounds {
    padding: 48px;
}

.window {
    border: var(--border-thickness) solid var(--border-color);
    border-radius: var(--border-radius);
    overflow: hidden;
    position: relative;
    z-index: 1;
    backdrop-filter: var(--backdrop-blur);
}

.window::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: var(--background);
    z-index: -1;
}

.results {
    position: relative;
    padding: var(--result-list-margins);
}

.separator {
    height: var(--separator-size);
    background-color: var(--separator-color);
    margin: var(--separator-margins);
}

@media (prefers-reduced-motion: reduce) {
    .window,
    .window :global(*) {
        transition: none !important;
    }
}
</style>
