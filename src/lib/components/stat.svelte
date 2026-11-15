<script lang="ts">
  import TrendingDown from '@lucide/svelte/icons/trending-down'
  import TrendingUp from '@lucide/svelte/icons/trending-up'
  import type { Component } from 'svelte'
  import { cn } from '../utils'

  let {
    icon: Icon,
    label,
    value,
    hint,
    delta = null,
  }: {
    icon: Component<{ class?: string }>
    label: string
    value: string
    hint?: string
    delta?: number | null
  } = $props()

  const DeltaIcon = $derived(delta != null && delta < 0 ? TrendingDown : TrendingUp)
  const deltaLabel = $derived.by(() => {
    if (delta == null || !Number.isFinite(delta)) return ''
    const abs = Math.abs(delta)
    const sign = delta > 0 ? '+' : delta < 0 ? '−' : ''
    return `${sign}${abs >= 100 ? abs.toFixed(0) : abs.toFixed(1)}%`
  })
</script>

<div data-slot="stat" class="min-w-0 p-4 text-left">
  <div class="flex items-center gap-2 text-xs font-medium text-ink-400">
    <Icon class="size-4 shrink-0 text-ink-500" />
    <span class="truncate">{label}</span>
  </div>
  <div class="mt-1.5 flex items-baseline gap-2">
    <span class="truncate text-[22px] leading-7 font-medium text-fg tabular-nums">{value}</span>
    {#if delta != null && Number.isFinite(delta)}
      <span class={cn('inline-flex items-center gap-0.5 text-xs font-medium tabular-nums', delta >= 0 ? 'text-success' : 'text-danger')}>
        <DeltaIcon class="size-3" />
        {deltaLabel}
      </span>
    {/if}
  </div>
  {#if hint}<p class="mt-1 truncate text-xs text-ink-500">{hint}</p>{/if}
</div>
