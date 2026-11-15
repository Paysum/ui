<script lang="ts">
  import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

  let {
    variant = 'primary',
    class: className,
    type = 'button',
    href,
    children,
    ...rest
  }: HTMLButtonAttributes &
    HTMLAnchorAttributes & { variant?: Variant; href?: string; class?: string } = $props()

  const styles: Record<Variant, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
    secondary: 'bg-muted text-fg hover:bg-muted/70',
    outline: 'border border-line bg-background text-fg hover:bg-muted',
    ghost: 'text-muted-foreground hover:bg-muted hover:text-fg',
  }

  const classes = $derived(
    cn(
      'inline-flex h-9 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-medium transition-[background-color,color,scale] duration-150 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 motion-reduce:active:scale-100',
      styles[variant],
      className,
    ),
  )
</script>

{#if href}
  <a {href} class={classes} {...rest}>{@render children?.()}</a>
{:else}
  <button {type} class={classes} {...rest}>{@render children?.()}</button>
{/if}
