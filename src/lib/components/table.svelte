<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  let { class: className, children, ...rest }: HTMLAttributes<HTMLTableElement> & { class?: string } =
    $props()
</script>

<div class="overflow-x-auto">
  <table class={cn('w-full border-collapse text-left text-sm', className)} {...rest}>
    {@render children?.()}
  </table>
</div>
