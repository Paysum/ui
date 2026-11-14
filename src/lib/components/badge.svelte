<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements'
  import { cn } from '../utils'

  type Tone = 'neutral' | 'success' | 'warning'
  let {
    tone = 'neutral',
    class: className,
    children,
    ...rest
  }: HTMLAttributes<HTMLSpanElement> & { tone?: Tone; class?: string } = $props()

  const styles: Record<Tone, string> = {
    neutral: 'bg-muted text-muted-foreground',
    success: 'bg-emerald-50 text-emerald-700',
    warning: 'bg-amber-50 text-amber-800',
  }
</script>

<span
  class={cn('inline-flex h-5 items-center rounded-md px-1.5 text-[11px] font-medium', styles[tone], className)}
  {...rest}
>
  {@render children?.()}
</span>
