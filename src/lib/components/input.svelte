<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  let { class: className, value = $bindable(''), ...rest }: HTMLInputAttributes & { class?: string } =
    $props()
</script>

<input
  bind:value
  class={cn(
    'h-9 w-full rounded-lg border border-line bg-background px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-fg',
    className,
  )}
  {...rest}
/>
