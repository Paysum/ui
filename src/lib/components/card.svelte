<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  let { class: className, children, ...rest }: HTMLAttributes<HTMLDivElement> & { class?: string } =
    $props()
</script>

<div
  data-slot="card"
  class={cn('flex flex-col items-stretch rounded-[12px] border border-line bg-card text-card-foreground', className)}
  {...rest}
>
  {@render children?.()}
</div>
