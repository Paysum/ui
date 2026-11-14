<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  let { class: className, value = $bindable(''), ...rest }: HTMLInputAttributes & { class?: string } =
    $props()
</script>

<input
  bind:value
  class={cn(
    'h-9 w-full rounded-md border border-line bg-card px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/30',
    className,
  )}
  {...rest}
/>
