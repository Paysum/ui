<script lang="ts">
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
  import { cn } from '../utils'
  import { buttonVariants, type ButtonSize, type ButtonVariant } from './button-variants'

  let {
    variant,
    size,
    class: className,
    type = 'button',
    href,
    children,
    ...rest
  }: HTMLButtonAttributes &
    HTMLAnchorAttributes & {
      variant?: ButtonVariant
      size?: ButtonSize
      href?: string
      class?: string
    } = $props()

  const classes = $derived(cn(buttonVariants({ variant, size, className })))
</script>

{#if href !== undefined}
  <a {href} data-slot="button" class={classes} {...rest}>{@render children?.()}</a>
{:else}
  <button {type} data-slot="button" class={classes} {...rest}>{@render children?.()}</button>
{/if}
