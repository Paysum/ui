<script lang="ts">
  let { label, value, hint }: { label: string; value: string; hint?: string } = $props()
</script>

<div class="rounded-xl border border-line bg-card px-4 py-3">
  <p class="text-[13px] leading-5 text-muted-foreground">{label}</p>
  <p class="mt-1 text-xl font-medium tracking-tight tabular-nums">{value}</p>
  {#if hint}<p class="mt-1 text-xs text-muted-foreground">{hint}</p>{/if}
</div>
