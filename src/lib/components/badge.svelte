<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '../utils'
  import { badgeVariants, type BadgeVariant } from './badge-variants'

  let {
    variant,
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLSpanElement> & { variant?: BadgeVariant; class?: string } = $props()
</script>

<span data-slot="badge" class={cn(badgeVariants({ variant }), className)} {...rest}>
  {@render children?.()}
</span>
