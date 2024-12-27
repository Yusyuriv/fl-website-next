<script lang="ts">
import type {Snippet} from "svelte";

const {
  title,
  children,
}: {
  title: string;
  children: Snippet;
} = $props();
</script>

<div class="field-with-label">
  {title}
  {@render children()}
</div>

<style>
.field-with-label {
    display: flex;
    flex-direction: column;
    gap: 4px;
}
</style>
