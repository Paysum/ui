<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> & { class?: string } =
    $props()
</script>

<div class={cn('rounded-xl border border-line bg-card text-fg', className)} {...rest}>
  {@render children?.()}
</div>
