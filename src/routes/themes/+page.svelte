<script lang="ts">
  import Button from '$lib/components/button.svelte'
  import Card from '$lib/components/card.svelte'

  const themes = [
    { name: 'Prism', note: 'Dark storefront, blue accent', ink: '#f4f4f5', wash: '#141416', accent: '#2563eb' },
    { name: 'Aurum', note: 'Warm paper and a gold line', ink: '#1c1917', wash: '#f6f1e8', accent: '#a16207' },
    { name: 'Studio', note: 'Neutral cards, quiet type', ink: '#111113', wash: '#f6f6f7', accent: '#111113' },
  ]
</script>

<svelte:head>
  <title>Store themes · Paysum UI</title>
</svelte:head>

<div class="flex flex-wrap items-end justify-between gap-4">
  <div class="max-w-xl">
    <h1 class="text-4xl font-semibold tracking-tight">Store themes</h1>
    <p class="mt-3 text-base leading-7 text-muted-foreground">
      A theme is color, type, and the card. The storefront uses the same radius and hairline as these
      components.
    </p>
  </div>
  <Button variant="outline" href="https://paysum.io">paysum.io</Button>
</div>

<div class="mt-6 grid gap-3 sm:grid-cols-3">
  {#each themes as theme (theme.name)}
    <Card class="overflow-hidden">
      <div class="p-4" style:background={theme.wash} style:color={theme.ink}>
        <p class="text-sm font-medium">{theme.name}</p>
        <p class="mt-3 text-lg tracking-tight">Creative toolkit</p>
        <p class="mt-1 text-[13px] opacity-70">$29.00</p>
        <span
          class="mt-4 inline-flex h-8 items-center rounded-md px-3 text-[13px] font-medium text-white"
          style:background={theme.accent}
          style:color="#ffffff"
        >
          Buy
        </span>
      </div>
      <p class="border-t border-line px-4 py-3 text-[13px] text-muted-foreground">{theme.note}</p>
    </Card>
  {/each}
</div>
