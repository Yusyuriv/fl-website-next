<script lang="ts">
import type {Snippet} from "svelte";
import Checkbox from "@/components/theme-builder/ui/inputs/Checkbox.svelte";

let {
  title,
  children,
  value = $bindable(),
}: {
  title: string;
  children: Snippet;
  value?: boolean;
} = $props();
</script>

<div class="field-with-label">
  {#if value != null}
    <Checkbox label={title} bind:value={value} />
    {:else}
  {title}
    {/if}
  {@render children()}
</div>

<style>
.field-with-label {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
