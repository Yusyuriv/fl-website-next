<script lang="ts">
import type { Snippet } from "svelte";

let isCollapsed = $state(false);

const {
  title,
  children,
}: {
  title: string;
  children: Snippet;
} = $props();

function toggleCollapse() {
  isCollapsed = !isCollapsed;
}
</script>

<div class="section" class:isCollapsed>
  <div class="section-header" onclick={toggleCollapse} role="button">
    <div class="section-title">
      <span class="chevron">▼</span>
      {title}
    </div>
  </div>

  <div class="section-content-container">
    <div class="section-content">{@render children()}</div>
  </div>
</div>

<style>
.section {
    background-color: var(--bg-alternate);
    border-radius: 8px;
    border: 1px solid var(--sep);
    --duration: 0.3s;
}

.section-header {
    font-size: 20px;
    font-weight: bold;
    border-bottom: 1px solid var(--sep);
    padding: 16px;
    cursor: pointer;
    transition: border-bottom-color var(--duration);
}

.chevron {
    display: inline-block;
    transform-origin: center;
    transition: transform var(--duration);
}

.section-content-container {
    display: grid;
    grid-template-rows: 1fr;
    transition: grid-template-rows var(--duration), margin var(--duration);
    overflow: hidden;
    margin: 16px;
}

.section-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-height: 0;
}

.isCollapsed .section-content-container {
    grid-template-rows: 0fr;
    margin: 0 16px;
}

.isCollapsed .section-header {
    border-color: transparent;
}

.isCollapsed .chevron {
    transform: rotateZ(61deg);
}

@media (prefers-reduced-motion: reduce) {
    .chevron {
        transition: none;
    }

    .section-content-container {
        transition: none;
    }
}
</style>
