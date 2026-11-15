<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements'
  import { cn } from '../utils'
  import { controlHeight } from './sizing'

  let {
    class: className,
    type,
    value = $bindable(),
    ...rest
  }: HTMLInputAttributes & { class?: string } = $props()

  const classes = $derived(
    cn(
      'w-full min-w-0 rounded-lg border border-line-strong bg-input px-3 text-sm text-fg outline-none transition-[color,box-shadow,border-color] placeholder:text-ink-500 hover:border-line-hover focus:border-[color-mix(in_oklab,var(--ring)_60%,var(--line-strong))] focus:ring-[3px] focus:ring-[color-mix(in_oklab,var(--ring)_14%,transparent)] disabled:pointer-events-none disabled:bg-muted disabled:text-ink-400',
      controlHeight,
      className,
    ),
  )
</script>

<input bind:value {type} data-slot="input" class={classes} {...rest} />
