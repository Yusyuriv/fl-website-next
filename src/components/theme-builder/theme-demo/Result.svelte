<script lang="ts">
const {
  image,
  glyph,
  title,
  subtitle,
  shortcut,
  active,
}: {
  image?: string;
  glyph?: string;
  title?: unknown;
  subtitle?: unknown;
  shortcut: number;
  active?: boolean;
} = $props();
</script>

<div class="result" class:active>
  {#if image}
    <img src={image} alt="" class="result-icon"/>
  {:else if glyph}
    <div class="result-glyph">{glyph}</div>
    {:else}
    <div />
  {/if}
  <div class="result-text">
    <div class="result-title">{@render title?.()}</div>
    <div class="result-subtitle">{@render subtitle?.()}</div>
  </div>
  <div class="result-shortcut">Alt+{shortcut}</div>
</div>

<style>
.result {
    display: grid;
    grid-template-columns: 32px 1fr auto;
    gap: 18px;
    align-items: center;
    height: 58px;
    padding: 0 18px;
    margin-left: var(--result-margin-left);
    margin-right: var(--result-margin-right);
    border-radius: var(--result-border-radius);
}

.result.active {
    background-color: var(--result-active-background-color);
    --result-title-color: var(--result-title-active-color);
    --result-subtitle-color: var(--result-subtitle-active-color);
    --result-glyph-color: var(--result-glyph-active-color);
    --result-shortcut-color: var(--result-shortcut-active-color);
}

.result-text {
    display: flex;
    flex-direction: column;
    gap: 2px;
}

.result-text :global(i) {
    color: var(--result-highlighted-text-color);
    font-weight: var(--result-highlighted-font-weight);
}

.result-title {
    color: var(--result-title-color);
    font-size: 16px;
}

.result-subtitle {
    color: var(--result-subtitle-color);
    font-size: 14px;
}

.result-icon {
    width: 32px;
    aspect-ratio: 1;
    object-fit: contain;
}

.result-glyph {
    width: 32px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;
    font-size: 32px;
    line-height: 1;
    color: var(--result-glyph-color);
}

.result-shortcut {
    color: var(--result-shortcut-color);
    font-size: 12px;
}
</style>
